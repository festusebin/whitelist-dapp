'reach 0.1';
'use strict';

/* eslint-disable */
const myFromMaybe = (m) => fromMaybe(m, (() => false), ((x) => x));

export const main = Reach.App(() => {

  setOptions({ connectors: [ ALGO ], untrustworthyMaps: true });
  
  const Alice = Participant('Alice', {
    setParams: Fun([], Tuple(Token, UInt, UInt)),
    fundContract: Fun([], Null),
    seeAddToWhitelist: Fun([Address], Null),
    seeClaim: Fun([Address], Null),
  });
  
  const UserAPI = API('UserAPI', {
    addToWhitelist: Fun([], Bool), 
    claimTokens: Fun([], Bool), 
  });

  const AdminAPI = API('AdminAPI', {
    endContract: Fun([], Bool),
  });

  const V = View({
    canClaimTokens: Fun([Address], Bool), 
    getTokenInfo: Token,
  });

  init();

  Alice.only(() => {
    const [ ClaimToken, MaxAddresses, TokensPerAddress ] = declassify(interact.setParams());
    const TotalTokens = (MaxAddresses * TokensPerAddress);
  });
  Alice.publish(ClaimToken, MaxAddresses, TokensPerAddress, TotalTokens);
  commit();

  Alice.publish().pay([0, [TotalTokens, ClaimToken]]);
  commit();

  Alice.interact.fundContract();
  Alice.publish();

  const whitelist = new Map(Bool); 

  V.canClaimTokens.set((m) => myFromMaybe(whitelist[m]));
  V.getTokenInfo.set(ClaimToken);

  const [ done, distrubtedTokens, whitelistSize ] = parallelReduce([ false, 0, 0 ])
      .invariant(whitelistSize <= MaxAddresses)
      .while(!done)
      .api(
        UserAPI.addToWhitelist,
        () => {},
        () => 0,
        (returnFunc) => {
          const canAdd = (whitelistSize < MaxAddresses) ? true : false;
          returnFunc(canAdd);
          if (canAdd) {
            whitelist[this] = true;
            Alice.interact.seeAddToWhitelist(this);
          }
          const whitelistIncrement = (canAdd) ? 1 : 0;

          return [ done, distrubtedTokens, whitelistSize + whitelistIncrement ];
        }
      )
      .api(
        UserAPI.claimTokens,
        () => {
            assume(balance(ClaimToken) >= TokensPerAddress);
        },
        () => 0,
        (returnFunc) => {
          const canWithdraw = (myFromMaybe(whitelist[this]) == true && balance(ClaimToken) >= TokensPerAddress) ? true : false;
          returnFunc(canWithdraw);

          if (canWithdraw) {
              transfer([0, [TokensPerAddress, ClaimToken]]).to(this);
              whitelist[this] = false;
              Alice.interact.seeClaim(this);
          }
          const claimedTokens = (canWithdraw) ? TokensPerAddress : 0;

          return [ done, distrubtedTokens + claimedTokens, whitelistSize ];
        }
      )
      .api(
        AdminAPI.endContract,
        () => {
          assume(this == Alice);
        },
        () => 0,
        (returnFunc) => {
          require(this == Alice);
          returnFunc(true);

          return [ true, distrubtedTokens, whitelistSize ];
        }
      );

      transfer(balance()).to(Alice);
      transfer([ 0, [ balance(ClaimToken), ClaimToken ] ]).to(Alice);
      commit();

  exit();
});