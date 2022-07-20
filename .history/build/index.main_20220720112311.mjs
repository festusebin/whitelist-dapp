// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      canClaimTokens: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v348, v349, v350, v351, v352, v360] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v348, v349, v350, v351, v373] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v348, v349, v350, v351, v386, v387, v394, v395] = svs;
            return (await ((async (_v380 ) => {
                const v380 = stdlib.protect(ctc0, _v380, null);
              
              const v381 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v380), null);
              let v382;
              switch (v381[0]) {
                case 'None': {
                  const v383 = v381[1];
                  v382 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v384 = v381[1];
                  v382 = v384;
                  
                  break;
                  }
                }
              
              return v382;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      getTokenInfo: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v348, v349, v350, v351, v352, v360] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v348, v349, v350, v351, v373] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v348, v349, v350, v351, v386, v387, v394, v395] = svs;
            return (await ((async () => {
              
              
              return v349;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5],
      2: [ctc0, ctc1, ctc2, ctc2, ctc5],
      5: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _AdminAPI_endContract5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_endContract5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_endContract5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_endContract0_75: ctc8,
    UserAPI_addToWhitelist0_75: ctc8,
    UserAPI_claimTokens0_75: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v348, v349, v350, v351, v386, v387, v394, v395] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc5, ctc5, ctc1, ctc5, ctc7, ctc5]);
  const v417 = ctc.selfAddress();
  const v419 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:94:12:application call to [unknown function] (defined at: ./index.rsh:94:12:function exp)', 'at ./index.rsh:53:67:application call to "runAdminAPI_endContract0_75" (defined at: ./index.rsh:92:11:function exp)', 'at ./index.rsh:53:67:application call to [unknown function] (defined at: ./index.rsh:53:67:function exp)'],
    msg: 'in',
    who: 'AdminAPI_endContract'
    });
  const v421 = stdlib.addressEq(v417, v348);
  stdlib.assert(v421, {
    at: './index.rsh:95:17:application',
    fs: ['at ./index.rsh:94:12:application call to [unknown function] (defined at: ./index.rsh:94:12:function exp)', 'at ./index.rsh:94:12:application call to [unknown function] (defined at: ./index.rsh:94:12:function exp)', 'at ./index.rsh:53:67:application call to "runAdminAPI_endContract0_75" (defined at: ./index.rsh:92:11:function exp)', 'at ./index.rsh:53:67:application call to [unknown function] (defined at: ./index.rsh:53:67:function exp)'],
    msg: null,
    who: 'AdminAPI_endContract'
    });
  const v424 = ['AdminAPI_endContract0_75', v419];
  
  const txn1 = await (ctc.sendrecv({
    args: [v348, v349, v350, v351, v386, v387, v394, v395, v424],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:97:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v430], secs: v432, time: v431, didSend: v195, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'AdminAPI_endContract0_75': {
          const v433 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_endContract"
            });
          ;
          const v442 = true;
          const v443 = await txn1.getOutput('AdminAPI_endContract', 'v442', ctc1, v442);
          
          sim_r.txns.push({
            kind: 'from',
            to: v348,
            tok: undefined /* Nothing */
            });
          const v1154 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          const v1155 = v1154[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v348,
            tok: v349
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v349
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'UserAPI_addToWhitelist0_75': {
          const v499 = v430[1];
          
          break;
          }
        case 'UserAPI_claimTokens0_75': {
          const v565 = v430[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc5, ctc1, ctc5, ctc7, ctc5, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v195, from: v429 } = txn1;
  switch (v430[0]) {
    case 'AdminAPI_endContract0_75': {
      const v433 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v441 = stdlib.addressEq(v429, v348);
      stdlib.assert(v441, {
        at: './index.rsh:99:18:application',
        fs: ['at ./index.rsh:98:22:application call to [unknown function] (defined at: ./index.rsh:98:22:function exp)'],
        msg: null,
        who: 'AdminAPI_endContract'
        });
      const v442 = true;
      const v443 = await txn1.getOutput('AdminAPI_endContract', 'v442', ctc1, v442);
      if (v195) {
        stdlib.protect(ctc0, await interact.out(v433, v443), {
          at: './index.rsh:93:9:application',
          fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:9:function exp)', 'at ./index.rsh:100:21:application call to "returnFunc" (defined at: ./index.rsh:98:22:function exp)', 'at ./index.rsh:98:22:application call to [unknown function] (defined at: ./index.rsh:98:22:function exp)'],
          msg: 'out',
          who: 'AdminAPI_endContract'
          });
        }
      else {
        }
      
      ;
      const v1154 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
      const v1155 = v1154[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'UserAPI_addToWhitelist0_75': {
      const v499 = v430[1];
      return;
      break;
      }
    case 'UserAPI_claimTokens0_75': {
      const v565 = v430[1];
      return;
      break;
      }
    }
  
  
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AdminAPI_endContract0_75: ctc6,
    UserAPI_addToWhitelist0_75: ctc6,
    UserAPI_claimTokens0_75: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v333 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v334 = [v333];
  const v340 = stdlib.protect(ctc5, await interact.setParams(), {
    at: './index.rsh:35:89:application',
    fs: ['at ./index.rsh:34:16:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)'],
    msg: 'setParams',
    who: 'Alice'
    });
  const v341 = v340[stdlib.checkedBigNumberify('./index.rsh:35:89:application', stdlib.UInt_max, '0')];
  const v342 = v340[stdlib.checkedBigNumberify('./index.rsh:35:89:application', stdlib.UInt_max, '1')];
  const v343 = v340[stdlib.checkedBigNumberify('./index.rsh:35:89:application', stdlib.UInt_max, '2')];
  const v347 = stdlib.mul(v342, v343);
  
  const txn1 = await (ctc.sendrecv({
    args: [v341, v342, v343, v347],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v349, v350, v351, v352], secs: v354, time: v353, didSend: v37, from: v348 } = txn1;
      
      const v355 = v334[stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '0')];
      const v357 = v355[stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '1')];
      const v358 = v355[stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '2')];
      const v359 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v357, v358];
      const v360 = stdlib.Array_set(v334, stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '0'), v359);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v349
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v349, v350, v351, v352], secs: v354, time: v353, didSend: v37, from: v348 } = txn1;
  const v355 = v334[stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '0')];
  const v357 = v355[stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '1')];
  const v358 = v355[stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '2')];
  const v359 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v357, v358];
  const v360 = stdlib.Array_set(v334, stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '0'), v359);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v348, v349, v350, v351, v352, v360],
    evt_cnt: 0,
    funcNum: 1,
    lct: v353,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:27:decimal', stdlib.UInt_max, '0'), [[v352, v349]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v364, time: v363, didSend: v44, from: v362 } = txn2;
      
      ;
      const v365 = v360[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '0')];
      const v366 = v365[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '0')];
      const v367 = stdlib.add(v366, v352);
      const v370 = v365[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '1')];
      const v371 = v365[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '2')];
      const v372 = [v367, v370, v371];
      const v373 = stdlib.Array_set(v360, stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '0'), v372);
      sim_r.txns.push({
        amt: v352,
        kind: 'to',
        tok: v349
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc4, ctc4, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v364, time: v363, didSend: v44, from: v362 } = txn2;
  ;
  const v365 = v360[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '0')];
  const v366 = v365[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '0')];
  const v367 = stdlib.add(v366, v352);
  const v370 = v365[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '1')];
  const v371 = v365[stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '2')];
  const v372 = [v367, v370, v371];
  const v373 = stdlib.Array_set(v360, stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '0'), v372);
  ;
  const v374 = stdlib.addressEq(v348, v362);
  stdlib.assert(v374, {
    at: './index.rsh:41:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.fundContract(), {
    at: './index.rsh:44:33:application',
    fs: ['at ./index.rsh:44:33:application call to [unknown function] (defined at: ./index.rsh:44:33:function exp)', 'at ./index.rsh:44:33:application call to "liftedInteract" (defined at: ./index.rsh:44:33:application)'],
    msg: 'fundContract',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v348, v349, v350, v351, v373],
    evt_cnt: 0,
    funcNum: 2,
    lct: v363,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v378, time: v377, didSend: v53, from: v376 } = txn3;
      
      ;
      const v386 = false;
      const v387 = stdlib.checkedBigNumberify('./index.rsh:53:80:decimal', stdlib.UInt_max, '0');
      const v388 = v377;
      const v394 = v373;
      const v395 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v397 = v386 ? false : true;
        
        return v397;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v348,
          tok: undefined /* Nothing */
          });
        const v636 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
        const v637 = v636[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v348,
          tok: v349
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v349
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc4, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v378, time: v377, didSend: v53, from: v376 } = txn3;
  ;
  const v379 = stdlib.addressEq(v348, v376);
  stdlib.assert(v379, {
    at: './index.rsh:45:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v386 = false;
  let v387 = stdlib.checkedBigNumberify('./index.rsh:53:80:decimal', stdlib.UInt_max, '0');
  let v388 = v377;
  let v394 = v373;
  let v395 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v397 = v386 ? false : true;
    
    return v397;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v430], secs: v432, time: v431, didSend: v195, from: v429 } = txn4;
    switch (v430[0]) {
      case 'AdminAPI_endContract0_75': {
        const v433 = v430[1];
        undefined /* setApiDetails */;
        ;
        const v441 = stdlib.addressEq(v429, v348);
        stdlib.assert(v441, {
          at: './index.rsh:99:18:application',
          fs: ['at ./index.rsh:98:22:application call to [unknown function] (defined at: ./index.rsh:98:22:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v442 = true;
        await txn4.getOutput('AdminAPI_endContract', 'v442', ctc1, v442);
        const cv386 = true;
        const cv387 = v387;
        const cv388 = v431;
        const cv394 = v394;
        const cv395 = v395;
        
        v386 = cv386;
        v387 = cv387;
        v388 = cv388;
        v394 = cv394;
        v395 = cv395;
        
        continue;
        break;
        }
      case 'UserAPI_addToWhitelist0_75': {
        const v499 = v430[1];
        undefined /* setApiDetails */;
        ;
        const v516 = stdlib.lt(v387, v350);
        const v517 = v516;
        await txn4.getOutput('UserAPI_addToWhitelist', 'v517', ctc1, v517);
        if (v516) {
          await stdlib.mapSet(map0, v429, true);
          stdlib.protect(ctc0, await interact.seeAddToWhitelist(v429), {
            at: './index.rsh:65:48:application',
            fs: ['at ./index.rsh:65:48:application call to [unknown function] (defined at: ./index.rsh:65:48:function exp)', 'at ./index.rsh:65:48:application call to "liftedInteract" (defined at: ./index.rsh:65:48:application)', 'at ./index.rsh:60:22:application call to [unknown function] (defined at: ./index.rsh:60:22:function exp)'],
            msg: 'seeAddToWhitelist',
            who: 'Alice'
            });
          
          const v525 = stdlib.add(v387, stdlib.checkedBigNumberify('./index.rsh:67:49:decimal', stdlib.UInt_max, '1'));
          const cv386 = v386;
          const cv387 = v525;
          const cv388 = v431;
          const cv394 = v394;
          const cv395 = v395;
          
          v386 = cv386;
          v387 = cv387;
          v388 = cv388;
          v394 = cv394;
          v395 = cv395;
          
          continue;}
        else {
          const cv386 = v386;
          const cv387 = v387;
          const cv388 = v431;
          const cv394 = v394;
          const cv395 = v395;
          
          v386 = cv386;
          v387 = cv387;
          v388 = cv388;
          v394 = cv394;
          v395 = cv395;
          
          continue;}
        break;
        }
      case 'UserAPI_claimTokens0_75': {
        const v565 = v430[1];
        undefined /* setApiDetails */;
        ;
        const v597 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v429), null);
        let v598;
        switch (v597[0]) {
          case 'None': {
            const v599 = v597[1];
            v598 = false;
            
            break;
            }
          case 'Some': {
            const v600 = v597[1];
            v598 = v600;
            
            break;
            }
          }
        const v602 = v394[stdlib.checkedBigNumberify('./index.rsh:79:79:application', stdlib.UInt_max, '0')];
        const v603 = v602[stdlib.checkedBigNumberify('./index.rsh:79:79:application', stdlib.UInt_max, '0')];
        const v604 = stdlib.ge(v603, v351);
        const v605 = v598 ? v604 : false;
        const v606 = v605;
        await txn4.getOutput('UserAPI_claimTokens', 'v606', ctc1, v606);
        if (v605) {
          const v617 = stdlib.sub(v603, v351);
          const v620 = v602[stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '1')];
          const v621 = v602[stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '2')];
          const v622 = [v617, v620, v621];
          const v623 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '0'), v622);
          ;
          await stdlib.mapSet(map0, v429, false);
          stdlib.protect(ctc0, await interact.seeClaim(v429), {
            at: './index.rsh:85:41:application',
            fs: ['at ./index.rsh:85:41:application call to [unknown function] (defined at: ./index.rsh:85:41:function exp)', 'at ./index.rsh:85:41:application call to "liftedInteract" (defined at: ./index.rsh:85:41:application)', 'at ./index.rsh:78:22:application call to [unknown function] (defined at: ./index.rsh:78:22:function exp)'],
            msg: 'seeClaim',
            who: 'Alice'
            });
          
          const cv386 = v386;
          const cv387 = v387;
          const cv388 = v431;
          const cv394 = v623;
          const cv395 = v395;
          
          v386 = cv386;
          v387 = cv387;
          v388 = cv388;
          v394 = cv394;
          v395 = cv395;
          
          continue;}
        else {
          const cv386 = v386;
          const cv387 = v387;
          const cv388 = v431;
          const cv394 = v394;
          const cv395 = v395;
          
          v386 = cv386;
          v387 = cv387;
          v388 = cv388;
          v394 = cv394;
          v395 = cv395;
          
          continue;}
        break;
        }
      }
    
    }
  ;
  const v636 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
  const v637 = v636[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  
  
  };
