import {ask, loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const getBalance = async (who) => stdlib.formatCurrency(await stdlib.balanceOf(who), 4);

  const [acc, accBob] = await stdlib.newTestAccount( startingBalance);
  const addrAlice = stdlib.formatAddress(acc.getAddress());
  //const addrBob = stdlib.formatAddress(accBob, getAddress());
  
  console.log(`Account ${addrAlice} has been created.`);
  //console.log(`Account ${addrBob} has been created.`);
  console.log(`Account has been created with ${await getBalance(acc)} tokens and address ${addrAlice}`);
  //console.log(`Account has been created with ${await getBalance(accBob)} tokens and address ${addrBob}`);
  
  const isAlice = await ask.ask(`Deploying the contract...`,ask.yesno);

  if (isAlice) {
    const maxAddr = parseInt(await ask.ask(`How many addresses may be added to the whitelist?`));
    const tokPerAddress = parseInt(await ask.ask(`How many tokens may be claimed per address?`));

    const hardtok = await stdlib.launchToken(acc, "hardtok", "HAM");
    acc.tokenAccept(hardtok.id);
    await hardtok.mint(acc, (maxAddr * tokPerAddress));
  const softtok = await stdlib.launchToken(accBob, "softtok", "SOM");
    acc.tokenAccept(softtok.id);
    await softtok.mint(acc, (maxAddr * tokPerAddress));

    console.log('Deploying the contract...');
    const ctcAlice = await acc.contract(backend);
    //const ctcBob = await accBob.contract(backend)

    await Promise.all([
      backend.A(ctcAlice, {
        setParams: function() {
          return [ claimtok.id, maxAddr, tokPerAddress ];
        },
        fundContract: async function() {
          console.log(`The contract has been funded.`);
          const ctcInfoD = JSON.stringify(await ctcA.getInfo());
          console.log(`The contract has deployed as: ${ctcInfoD}`);
        },
        seeAddToWhitelist: function(addr) {
          console.log(`You see address ${stdlib.formatAddress(addr)} added to the whitelist`);
        },
        seeClaim: function(addr) {
          console.log(`You see address ${stdlib.formatAddress(addr)} claim their tokens`);
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
      console.log(`Sorry, the contract has reached the maximum number of whitelisted addresses`);
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