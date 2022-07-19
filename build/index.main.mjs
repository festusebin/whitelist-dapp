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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc1,
    Some: ctc1
    });
  const map0_ctc = ctc3;
  
  const map1_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function A(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:7:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:7:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v40, time: v39, didSend: v22, from: v38 } = txn1;
      
      ;
      await stdlib.simMapSet(sim_r, 1, v38, null);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v40, time: v39, didSend: v22, from: v38 } = txn1;
  ;
  await stdlib.mapSet(map1, v38, null);
  const txn2 = await (ctc.sendrecv({
    args: [v38],
    evt_cnt: 0,
    funcNum: 1,
    lct: v39,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:12:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v43, time: v42, didSend: v27, from: v41 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v43, time: v42, didSend: v27, from: v41 } = txn2;
  ;
  const v44 = stdlib.addressEq(v38, v41);
  stdlib.assert(v44, {
    at: './index.rsh:12:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAGCAQImAwEAAQEAIjUAMRhBARsqZEkiWzUBgQhbNQIxGSMSQQAbMQAkr0sBKEsCVwB/ZksBKUsCV38DZkhIQgDWNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAJyMSRCM0ARJENARJIhJMNAISEUQoZDUDgASai5F0sDQDMQASREIAVEiBoI0GiADPIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxADEAiACbI4GBAUxWSwEoSwJXAH9mSwEpSwJXfwNmSEgxAChLAVcAIGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEJTE3EkQiNQEiNQJC/69JMRhhQAAESCSviUkoYksBKWJQTEiJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 2,
  mapDataSize: 130,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a9c380380610a9c833981016040819052610022916101aa565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100e8565b336000818152600560209081526040808320805462ff00ff191660019081179091558151808401835285815293819055439055805191820193909352909101604051602081830303815290604052600290805190602001906100e0929190610111565b50505061024d565b8161010d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461011d90610212565b90600052602060002090601f01602090048101928261013f5760008555610185565b82601f1061015857805160ff1916838001178555610185565b82800160010185558215610185579182015b8281111561018557825182559160200191906001019061016a565b50610191929150610195565b5090565b5b808211156101915760008155600101610196565b6000604082840312156101bc57600080fd5b604080519081016001600160401b03811182821017156101ec57634e487b7160e01b600052604160045260246000fd5b604052825181526020830151801515811461020657600080fd5b60208201529392505050565b600181811c9082168061022657607f821691505b6020821081141561024757634e487b7160e01b600052602260045260246000fd5b50919050565b6108408061025c6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780633bc5b7bf1461009657806383230757146100c3578063ab53f2c6146100d8578063cadc2e7a146100fb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046105d9565b610128565b3480156100a257600080fd5b506100b66100b1366004610606565b61026e565b60405161007a919061065e565b3480156100cf57600080fd5b50600154610070565b3480156100e457600080fd5b506100ed6102b7565b60405161007a9291906106af565b34801561010757600080fd5b5061011b610116366004610606565b610354565b60405161007a919061070c565b610138600160005414600a61037a565b6101528135158061014b57506001548235145b600b61037a565b6000808055600280546101649061073e565b80601f01602080910402602001604051908101604052809291908181526020018280546101909061073e565b80156101dd5780601f106101b2576101008083540402835291602001916101dd565b820191906000526020600020905b8154815290600101906020018083116101c057829003601f168201915b50505050508060200190518101906101f59190610773565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102289291906107cd565b60405180910390a161023c3415600861037a565b8051610254906001600160a01b03163314600961037a565b6000808055600181905561026a90600290610583565b5050565b604080516060808201835260008083526020808401829052845160808101865282815290810182905280850182905291820152918101919091526102b18261039f565b92915050565b6000606060005460028080546102cc9061073e565b80601f01602080910402602001604051908101604052809291908181526020018280546102f89061073e565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102b1826104ba565b8161026a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160608082018352600080835260208084018290528451608081018652828152908101829052808501829052918201529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156104085761040861062a565b14156104ab576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156104495761044961062a565b600181111561045a5761045a61062a565b81528154610100900460ff1615156020808301919091526040805160808101825260018501548152600285015492810192909252600384015482820152600490930154606082015291015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156105065761050661062a565b14156104ab576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156105475761054761062a565b60018111156105585761055861062a565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b50805461058f9061073e565b6000825580601f1061059f575050565b601f0160209004906000526020600020908101906105bd91906105c0565b50565b5b808211156105d557600081556001016105c1565b5090565b6000604082840312156105eb57600080fd5b50919050565b6001600160a01b03811681146105bd57600080fd5b60006020828403121561061857600080fd5b8135610623816105f1565b9392505050565b634e487b7160e01b600052602160045260246000fd5b600281106105bd57634e487b7160e01b600052602160045260246000fd5b815160c082019061066e81610640565b808352506020830151151560208301526040830151805160408401526020810151606084015260408101516080840152606081015160a08401525092915050565b82815260006020604081840152835180604085015260005b818110156106e3578581018301518582016060015282016106c7565b818111156106f5576000606083870101525b50601f01601f191692909201606001949350505050565b8151606082019061071c81610640565b8083525060208301511515602083015260408301511515604083015292915050565b600181811c9082168061075257607f821691505b602082108114156105eb57634e487b7160e01b600052602260045260246000fd5b60006020828403121561078557600080fd5b6040516020810181811067ffffffffffffffff821117156107b657634e487b7160e01b600052604160045260246000fd5b60405282516107c4816105f1565b81529392505050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146107fb57600080fd5b8060408501525050939250505056fea26469706673582212204c9643ac3c6b399d5f833b40c1c120ae1e1cb101096690dec346e72387b3f00264736f6c634300080c0033`,
  BytecodeLen: 2716,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:11:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:13:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "A": A
  };
export const _APIs = {
  };