export async function _UserAPI_addToWhitelist5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_addToWhitelist5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_addToWhitelist5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_endContract0_75: ctc8,
    UserAPI_addToWhitelist0_75: ctc8,
    UserAPI_claimTokens0_75: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v348, v349, v350, v351, v386, v387, v394, v395] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc5, ctc5, ctc1, ctc5, ctc7, ctc5]);
  const v400 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:12:application call to [unknown function] (defined at: ./index.rsh:58:12:function exp)', 'at ./index.rsh:53:67:application call to "runUserAPI_addToWhitelist0_75" (defined at: ./index.rsh:56:11:function exp)', 'at ./index.rsh:53:67:application call to [unknown function] (defined at: ./index.rsh:53:67:function exp)'],
    msg: 'in',
    who: 'UserAPI_addToWhitelist'
    });
  const v404 = ['UserAPI_addToWhitelist0_75', v400];
  
  const txn1 = await (ctc.sendrecv({
    args: [v348, v349, v350, v351, v386, v387, v394, v395, v404],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v430], secs: v432, time: v431, didSend: v195, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'AdminAPI_endContract0_75': {
          const v433 = v430[1];
          
          break;
          }
        case 'UserAPI_addToWhitelist0_75': {
          const v499 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_addToWhitelist"
            });
          ;
          const v516 = stdlib.lt(v387, v350);
          const v517 = v516;
          const v518 = await txn1.getOutput('UserAPI_addToWhitelist', 'v517', ctc1, v517);
          
          if (v516) {
            await stdlib.simMapSet(sim_r, 0, v429, true);
            const v525 = stdlib.add(v387, stdlib.checkedBigNumberify('./index.rsh:67:49:decimal', stdlib.UInt_max, '1'));
            const v1196 = v386;
            const v1197 = v525;
            const v1199 = v394;
            const v1200 = v395;
            if (v386) {
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: undefined /* Nothing */
                });
              const v1202 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
              const v1203 = v1202[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: v349
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v349
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.isHalt = false;
              }}
          else {
            const v1204 = v386;
            const v1205 = v387;
            const v1207 = v394;
            const v1208 = v395;
            if (v386) {
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: undefined /* Nothing */
                });
              const v1210 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
              const v1211 = v1210[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: v349
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v349
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'UserAPI_claimTokens0_75': {
          const v565 = v430[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc5, ctc1, ctc5, ctc7, ctc5, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v195, from: v429 } = txn1;
  switch (v430[0]) {
    case 'AdminAPI_endContract0_75': {
      const v433 = v430[1];
      return;
      break;
      }
    case 'UserAPI_addToWhitelist0_75': {
      const v499 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v516 = stdlib.lt(v387, v350);
      const v517 = v516;
      const v518 = await txn1.getOutput('UserAPI_addToWhitelist', 'v517', ctc1, v517);
      if (v195) {
        stdlib.protect(ctc0, await interact.out(v499, v518), {
          at: './index.rsh:57:9:application',
          fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:9:function exp)', 'at ./index.rsh:62:21:application call to "returnFunc" (defined at: ./index.rsh:60:22:function exp)', 'at ./index.rsh:60:22:application call to [unknown function] (defined at: ./index.rsh:60:22:function exp)'],
          msg: 'out',
          who: 'UserAPI_addToWhitelist'
          });
        }
      else {
        }
      
      if (v516) {
        await stdlib.mapSet(map0, v429, true);
        const v525 = stdlib.add(v387, stdlib.checkedBigNumberify('./index.rsh:67:49:decimal', stdlib.UInt_max, '1'));
        const v1196 = v386;
        const v1197 = v525;
        const v1199 = v394;
        const v1200 = v395;
        if (v386) {
          ;
          const v1202 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          const v1203 = v1202[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1204 = v386;
        const v1205 = v387;
        const v1207 = v394;
        const v1208 = v395;
        if (v386) {
          ;
          const v1210 = v394[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          const v1211 = v1210[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          ;
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'UserAPI_claimTokens0_75': {
      const v565 = v430[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_claimTokens5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_claimTokens5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_claimTokens5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_endContract0_75: ctc8,
    UserAPI_addToWhitelist0_75: ctc8,
    UserAPI_claimTokens0_75: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v348, v349, v350, v351, v386, v387, v394, v395] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc5, ctc5, ctc1, ctc5, ctc7, ctc5]);
  const v408 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:74:12:application call to [unknown function] (defined at: ./index.rsh:74:12:function exp)', 'at ./index.rsh:53:67:application call to "runUserAPI_claimTokens0_75" (defined at: ./index.rsh:72:11:function exp)', 'at ./index.rsh:53:67:application call to [unknown function] (defined at: ./index.rsh:53:67:function exp)'],
    msg: 'in',
    who: 'UserAPI_claimTokens'
    });
  const v410 = v394[stdlib.checkedBigNumberify('./index.rsh:75:27:application', stdlib.UInt_max, '0')];
  const v411 = v410[stdlib.checkedBigNumberify('./index.rsh:75:27:application', stdlib.UInt_max, '0')];
  const v412 = stdlib.ge(v411, v351);
  stdlib.assert(v412, {
    at: './index.rsh:75:19:application',
    fs: ['at ./index.rsh:74:12:application call to [unknown function] (defined at: ./index.rsh:74:12:function exp)', 'at ./index.rsh:74:12:application call to [unknown function] (defined at: ./index.rsh:74:12:function exp)', 'at ./index.rsh:53:67:application call to "runUserAPI_claimTokens0_75" (defined at: ./index.rsh:72:11:function exp)', 'at ./index.rsh:53:67:application call to [unknown function] (defined at: ./index.rsh:53:67:function exp)'],
    msg: null,
    who: 'UserAPI_claimTokens'
    });
  const v415 = ['UserAPI_claimTokens0_75', v408];
  
  const txn1 = await (ctc.sendrecv({
    args: [v348, v349, v350, v351, v386, v387, v394, v395, v415],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v430], secs: v432, time: v431, didSend: v195, from: v429 } = txn1;
      
      switch (v430[0]) {
        case 'AdminAPI_endContract0_75': {
          const v433 = v430[1];
          
          break;
          }
        case 'UserAPI_addToWhitelist0_75': {
          const v499 = v430[1];
          
          break;
          }
        case 'UserAPI_claimTokens0_75': {
          const v565 = v430[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_claimTokens"
            });
          ;
          const v597 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v429), null);
          let v598;
          switch (v597[0]) {
            case 'None': {
              const v599 = v597[1];
              v598 = false;
              
              break;
              }
            case 'Some': {
              const v600 = v597[1];
              v598 = v600;
              
              break;
              }
            }
          const v602 = v394[stdlib.checkedBigNumberify('./index.rsh:79:79:application', stdlib.UInt_max, '0')];
          const v603 = v602[stdlib.checkedBigNumberify('./index.rsh:79:79:application', stdlib.UInt_max, '0')];
          const v604 = stdlib.ge(v603, v351);
          const v605 = v598 ? v604 : false;
          const v606 = v605;
          const v607 = await txn1.getOutput('UserAPI_claimTokens', 'v606', ctc1, v606);
          
          if (v605) {
            const v617 = stdlib.sub(v603, v351);
            const v620 = v602[stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '1')];
            const v621 = v602[stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '2')];
            const v622 = [v617, v620, v621];
            const v623 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '0'), v622);
            sim_r.txns.push({
              kind: 'from',
              to: v429,
              tok: v349
              });
            await stdlib.simMapSet(sim_r, 0, v429, false);
            const v1252 = v386;
            const v1253 = v387;
            const v1255 = v623;
            const v1256 = v395;
            if (v386) {
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: undefined /* Nothing */
                });
              const v1258 = v623[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
              const v1259 = v1258[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: v349
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v349
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.isHalt = false;
              }}
          else {
            const v1260 = v386;
            const v1261 = v387;
            const v1263 = v394;
            const v1264 = v395;
            if (v386) {
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v348,
                tok: v349
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v349
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc5, ctc1, ctc5, ctc7, ctc5, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v430], secs: v432, time: v431, didSend: v195, from: v429 } = txn1;
  switch (v430[0]) {
    case 'AdminAPI_endContract0_75': {
      const v433 = v430[1];
      return;
      break;
      }
    case 'UserAPI_addToWhitelist0_75': {
      const v499 = v430[1];
      return;
      break;
      }
    case 'UserAPI_claimTokens0_75': {
      const v565 = v430[1];
      undefined /* setApiDetails */;
      ;
      const v597 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v429), null);
      let v598;
      switch (v597[0]) {
        case 'None': {
          const v599 = v597[1];
          v598 = false;
          
          break;
          }
        case 'Some': {
          const v600 = v597[1];
          v598 = v600;
          
          break;
          }
        }
      const v602 = v394[stdlib.checkedBigNumberify('./index.rsh:79:79:application', stdlib.UInt_max, '0')];
      const v603 = v602[stdlib.checkedBigNumberify('./index.rsh:79:79:application', stdlib.UInt_max, '0')];
      const v604 = stdlib.ge(v603, v351);
      const v605 = v598 ? v604 : false;
      const v606 = v605;
      const v607 = await txn1.getOutput('UserAPI_claimTokens', 'v606', ctc1, v606);
      if (v195) {
        stdlib.protect(ctc0, await interact.out(v565, v607), {
          at: './index.rsh:73:9:application',
          fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:9:function exp)', 'at ./index.rsh:80:21:application call to "returnFunc" (defined at: ./index.rsh:78:22:function exp)', 'at ./index.rsh:78:22:application call to [unknown function] (defined at: ./index.rsh:78:22:function exp)'],
          msg: 'out',
          who: 'UserAPI_claimTokens'
          });
        }
      else {
        }
      
      if (v605) {
        const v617 = stdlib.sub(v603, v351);
        const v620 = v602[stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '1')];
        const v621 = v602[stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '2')];
        const v622 = [v617, v620, v621];
        const v623 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:83:63:application', stdlib.UInt_max, '0'), v622);
        ;
        await stdlib.mapSet(map0, v429, false);
        const v1252 = v386;
        const v1253 = v387;
        const v1255 = v623;
        const v1256 = v395;
        if (v386) {
          ;
          const v1258 = v623[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          const v1259 = v1258[stdlib.checkedBigNumberify('./index.rsh:107:30:application', stdlib.UInt_max, '0')];
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1260 = v386;
        const v1261 = v387;
        const v1263 = v394;
        const v1264 = v395;
        if (v386) {
          ;
          ;
          return;
          }
        else {
          return;
          }}
      break;
      }
    }
  
  
  };
