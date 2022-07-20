import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

(async () => {
  const startingBalance = stdlib.parseCurrency(100);
  const getBalance = async (who) => stdlib.formatCurrency(await stdlib.balanceOf(who), 4);

  const acc = await stdlib.newTestAccount(startingBalance);
  const addr = stdlib.formatAddress(acc.getAddress());
  
  console.log(`Account ${addr} has been created.`);
  console.log(`Account has been created with ${await getBalance(acc)} tokens and address ${addr}`);

  const isAlice = await ask.ask(`Deploying the contract...`,ask.yesno);

  if (isAlice) {
    const maxAddr = parseInt(await ask.ask(`Addresses you want added to the whitelist?`));
    const tokPerAddress = parseInt(await ask.ask(`How many tokens to be claimed?`));

    const claimtok = await stdlib.launchToken(acc, "claimtok", "CLM");
    acc.tokenAccept(claimtok.id);
    await claimtok.mint(acc, (maxAddr * tokPerAddress));

    console.log('Deploying the contract...');
    const ctcAlice = await acc.contract(backend);

    await Promise.all([
      backend.Alice(ctcAlice, {
        setParams: function() {
          return [ claimtok.id, maxAddr, tokPerAddress ];
        },
        fundContract: async function() {
          console.log(`The contract has been funded.`);
          const ctcInfoD = JSON.stringify(await ctcAlice.getInfo());
          console.log(`The contract has deployed as: ${ctcInfoD}`);
        },
        seeAddToWhitelist: function(addr) {
          console.log(`This address ${stdlib.formatAddress(addr)} has been added to the whitelist`);
        },
        seeClaim: function(addr) {
          console.log(`This address ${stdlib.formatAddress(addr)} claims their tokens`);
        },
      }),
    ]);

  }
  else {
    const ctcInfoA = await ask.ask(`Enter the contract string:`,JSON.parse);
    console.log(`Joining the contract...`);
    const ctcAttacher = acc.contract(backend, ctcInfoA);

    // request add to whitelist
    const addedToWhitelist = await ctcAttacher.a.UserAPI.addToWhitelist();

    if (!addedToWhitelist) {
      console.log(`Oops, the contract has reached its maximum number of whitelisted addresses`);
      process.exit();
    }

    const tkn = await ctcAttacher.v.getTokenInfo();
    const tknid = stdlib.bigNumberToNumber(tkn[1]);

    console.log(`Opting in to the token with ID ${tknid}...`);
    await acc.tokenAccept(tkn[1]);

    const recTokens = await ctcAttacher.a.UserAPI.claimTokens();
    
    if (recTokens) {
      console.log(`Your tokens with ID ${tknid} have been claimed from the contract`);
    }
    else {
      console.log(`Sorry, you are unable to claim token ${tknid}`);
    }

    console.log(`Your now have a balance of ${stdlib.formatCurrency(await acc.balanceOf(tkn.id))} of token ${tknid}`);
  }

  process.exit();
})();