export async function AdminAPI_endContract(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_endContract expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_endContract expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _AdminAPI_endContract5(ctcTop, interact);}
  };
export async function UserAPI_addToWhitelist(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_addToWhitelist expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_addToWhitelist expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _UserAPI_addToWhitelist5(ctcTop, interact);}
  };
export async function UserAPI_claimTokens(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_claimTokens expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_claimTokens expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _UserAPI_claimTokens5(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`AdminAPI_endContract()byte`, `UserAPI_addToWhitelist()byte`, `UserAPI_claimTokens()byte`],
    pure: [`canClaimTokens(address)byte`, `getTokenInfo()uint64`],
    sigs: [`AdminAPI_endContract()byte`, `UserAPI_addToWhitelist()byte`, `UserAPI_claimTokens()byte`, `canClaimTokens(address)byte`, `getTokenInfo()uint64`]
    },
  appApproval: `BiAOAAECBAUIICgw1c/1ggj+pviZD97PvLcPkqHqjgOgjQYmBAEAAAIAAAEBIjUAMRhBBMQpZEkiWzUBIQVbNQIxGSMSQQAIMQAoKmZCBJI2GgAXSUEAnyI1BCM1BkkhCQxAAGFJIQoMQABMSSELDEAADiELEkQpNf8rNP9QQgCSIQoSRDQBIQQSRDYaAYgEhUk1/iJVQAAGIjX/QgAONP5XAQEXSTX9Nf9CAAA0/xZRBwg1B0IEOSEJEkQpNf8oNP9QQgBNSSEMDEAAECEMEkQpNf+AAQI0/1BCADaBna36FhJENAEhBBJEKGRJNQNXIAg1B0ID+jYaAhc1BDYaAzYaARdJJAxAAedJJQxAAZklEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/IQZbNf4hB1s1/SEIWzX8VzgBFzX7gTlbNfpXQRE1+YFSWzX4STUFNfeABK571AY091CwNPciVUkjDEABEEkkDEAAryQSRDEAiAOZSTX1IlVAAAYiNfZCAA409VcBARdJNfQ19kIAADT5VwARSTX1Ils19DT2NPQ0/A8QNfOACAAAAAAAAAJeNPMWUQcIULA08xZRBwg1BzTzQQBBsSKyATT8shIlshAxALIUNP6yEbMxACiAAgEAZjT/NP40/TT8NPs0+jIGNPQ0/AkWNPVXCAhQNPVXEAFQNPhCAhI0/zT+NP00/DT7NPoyBjT5NPhCAf1INPo0/Qw19oAIAAAAAAAAAgU09hZRBwhQsDT2FlEHCDUHNPZBAB8xACiAAgEBZjT/NP40/TT8NPs0+iMIMgY0+TT4QgG3NP80/jT9NPw0+zT6MgY0+TT4QgGiSDEANP8SRIAJAAAAAAAAAboBsCs1BzT/NP40/TT8IzT6MgY0+TT4QgF4JBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wNP8xABJENP80AyEGWzQDIQdbNAMhCFsiIjIGNANXOBEiQgEwSSMMQACKSCM0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQZbNf4hB1s1/SEIWzX8gThbNftXQBE1+oAEmouRdLA0+lcAEUk1+SJbNPsIFjT5VwgIUDT5VxABUDX4NPs0/ogB4zT/MQASRDT/NP4WUDT9FlA0/BZQNPhQKEsBVwBJZ0gkNQEyBjUCQgFESCENiAGcIjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEFWzX+gRBbNf2BGFs1/IAE9u2r0jT/FlA0/hZQNP0WUDT8FlCwgRGvSTX7VwARNfohBa80+lcICFA0+lcQAVA1+SENiAE8sSKyASKyEiWyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQNPwWUDT5UChLAVcAUWdIIzUBMgY1AkIApDX/Nf41/TX8Nfs1+jX5Nfg19zT7QQBDsSKyATT/sggjshA097IHs7EisgE0/lcAESJbshIlshA097IUNPiyEbOxIrIBIrISJbIQMgmyFTIKshQ0+LIRs0IALjT3NPgWUDT5FlA0+hZQKFA0/BZQNP5QNP8WUChLAVcAWmdIIQQ1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAAA0gqiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 90,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:108:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:53:67:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "AdminAPI_endContract": AdminAPI_endContract,
  "Alice": Alice,
  "UserAPI_addToWhitelist": UserAPI_addToWhitelist,
  "UserAPI_claimTokens": UserAPI_claimTokens
  };
export const _APIs = {
  AdminAPI: {
    endContract: AdminAPI_endContract
    },
  UserAPI: {
    addToWhitelist: UserAPI_addToWhitelist,
    claimTokens: UserAPI_claimTokens
    }
  };
