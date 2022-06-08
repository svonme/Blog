const x = '<a class="wallet-info" href="https://docs.acryptos.com/fees" target="_blank">Transaction fee: 0 ACS</a>';
const C = '<a class="wallet-info" href="https://docs.acryptos.com/fees" target="_blank">Transaction fee: 0 ACSI</a>';
const D = {
  acsHarvestFee: .03,
  acsiHarvestFee: .06,
  wavHarvestFee: .8,
  erc20abi: [{
    inputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Approval",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "MinterAdded",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "MinterRemoved",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "from",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Transfer",
    type: "event"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "addMinter",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      internalType: "address",
      name: "spender",
      type: "address"
    }],
    name: "allowance",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "approve",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
      internalType: "uint8",
      name: "",
      type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "subtractedValue",
      type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "addedValue",
      type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "isMinter",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "account",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "mint",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transfer",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }],
  maxuint: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
  wbnb: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  busd: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  acs: "0x4197C6EF3879a08cD51e5560da5064B773aa1d29",
  acsi: "0x5b17b4d5e4009B5C43e3e3d63A5229F794cBA389",
  timelockLong: "0xfd6e996C8960D521E3D2624cc4c6648cFA1217b7",
  timelockShort: "0x3595D94a7AA78292b4283fd541ce3ea45AFeC1bc",
  proxyAdmin: "0xA54Fcd71BFd83Ee06B359F986Fc5dA97AA90156C",
  vaultsController: "0xeb8f15086274586f95c551890A29077a5b6e5e55",
  vaultsControllerV2: "0xa4752C6af04a73058bd407FB346CD8CC120b4ADd",
  vaultsControllerV2_2: "0xD95B9C08285045393862607D6e5FC2D95b9CE129",
  vaultsControllerV2_3: "0x8b1A3357B51ee5132EB552FA596587fD13BE0E24",
  vaultsControllerV2_4: "0x00606230D318fa47A7c270844c9d24fA1d38F955",
  acsMasterFarm: "0xeaE1425d8ed46554BF56968960e2E567B49D0BED",
  acsMasterFarmV2: "0xb1fa5d3c0111d8E9ac43A19ef17b281D5D4b474E",
  acsiMasterFarm: "0x96c8390BA28eB083A784280227C37b853bc408B7",
  acsiMasterFarmV2b: "0x0C3B6058c25205345b8f22578B27065a7506671C",
  wavFarm: "0x308474E30326A1bbaA97d099A85bC12D2BBebA28",
  contractsFromBlock: {
    "0xaEcf01c5a659d74Dc33C9C922a4458eAB0b13DeA": 11475888,
    "0x79f819fD095F77c595cd892346dD35763Dc63166": 11503988,
    "0x37BF06Fc8F3aF767Cc02448460ef5048bDfEEfFd": 11674889,
    "0x292B9e9e1D2B3F30BFc06aBD79a98F3e11665419": 11755888,
    "0x16f057CFcd681F754e27cb98ac7Ef7B1099F216C": 11871888,
    "0x40e030d42f2417624E950E86a6A94195b2D69f54": 11904889,
    "0xAa40Dc3EC6aD76Db3254b54443C4531e3dfe6bDb": 11968888,
    "0xa6df26f8d0Fc91CfD22DF8443b7F2F8586E4c391": 12072644,
    "0x4B067c22A4eCb993f8E0499deabD4E8455948481": 12443169,
    "0x51441Efb4bEeB1694FcC985d522c120286400061": 14038888,
    "0x33aD459E413FF93762f69a156c375ADCF6196f12": 14038888,
    "0xE901C4E9a56a175cb5c94bFb5f821Ebd5FC826C5": 14438888,
    "0xC889543EA115D4403d00f8103980B25f70C107d6": 15475888,
    "0x6e5dbC9aa884F06324AD95E51F931DCf029859dc": 17499137,
    "0xA56202A0F9BE28fc091D80fa0b7aC20e5495b3BF": 18040130,
    "0xbACa526c79B49a66f7F29123a2F4D7c17d083636": 18040130
  },
  additionalPricingPairs: ["0xFb72D7C0f1643c96c197A98E5f36eBcf7597d0E3", "0x3720DAD44398f745067b54ea786BB66CB97f68e9", "0xfd1ef328A17A8e8Eeaf7e4Ea1ed8a108E1F2d096", "0xCAABda10a3ac99Fc15f5B636Aa18E6B4Fd8db16D", "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489", "0x05faf555522Fa3F93959F86B41A3808666093210", "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1", "0x29A4A3D77c010CE100A45831BF7e798f0f0B325D", "0xf13e007e181A8F57eD3a4D4CcE0A9ff9E7241CEf", "0x3147F98B8f9C53Acdf8F16332eaD12B592a1a4ae", "0xfF17ff314925Dff772b71AbdFF2782bC913B3575"],
  additionalPricingPairsDeprecated: ["0x699c58d77027Ae44608808B3863C394A194d76f6", "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489", "0x05faf555522Fa3F93959F86B41A3808666093210", "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1", "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082"],
  stableSwaps: [{
    id: "acs4",
    title: "ACS4USD",
    address: "0xb3F0C9ea1F05e312093Fdb031E789A756659B0AC",
    lpToken: "0x83D69Ef5c9837E21E2389D47d791714F5771F29b",
    lpTokenSymbol: "ACS4USD",
    baseSymbol: "USD",
    sd: "BUSD/USDT/DAI/USDC",
    coins: ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955", "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"],
    fee: 1e-4,
    adminFee: .5,
    abi: [{
      name: "TokenExchange",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[4]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[4]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[4]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[4]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256",
        name: "token_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "coin_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[4]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[4]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        type: "uint256",
        name: "old_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "new_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "initial_time",
        indexed: !1
      }, {
        type: "uint256",
        name: "future_time",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        type: "uint256",
        name: "A",
        indexed: !1
      }, {
        type: "uint256",
        name: "t",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }, {
        type: "address[4]",
        name: "_coins"
      }, {
        type: "address",
        name: "_pool_token"
      }, {
        type: "uint256",
        name: "_A"
      }, {
        type: "uint256",
        name: "_fee"
      }, {
        type: "uint256",
        name: "_admin_fee"
      }, {
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5199,
      constant: !0
    }, {
      name: "A_precise",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5161,
      constant: !0
    }, {
      name: "get_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1346183,
      constant: !0
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[4]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 5357629,
      constant: !0
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[4]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 8287631
    }, {
      name: "get_dy",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3099381,
      constant: !0
    }, {
      name: "exchange",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 3262485
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[4]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[4]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 255557
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[4]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 8286723
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1489,
      constant: !0
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 4478633
    }, {
      name: "ramp_A",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "_future_A"
      }, {
        type: "uint256",
        name: "_future_time"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 151774
    }, {
      name: "stop_ramp_A",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 148535
    }, {
      name: "commit_new_fee",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "new_fee"
      }, {
        type: "uint256",
        name: "new_admin_fee"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 110371
    }, {
      name: "apply_new_fee",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 97152
    }, {
      name: "revert_new_parameters",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 21805
    }, {
      name: "commit_transfer_ownership",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74543
    }, {
      name: "apply_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 60620
    }, {
      name: "revert_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 21895
    }, {
      name: "admin_balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3391,
      constant: !0
    }, {
      name: "withdraw_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 31898
    }, {
      name: "donate_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 147723
    }, {
      name: "kill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 37908
    }, {
      name: "unkill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22045
    }, {
      name: "set_admin_fee_address",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 37178
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2160,
      constant: !0
    }, {
      name: "balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2190,
      constant: !0
    }, {
      name: "fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2111,
      constant: !0
    }, {
      name: "admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2141,
      constant: !0
    }, {
      name: "admin_fee_address",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2171,
      constant: !0
    }, {
      name: "owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2201,
      constant: !0
    }, {
      name: "lp_token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2231,
      constant: !0
    }, {
      name: "initial_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2261,
      constant: !0
    }, {
      name: "future_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2291,
      constant: !0
    }, {
      name: "initial_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2321,
      constant: !0
    }, {
      name: "future_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2351,
      constant: !0
    }, {
      name: "admin_actions_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2381,
      constant: !0
    }, {
      name: "transfer_ownership_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2411,
      constant: !0
    }, {
      name: "future_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2441,
      constant: !0
    }, {
      name: "future_admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2471,
      constant: !0
    }, {
      name: "future_owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2501,
      constant: !0
    }]
  }, {
    id: "abnbb",
    title: "aBNBb",
    address: "0xC56Ebb7F24A2A1B97b60f94674c7234B57f501A6",
    lpToken: "0x38b28b191641Fd51e2f7a5819B899D9e4e809ac7",
    lpTokenSymbol: "BNB-aBNBb",
    baseSymbol: "BNB",
    sd: "BNB/aBNBb",
    coins: ["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xBb1Aa6e59E5163D8722a122cd66EBA614b59df0d"],
    fee: 3e-4,
    adminFee: .5,
    abi: [{
      name: "TokenExchange",
      inputs: [{
        name: "buyer",
        type: "address",
        indexed: !0
      }, {
        name: "sold_id",
        type: "int128",
        indexed: !1
      }, {
        name: "tokens_sold",
        type: "uint256",
        indexed: !1
      }, {
        name: "bought_id",
        type: "int128",
        indexed: !1
      }, {
        name: "tokens_bought",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "invariant",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amount",
        type: "uint256",
        indexed: !1
      }, {
        name: "coin_amount",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "invariant",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        name: "deadline",
        type: "uint256",
        indexed: !0
      }, {
        name: "admin",
        type: "address",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        name: "admin",
        type: "address",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        name: "deadline",
        type: "uint256",
        indexed: !0
      }, {
        name: "fee",
        type: "uint256",
        indexed: !1
      }, {
        name: "admin_fee",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        name: "fee",
        type: "uint256",
        indexed: !1
      }, {
        name: "admin_fee",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        name: "old_A",
        type: "uint256",
        indexed: !1
      }, {
        name: "new_A",
        type: "uint256",
        indexed: !1
      }, {
        name: "initial_time",
        type: "uint256",
        indexed: !1
      }, {
        name: "future_time",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        name: "A",
        type: "uint256",
        indexed: !1
      }, {
        name: "t",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [{
        name: "_owner",
        type: "address"
      }, {
        name: "_coins",
        type: "address[2]"
      }, {
        name: "_pool_token",
        type: "address"
      }, {
        name: "_A",
        type: "uint256"
      }, {
        name: "_fee",
        type: "uint256"
      }, {
        name: "_admin_fee",
        type: "uint256"
      }, {
        name: "_admin_fee_address",
        type: "address"
      }],
      outputs: []
    }, {
      stateMutability: "view",
      type: "function",
      name: "A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 10374
    }, {
      stateMutability: "view",
      type: "function",
      name: "A_precise",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 10336
    }, {
      stateMutability: "view",
      type: "function",
      name: "get_virtual_price",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 1000239
    }, {
      stateMutability: "view",
      type: "function",
      name: "calc_token_amount",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "is_deposit",
        type: "bool"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3945031
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "add_liquidity",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "min_mint_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 6097380
    }, {
      stateMutability: "view",
      type: "function",
      name: "get_dy",
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 2400364
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "exchange",
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }, {
        name: "min_dy",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 2580988
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity",
      inputs: [{
        name: "_amount",
        type: "uint256"
      }, {
        name: "min_amounts",
        type: "uint256[2]"
      }],
      outputs: [{
        name: "",
        type: "uint256[2]"
      }],
      gas: 192800
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity_imbalance",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "max_burn_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 6097e3
    }, {
      stateMutability: "view",
      type: "function",
      name: "calc_withdraw_one_coin",
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 1254
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity_one_coin",
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }, {
        name: "_min_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3788123
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "ramp_A",
      inputs: [{
        name: "_future_A",
        type: "uint256"
      }, {
        name: "_future_time",
        type: "uint256"
      }],
      outputs: [],
      gas: 159205
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "stop_ramp_A",
      inputs: [],
      outputs: [],
      gas: 155122
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_new_fee",
      inputs: [{
        name: "new_fee",
        type: "uint256"
      }, {
        name: "new_admin_fee",
        type: "uint256"
      }],
      outputs: [],
      gas: 113455
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_new_fee",
      inputs: [],
      outputs: [],
      gas: 103761
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "revert_new_parameters",
      inputs: [],
      outputs: [],
      gas: 22892
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{
        name: "_owner",
        type: "address"
      }],
      outputs: [],
      gas: 78490
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_transfer_ownership",
      inputs: [],
      outputs: [],
      gas: 66792
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "revert_transfer_ownership",
      inputs: [],
      outputs: [],
      gas: 22982
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_balances",
      inputs: [{
        name: "i",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 7710
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "withdraw_admin_fees",
      inputs: [],
      outputs: [],
      gas: 42683
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "donate_admin_fees",
      inputs: [],
      outputs: [],
      gas: 82426
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "kill_me",
      inputs: [],
      outputs: [],
      gas: 40295
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "unkill_me",
      inputs: [],
      outputs: [],
      gas: 23132
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_admin_fee_address",
      inputs: [{
        name: "_admin_fee_address",
        type: "address"
      }],
      outputs: [],
      gas: 38265
    }, {
      stateMutability: "view",
      type: "function",
      name: "coins",
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3183
    }, {
      stateMutability: "view",
      type: "function",
      name: "balances",
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3213
    }, {
      stateMutability: "view",
      type: "function",
      name: "fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3198
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3228
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_fee_address",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3258
    }, {
      stateMutability: "view",
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3288
    }, {
      stateMutability: "view",
      type: "function",
      name: "lp_token",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3318
    }, {
      stateMutability: "view",
      type: "function",
      name: "initial_A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3348
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3378
    }, {
      stateMutability: "view",
      type: "function",
      name: "initial_A_time",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3408
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_A_time",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3438
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_actions_deadline",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3468
    }, {
      stateMutability: "view",
      type: "function",
      name: "transfer_ownership_deadline",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3498
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3528
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_admin_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3558
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_owner",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3588
    }],
    fromBlock: 16048888
  }, {
    id: "aethb",
    title: "aETHb",
    address: "0xDE14F21dA488aE2ad8730E002c967Bb6CB78DB21",
    lpToken: "0xEc8375fF0D63b0f1B4193B726771Abf2094A16c7",
    lpTokenSymbol: "ETH-aETHb",
    baseSymbol: "ETH",
    sd: "ETH/aETHb",
    coins: ["0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "0x1075bEa848451a13fD6F696b5D0FdA52743E6439"],
    fee: 3e-4,
    adminFee: .5,
    abi: [{
      name: "TokenExchange",
      inputs: [{
        name: "buyer",
        type: "address",
        indexed: !0
      }, {
        name: "sold_id",
        type: "int128",
        indexed: !1
      }, {
        name: "tokens_sold",
        type: "uint256",
        indexed: !1
      }, {
        name: "bought_id",
        type: "int128",
        indexed: !1
      }, {
        name: "tokens_bought",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "invariant",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amount",
        type: "uint256",
        indexed: !1
      }, {
        name: "coin_amount",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "invariant",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        name: "deadline",
        type: "uint256",
        indexed: !0
      }, {
        name: "admin",
        type: "address",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        name: "admin",
        type: "address",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        name: "deadline",
        type: "uint256",
        indexed: !0
      }, {
        name: "fee",
        type: "uint256",
        indexed: !1
      }, {
        name: "admin_fee",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        name: "fee",
        type: "uint256",
        indexed: !1
      }, {
        name: "admin_fee",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        name: "old_A",
        type: "uint256",
        indexed: !1
      }, {
        name: "new_A",
        type: "uint256",
        indexed: !1
      }, {
        name: "initial_time",
        type: "uint256",
        indexed: !1
      }, {
        name: "future_time",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        name: "A",
        type: "uint256",
        indexed: !1
      }, {
        name: "t",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [{
        name: "_owner",
        type: "address"
      }, {
        name: "_coins",
        type: "address[2]"
      }, {
        name: "_pool_token",
        type: "address"
      }, {
        name: "_A",
        type: "uint256"
      }, {
        name: "_fee",
        type: "uint256"
      }, {
        name: "_admin_fee",
        type: "uint256"
      }, {
        name: "_admin_fee_address",
        type: "address"
      }],
      outputs: []
    }, {
      stateMutability: "view",
      type: "function",
      name: "A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 10374
    }, {
      stateMutability: "view",
      type: "function",
      name: "A_precise",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 10336
    }, {
      stateMutability: "view",
      type: "function",
      name: "get_virtual_price",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 1000239
    }, {
      stateMutability: "view",
      type: "function",
      name: "calc_token_amount",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "is_deposit",
        type: "bool"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3945031
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "add_liquidity",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "min_mint_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 6097380
    }, {
      stateMutability: "view",
      type: "function",
      name: "get_dy",
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 2400364
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "exchange",
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }, {
        name: "min_dy",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 2580988
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity",
      inputs: [{
        name: "_amount",
        type: "uint256"
      }, {
        name: "min_amounts",
        type: "uint256[2]"
      }],
      outputs: [{
        name: "",
        type: "uint256[2]"
      }],
      gas: 192800
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity_imbalance",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "max_burn_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 6097e3
    }, {
      stateMutability: "view",
      type: "function",
      name: "calc_withdraw_one_coin",
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 1254
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity_one_coin",
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }, {
        name: "_min_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3788123
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "ramp_A",
      inputs: [{
        name: "_future_A",
        type: "uint256"
      }, {
        name: "_future_time",
        type: "uint256"
      }],
      outputs: [],
      gas: 159205
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "stop_ramp_A",
      inputs: [],
      outputs: [],
      gas: 155122
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_new_fee",
      inputs: [{
        name: "new_fee",
        type: "uint256"
      }, {
        name: "new_admin_fee",
        type: "uint256"
      }],
      outputs: [],
      gas: 113455
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_new_fee",
      inputs: [],
      outputs: [],
      gas: 103761
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "revert_new_parameters",
      inputs: [],
      outputs: [],
      gas: 22892
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{
        name: "_owner",
        type: "address"
      }],
      outputs: [],
      gas: 78490
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_transfer_ownership",
      inputs: [],
      outputs: [],
      gas: 66792
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "revert_transfer_ownership",
      inputs: [],
      outputs: [],
      gas: 22982
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_balances",
      inputs: [{
        name: "i",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 7710
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "withdraw_admin_fees",
      inputs: [],
      outputs: [],
      gas: 42683
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "donate_admin_fees",
      inputs: [],
      outputs: [],
      gas: 82426
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "kill_me",
      inputs: [],
      outputs: [],
      gas: 40295
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "unkill_me",
      inputs: [],
      outputs: [],
      gas: 23132
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_admin_fee_address",
      inputs: [{
        name: "_admin_fee_address",
        type: "address"
      }],
      outputs: [],
      gas: 38265
    }, {
      stateMutability: "view",
      type: "function",
      name: "coins",
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3183
    }, {
      stateMutability: "view",
      type: "function",
      name: "balances",
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3213
    }, {
      stateMutability: "view",
      type: "function",
      name: "fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3198
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3228
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_fee_address",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3258
    }, {
      stateMutability: "view",
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3288
    }, {
      stateMutability: "view",
      type: "function",
      name: "lp_token",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3318
    }, {
      stateMutability: "view",
      type: "function",
      name: "initial_A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3348
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3378
    }, {
      stateMutability: "view",
      type: "function",
      name: "initial_A_time",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3408
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_A_time",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3438
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_actions_deadline",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3468
    }, {
      stateMutability: "view",
      type: "function",
      name: "transfer_ownership_deadline",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3498
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3528
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_admin_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3558
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_owner",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3588
    }],
    fromBlock: 16848888
  }, {
    id: "amaticb",
    title: "aMATICb",
    address: "0x6f58A73C3F9A31C3BEDa5577072E352c75F78A73",
    lpToken: "0x8ba0Eb3D8C533DcDFDd487f0D2B92F96969Fc837",
    lpTokenSymbol: "MATIC-aMATICb",
    baseSymbol: "MATIC",
    sd: "MATIC/aMATICb",
    coins: ["0xCC42724C6683B7E57334c4E856f4c9965ED682bD", "0x7465B49f83bfd74e8Df8574d43BFFF34EDbC1758"],
    fee: 3e-4,
    adminFee: .5,
    abi: [{
      name: "TokenExchange",
      inputs: [{
        name: "buyer",
        type: "address",
        indexed: !0
      }, {
        name: "sold_id",
        type: "int128",
        indexed: !1
      }, {
        name: "tokens_sold",
        type: "uint256",
        indexed: !1
      }, {
        name: "bought_id",
        type: "int128",
        indexed: !1
      }, {
        name: "tokens_bought",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "invariant",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amount",
        type: "uint256",
        indexed: !1
      }, {
        name: "coin_amount",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        name: "provider",
        type: "address",
        indexed: !0
      }, {
        name: "token_amounts",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "fees",
        type: "uint256[2]",
        indexed: !1
      }, {
        name: "invariant",
        type: "uint256",
        indexed: !1
      }, {
        name: "token_supply",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        name: "deadline",
        type: "uint256",
        indexed: !0
      }, {
        name: "admin",
        type: "address",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        name: "admin",
        type: "address",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        name: "deadline",
        type: "uint256",
        indexed: !0
      }, {
        name: "fee",
        type: "uint256",
        indexed: !1
      }, {
        name: "admin_fee",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        name: "fee",
        type: "uint256",
        indexed: !1
      }, {
        name: "admin_fee",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        name: "old_A",
        type: "uint256",
        indexed: !1
      }, {
        name: "new_A",
        type: "uint256",
        indexed: !1
      }, {
        name: "initial_time",
        type: "uint256",
        indexed: !1
      }, {
        name: "future_time",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        name: "A",
        type: "uint256",
        indexed: !1
      }, {
        name: "t",
        type: "uint256",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [{
        name: "_owner",
        type: "address"
      }, {
        name: "_coins",
        type: "address[2]"
      }, {
        name: "_pool_token",
        type: "address"
      }, {
        name: "_A",
        type: "uint256"
      }, {
        name: "_fee",
        type: "uint256"
      }, {
        name: "_admin_fee",
        type: "uint256"
      }, {
        name: "_admin_fee_address",
        type: "address"
      }],
      outputs: []
    }, {
      stateMutability: "view",
      type: "function",
      name: "A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 10374
    }, {
      stateMutability: "view",
      type: "function",
      name: "A_precise",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 10336
    }, {
      stateMutability: "view",
      type: "function",
      name: "get_virtual_price",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 1000239
    }, {
      stateMutability: "view",
      type: "function",
      name: "calc_token_amount",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "is_deposit",
        type: "bool"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3945031
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "add_liquidity",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "min_mint_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 6097380
    }, {
      stateMutability: "view",
      type: "function",
      name: "get_dy",
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 2400364
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "exchange",
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }, {
        name: "min_dy",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 2580988
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity",
      inputs: [{
        name: "_amount",
        type: "uint256"
      }, {
        name: "min_amounts",
        type: "uint256[2]"
      }],
      outputs: [{
        name: "",
        type: "uint256[2]"
      }],
      gas: 192800
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity_imbalance",
      inputs: [{
        name: "amounts",
        type: "uint256[2]"
      }, {
        name: "max_burn_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 6097e3
    }, {
      stateMutability: "view",
      type: "function",
      name: "calc_withdraw_one_coin",
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 1254
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "remove_liquidity_one_coin",
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }, {
        name: "_min_amount",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3788123
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "ramp_A",
      inputs: [{
        name: "_future_A",
        type: "uint256"
      }, {
        name: "_future_time",
        type: "uint256"
      }],
      outputs: [],
      gas: 159205
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "stop_ramp_A",
      inputs: [],
      outputs: [],
      gas: 155122
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_new_fee",
      inputs: [{
        name: "new_fee",
        type: "uint256"
      }, {
        name: "new_admin_fee",
        type: "uint256"
      }],
      outputs: [],
      gas: 113455
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_new_fee",
      inputs: [],
      outputs: [],
      gas: 103761
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "revert_new_parameters",
      inputs: [],
      outputs: [],
      gas: 22892
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{
        name: "_owner",
        type: "address"
      }],
      outputs: [],
      gas: 78490
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "apply_transfer_ownership",
      inputs: [],
      outputs: [],
      gas: 66792
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "revert_transfer_ownership",
      inputs: [],
      outputs: [],
      gas: 22982
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_balances",
      inputs: [{
        name: "i",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 7710
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "withdraw_admin_fees",
      inputs: [],
      outputs: [],
      gas: 42683
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "donate_admin_fees",
      inputs: [],
      outputs: [],
      gas: 82426
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "kill_me",
      inputs: [],
      outputs: [],
      gas: 40295
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "unkill_me",
      inputs: [],
      outputs: [],
      gas: 23132
    }, {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_admin_fee_address",
      inputs: [{
        name: "_admin_fee_address",
        type: "address"
      }],
      outputs: [],
      gas: 38265
    }, {
      stateMutability: "view",
      type: "function",
      name: "coins",
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3183
    }, {
      stateMutability: "view",
      type: "function",
      name: "balances",
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3213
    }, {
      stateMutability: "view",
      type: "function",
      name: "fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3198
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3228
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_fee_address",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3258
    }, {
      stateMutability: "view",
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3288
    }, {
      stateMutability: "view",
      type: "function",
      name: "lp_token",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3318
    }, {
      stateMutability: "view",
      type: "function",
      name: "initial_A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3348
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_A",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3378
    }, {
      stateMutability: "view",
      type: "function",
      name: "initial_A_time",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3408
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_A_time",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3438
    }, {
      stateMutability: "view",
      type: "function",
      name: "admin_actions_deadline",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3468
    }, {
      stateMutability: "view",
      type: "function",
      name: "transfer_ownership_deadline",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3498
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3528
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_admin_fee",
      inputs: [],
      outputs: [{
        name: "",
        type: "uint256"
      }],
      gas: 3558
    }, {
      stateMutability: "view",
      type: "function",
      name: "future_owner",
      inputs: [],
      outputs: [{
        name: "",
        type: "address"
      }],
      gas: 3588
    }],
    fromBlock: 16848888
  }, {
    id: "vai",
    title: "VAI",
    address: "0x191409D5A4EfFe25b0f4240557BA2192D18a191e",
    basePool: "0xb3F0C9ea1F05e312093Fdb031E789A756659B0AC",
    metaDeposit: "0xC8036DeF32920A4686b81ADC30e76244da087960",
    lpToken: "0xEb7Dc7b3bfF60A450EfF31Edf1330355361EA5ad",
    lpTokenSymbol: "ACS4VAI",
    baseSymbol: "USD",
    sd: "VAI/[ACS4USD]",
    coins: ["0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955", "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"],
    fee: 6e-4,
    adminFee: .5,
    metaDepositAbi: [{
      outputs: [],
      inputs: [{
        type: "address",
        name: "_pool"
      }, {
        type: "address",
        name: "_token"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 40368
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[5]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[5]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 39062
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 14467
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 44404
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3147
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4856
    }, {
      name: "pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1241
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1271
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1301
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1440
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1470
    }],
    abi: [{
      name: "TokenExchange",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "TokenExchangeUnderlying",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256",
        name: "token_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "coin_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        type: "uint256",
        name: "old_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "new_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "initial_time",
        indexed: !1
      }, {
        type: "uint256",
        name: "future_time",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        type: "uint256",
        name: "A",
        indexed: !1
      }, {
        type: "uint256",
        name: "t",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }, {
        type: "address[2]",
        name: "_coins"
      }, {
        type: "address",
        name: "_pool_token"
      }, {
        type: "address",
        name: "_base_pool"
      }, {
        type: "uint256",
        name: "_A"
      }, {
        type: "uint256",
        name: "_fee"
      }, {
        type: "uint256",
        name: "_admin_fee"
      }, {
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5199
    }, {
      name: "A_precise",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5161
    }, {
      name: "get_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 992460
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3938567
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136485
    }, {
      name: "get_dy",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2390018
    }, {
      name: "get_dy_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2393245
    }, {
      name: "exchange",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2617039
    }, {
      name: "exchange_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2631869
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[2]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[2]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 163158
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136334
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4389
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 3826262
    }, {
      name: "ramp_A",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "_future_A"
      }, {
        type: "uint256",
        name: "_future_time"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 151894
    }, {
      name: "stop_ramp_A",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 148655
    }, {
      name: "commit_new_fee",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "new_fee"
      }, {
        type: "uint256",
        name: "new_admin_fee"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 110491
    }, {
      name: "apply_new_fee",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 97272
    }, {
      name: "revert_new_parameters",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 21925
    }, {
      name: "commit_transfer_ownership",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74663
    }, {
      name: "apply_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 60740
    }, {
      name: "revert_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22015
    }, {
      name: "admin_balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3511
    }, {
      name: "withdraw_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 11681
    }, {
      name: "donate_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74995
    }, {
      name: "kill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 38028
    }, {
      name: "unkill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22165
    }, {
      name: "set_admin_fee_address",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 37298
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2280
    }, {
      name: "balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2310
    }, {
      name: "fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2231
    }, {
      name: "admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2261
    }, {
      name: "admin_fee_address",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2291
    }, {
      name: "owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2321
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2351
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2381
    }, {
      name: "base_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2411
    }, {
      name: "base_cache_updated",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2441
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2580
    }, {
      name: "initial_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2501
    }, {
      name: "future_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2531
    }, {
      name: "initial_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2561
    }, {
      name: "future_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2591
    }, {
      name: "admin_actions_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2621
    }, {
      name: "transfer_ownership_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2651
    }, {
      name: "future_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2681
    }, {
      name: "future_admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2711
    }, {
      name: "future_owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2741
    }]
  }, {
    id: "ust",
    title: "UST",
    deprecated: !0,
    address: "0x99c92765EfC472a9709Ced86310D64C4573c4b77",
    basePool: "0xb3F0C9ea1F05e312093Fdb031E789A756659B0AC",
    metaDeposit: "0x4deb9077E49269B04Fd0324461aF301dD6600216",
    lpToken: "0xD3DEBe4a971e4492d0D61aB145468A5B2c23301b",
    lpTokenSymbol: "ACS4UST",
    baseSymbol: "USD",
    sd: "UST/[ACS4USD]",
    coins: ["0x23396cF899Ca06c4472205fC903bDB4de249D6fC", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955", "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"],
    fee: 6e-4,
    adminFee: .5,
    metaDepositAbi: [{
      outputs: [],
      inputs: [{
        type: "address",
        name: "_pool"
      }, {
        type: "address",
        name: "_token"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 40368
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[5]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[5]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 39062
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 14467
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 44404
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3147
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4856
    }, {
      name: "pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1241
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1271
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1301
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1440
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1470
    }],
    abi: [{
      name: "TokenExchange",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "TokenExchangeUnderlying",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256",
        name: "token_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "coin_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        type: "uint256",
        name: "old_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "new_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "initial_time",
        indexed: !1
      }, {
        type: "uint256",
        name: "future_time",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        type: "uint256",
        name: "A",
        indexed: !1
      }, {
        type: "uint256",
        name: "t",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }, {
        type: "address[2]",
        name: "_coins"
      }, {
        type: "address",
        name: "_pool_token"
      }, {
        type: "address",
        name: "_base_pool"
      }, {
        type: "uint256",
        name: "_A"
      }, {
        type: "uint256",
        name: "_fee"
      }, {
        type: "uint256",
        name: "_admin_fee"
      }, {
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5199
    }, {
      name: "A_precise",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5161
    }, {
      name: "get_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 992460
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3938567
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136485
    }, {
      name: "get_dy",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2390018
    }, {
      name: "get_dy_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2393245
    }, {
      name: "exchange",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2617039
    }, {
      name: "exchange_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2631869
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[2]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[2]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 163158
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136334
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4389
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 3826262
    }, {
      name: "ramp_A",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "_future_A"
      }, {
        type: "uint256",
        name: "_future_time"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 151894
    }, {
      name: "stop_ramp_A",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 148655
    }, {
      name: "commit_new_fee",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "new_fee"
      }, {
        type: "uint256",
        name: "new_admin_fee"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 110491
    }, {
      name: "apply_new_fee",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 97272
    }, {
      name: "revert_new_parameters",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 21925
    }, {
      name: "commit_transfer_ownership",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74663
    }, {
      name: "apply_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 60740
    }, {
      name: "revert_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22015
    }, {
      name: "admin_balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3511
    }, {
      name: "withdraw_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 11681
    }, {
      name: "donate_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74995
    }, {
      name: "kill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 38028
    }, {
      name: "unkill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22165
    }, {
      name: "set_admin_fee_address",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 37298
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2280
    }, {
      name: "balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2310
    }, {
      name: "fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2231
    }, {
      name: "admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2261
    }, {
      name: "admin_fee_address",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2291
    }, {
      name: "owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2321
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2351
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2381
    }, {
      name: "base_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2411
    }, {
      name: "base_cache_updated",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2441
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2580
    }, {
      name: "initial_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2501
    }, {
      name: "future_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2531
    }, {
      name: "initial_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2561
    }, {
      name: "future_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2591
    }, {
      name: "admin_actions_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2621
    }, {
      name: "transfer_ownership_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2651
    }, {
      name: "future_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2681
    }, {
      name: "future_admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2711
    }, {
      name: "future_owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2741
    }],
    fromBlock: 4492094
  }, {
    id: "qusd",
    title: "QUSD",
    deprecated: !0,
    address: "0x3919874C7bc0699cF59c981C5eb668823FA4f958",
    basePool: "0xb3F0C9ea1F05e312093Fdb031E789A756659B0AC",
    metaDeposit: "0x7f66F5788b9b488E339F68104bA630E6bC210b9f",
    lpToken: "0x49440376254290b3264183807A16450457f02B28",
    lpTokenSymbol: "ACS4QUSD",
    baseSymbol: "USD",
    sd: "QUSD/[ACS4USD]",
    coins: ["0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955", "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"],
    fee: 6e-4,
    adminFee: .5,
    metaDepositAbi: [{
      outputs: [],
      inputs: [{
        type: "address",
        name: "_pool"
      }, {
        type: "address",
        name: "_token"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 40368
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[5]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[5]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 39062
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 14467
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 44404
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3147
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4856
    }, {
      name: "pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1241
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1271
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1301
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1440
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1470
    }],
    abi: [{
      name: "TokenExchange",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "TokenExchangeUnderlying",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256",
        name: "token_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "coin_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        type: "uint256",
        name: "old_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "new_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "initial_time",
        indexed: !1
      }, {
        type: "uint256",
        name: "future_time",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        type: "uint256",
        name: "A",
        indexed: !1
      }, {
        type: "uint256",
        name: "t",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }, {
        type: "address[2]",
        name: "_coins"
      }, {
        type: "address",
        name: "_pool_token"
      }, {
        type: "address",
        name: "_base_pool"
      }, {
        type: "uint256",
        name: "_A"
      }, {
        type: "uint256",
        name: "_fee"
      }, {
        type: "uint256",
        name: "_admin_fee"
      }, {
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5199
    }, {
      name: "A_precise",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5161
    }, {
      name: "get_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 992460
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3938567
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136485
    }, {
      name: "get_dy",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2390018
    }, {
      name: "get_dy_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2393245
    }, {
      name: "exchange",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2617039
    }, {
      name: "exchange_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2631869
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[2]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[2]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 163158
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136334
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4389
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 3826262
    }, {
      name: "ramp_A",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "_future_A"
      }, {
        type: "uint256",
        name: "_future_time"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 151894
    }, {
      name: "stop_ramp_A",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 148655
    }, {
      name: "commit_new_fee",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "new_fee"
      }, {
        type: "uint256",
        name: "new_admin_fee"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 110491
    }, {
      name: "apply_new_fee",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 97272
    }, {
      name: "revert_new_parameters",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 21925
    }, {
      name: "commit_transfer_ownership",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74663
    }, {
      name: "apply_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 60740
    }, {
      name: "revert_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22015
    }, {
      name: "admin_balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3511
    }, {
      name: "withdraw_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 11681
    }, {
      name: "donate_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74995
    }, {
      name: "kill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 38028
    }, {
      name: "unkill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22165
    }, {
      name: "set_admin_fee_address",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 37298
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2280
    }, {
      name: "balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2310
    }, {
      name: "fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2231
    }, {
      name: "admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2261
    }, {
      name: "admin_fee_address",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2291
    }, {
      name: "owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2321
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2351
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2381
    }, {
      name: "base_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2411
    }, {
      name: "base_cache_updated",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2441
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2580
    }, {
      name: "initial_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2501
    }, {
      name: "future_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2531
    }, {
      name: "initial_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2561
    }, {
      name: "future_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2591
    }, {
      name: "admin_actions_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2621
    }, {
      name: "transfer_ownership_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2651
    }, {
      name: "future_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2681
    }, {
      name: "future_admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2711
    }, {
      name: "future_owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2741
    }]
  }, {
    id: "iron",
    title: "IRON",
    deprecated: !0,
    address: "0xc61639E5626EcfB0788b5308c67CBbBD1cAecBF0",
    basePool: "0xb3F0C9ea1F05e312093Fdb031E789A756659B0AC",
    metaDeposit: "0xd487c84fc49616a7ca619AAC75d0AbD0053939b7",
    lpToken: "0x9e31F49c22Bf8C2B9FFD3645e4203B9B8E606b98",
    lpTokenSymbol: "ACS4IRON",
    baseSymbol: "USD",
    sd: "IRON/[ACS4USD]",
    coins: ["0x7b65B489fE53fCE1F6548Db886C08aD73111DDd8", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955", "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"],
    fee: 6e-4,
    adminFee: .5,
    metaDepositAbi: [{
      outputs: [],
      inputs: [{
        type: "address",
        name: "_pool"
      }, {
        type: "address",
        name: "_token"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 40368
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[5]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[5]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 39062
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 14467
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 44404
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3147
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[5]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4856
    }, {
      name: "pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1241
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1271
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 1301
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1440
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 1470
    }],
    abi: [{
      name: "TokenExchange",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "TokenExchangeUnderlying",
      inputs: [{
        type: "address",
        name: "buyer",
        indexed: !0
      }, {
        type: "int128",
        name: "sold_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_sold",
        indexed: !1
      }, {
        type: "int128",
        name: "bought_id",
        indexed: !1
      }, {
        type: "uint256",
        name: "tokens_bought",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "AddLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidity",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityOne",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256",
        name: "token_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "coin_amount",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RemoveLiquidityImbalance",
      inputs: [{
        type: "address",
        name: "provider",
        indexed: !0
      }, {
        type: "uint256[2]",
        name: "token_amounts",
        indexed: !1
      }, {
        type: "uint256[2]",
        name: "fees",
        indexed: !1
      }, {
        type: "uint256",
        name: "invariant",
        indexed: !1
      }, {
        type: "uint256",
        name: "token_supply",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewAdmin",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewAdmin",
      inputs: [{
        type: "address",
        name: "admin",
        indexed: !0
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "CommitNewFee",
      inputs: [{
        type: "uint256",
        name: "deadline",
        indexed: !0
      }, {
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "NewFee",
      inputs: [{
        type: "uint256",
        name: "fee",
        indexed: !1
      }, {
        type: "uint256",
        name: "admin_fee",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "RampA",
      inputs: [{
        type: "uint256",
        name: "old_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "new_A",
        indexed: !1
      }, {
        type: "uint256",
        name: "initial_time",
        indexed: !1
      }, {
        type: "uint256",
        name: "future_time",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      name: "StopRampA",
      inputs: [{
        type: "uint256",
        name: "A",
        indexed: !1
      }, {
        type: "uint256",
        name: "t",
        indexed: !1
      }],
      anonymous: !1,
      type: "event"
    }, {
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }, {
        type: "address[2]",
        name: "_coins"
      }, {
        type: "address",
        name: "_pool_token"
      }, {
        type: "address",
        name: "_base_pool"
      }, {
        type: "uint256",
        name: "_A"
      }, {
        type: "uint256",
        name: "_fee"
      }, {
        type: "uint256",
        name: "_admin_fee"
      }, {
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      name: "A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5199
    }, {
      name: "A_precise",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 5161
    }, {
      name: "get_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 992460
    }, {
      name: "calc_token_amount",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "bool",
        name: "is_deposit"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3938567
    }, {
      name: "add_liquidity",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "min_mint_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136485
    }, {
      name: "get_dy",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2390018
    }, {
      name: "get_dy_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2393245
    }, {
      name: "exchange",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2617039
    }, {
      name: "exchange_underlying",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "int128",
        name: "i"
      }, {
        type: "int128",
        name: "j"
      }, {
        type: "uint256",
        name: "dx"
      }, {
        type: "uint256",
        name: "min_dy"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 2631869
    }, {
      name: "remove_liquidity",
      outputs: [{
        type: "uint256[2]",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_amount"
      }, {
        type: "uint256[2]",
        name: "min_amounts"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 163158
    }, {
      name: "remove_liquidity_imbalance",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256[2]",
        name: "amounts"
      }, {
        type: "uint256",
        name: "max_burn_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 6136334
    }, {
      name: "calc_withdraw_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 4389
    }, {
      name: "remove_liquidity_one_coin",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "_token_amount"
      }, {
        type: "int128",
        name: "i"
      }, {
        type: "uint256",
        name: "_min_amount"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 3826262
    }, {
      name: "ramp_A",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "_future_A"
      }, {
        type: "uint256",
        name: "_future_time"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 151894
    }, {
      name: "stop_ramp_A",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 148655
    }, {
      name: "commit_new_fee",
      outputs: [],
      inputs: [{
        type: "uint256",
        name: "new_fee"
      }, {
        type: "uint256",
        name: "new_admin_fee"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 110491
    }, {
      name: "apply_new_fee",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 97272
    }, {
      name: "revert_new_parameters",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 21925
    }, {
      name: "commit_transfer_ownership",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_owner"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74663
    }, {
      name: "apply_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 60740
    }, {
      name: "revert_transfer_ownership",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22015
    }, {
      name: "admin_balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "i"
      }],
      stateMutability: "view",
      type: "function",
      gas: 3511
    }, {
      name: "withdraw_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 11681
    }, {
      name: "donate_admin_fees",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 74995
    }, {
      name: "kill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 38028
    }, {
      name: "unkill_me",
      outputs: [],
      inputs: [],
      stateMutability: "nonpayable",
      type: "function",
      gas: 22165
    }, {
      name: "set_admin_fee_address",
      outputs: [],
      inputs: [{
        type: "address",
        name: "_admin_fee_address"
      }],
      stateMutability: "nonpayable",
      type: "function",
      gas: 37298
    }, {
      name: "coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2280
    }, {
      name: "balances",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2310
    }, {
      name: "fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2231
    }, {
      name: "admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2261
    }, {
      name: "admin_fee_address",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2291
    }, {
      name: "owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2321
    }, {
      name: "token",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2351
    }, {
      name: "base_pool",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2381
    }, {
      name: "base_virtual_price",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2411
    }, {
      name: "base_cache_updated",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2441
    }, {
      name: "base_coins",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [{
        type: "uint256",
        name: "arg0"
      }],
      stateMutability: "view",
      type: "function",
      gas: 2580
    }, {
      name: "initial_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2501
    }, {
      name: "future_A",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2531
    }, {
      name: "initial_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2561
    }, {
      name: "future_A_time",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2591
    }, {
      name: "admin_actions_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2621
    }, {
      name: "transfer_ownership_deadline",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2651
    }, {
      name: "future_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2681
    }, {
      name: "future_admin_fee",
      outputs: [{
        type: "uint256",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2711
    }, {
      name: "future_owner",
      outputs: [{
        type: "address",
        name: ""
      }],
      inputs: [],
      stateMutability: "view",
      type: "function",
      gas: 2741
    }],
    fromBlock: 7568888
  }, {
    id: "btc",
    title: "BTC",
    deprecated: !0,
    address: "0xbE7CAa236544d1B9A0E7F91e94B9f5Bfd3B5ca81",
    lpToken: "0x2d00C55b93a03830D19eb97A5e48F77aCaac2D63",
    lpTokenSymbol: "ACS3BTC",
    baseSymbol: "BTC",
    sd: "BTCB/renBTC/pBTC",
    coins: ["0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c", "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C"],
    fee: 4e-4,
    adminFee: .5,
    abi: [{
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "buyer",
        type: "address"
      }, {
        indexed: !1,
        name: "sold_id",
        type: "int128"
      }, {
        indexed: !1,
        name: "tokens_sold",
        type: "uint256"
      }, {
        indexed: !1,
        name: "bought_id",
        type: "int128"
      }, {
        indexed: !1,
        name: "tokens_bought",
        type: "uint256"
      }],
      name: "TokenExchange",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "provider",
        type: "address"
      }, {
        indexed: !1,
        name: "token_amounts",
        type: "uint256[3]"
      }, {
        indexed: !1,
        name: "fees",
        type: "uint256[3]"
      }, {
        indexed: !1,
        name: "invariant",
        type: "uint256"
      }, {
        indexed: !1,
        name: "token_supply",
        type: "uint256"
      }],
      name: "AddLiquidity",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "provider",
        type: "address"
      }, {
        indexed: !1,
        name: "token_amounts",
        type: "uint256[3]"
      }, {
        indexed: !1,
        name: "fees",
        type: "uint256[3]"
      }, {
        indexed: !1,
        name: "token_supply",
        type: "uint256"
      }],
      name: "RemoveLiquidity",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "provider",
        type: "address"
      }, {
        indexed: !1,
        name: "token_amount",
        type: "uint256"
      }, {
        indexed: !1,
        name: "coin_amount",
        type: "uint256"
      }, {
        indexed: !1,
        name: "token_supply",
        type: "uint256"
      }],
      name: "RemoveLiquidityOne",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "provider",
        type: "address"
      }, {
        indexed: !1,
        name: "token_amounts",
        type: "uint256[3]"
      }, {
        indexed: !1,
        name: "fees",
        type: "uint256[3]"
      }, {
        indexed: !1,
        name: "invariant",
        type: "uint256"
      }, {
        indexed: !1,
        name: "token_supply",
        type: "uint256"
      }],
      name: "RemoveLiquidityImbalance",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "deadline",
        type: "uint256"
      }, {
        indexed: !0,
        name: "admin",
        type: "address"
      }],
      name: "CommitNewAdmin",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "admin",
        type: "address"
      }],
      name: "NewAdmin",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !0,
        name: "deadline",
        type: "uint256"
      }, {
        indexed: !1,
        name: "fee",
        type: "uint256"
      }, {
        indexed: !1,
        name: "admin_fee",
        type: "uint256"
      }],
      name: "CommitNewFee",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !1,
        name: "fee",
        type: "uint256"
      }, {
        indexed: !1,
        name: "admin_fee",
        type: "uint256"
      }],
      name: "NewFee",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !1,
        name: "old_A",
        type: "uint256"
      }, {
        indexed: !1,
        name: "new_A",
        type: "uint256"
      }, {
        indexed: !1,
        name: "initial_time",
        type: "uint256"
      }, {
        indexed: !1,
        name: "future_time",
        type: "uint256"
      }],
      name: "RampA",
      type: "event"
    }, {
      anonymous: !1,
      inputs: [{
        indexed: !1,
        name: "A",
        type: "uint256"
      }, {
        indexed: !1,
        name: "t",
        type: "uint256"
      }],
      name: "StopRampA",
      type: "event"
    }, {
      inputs: [{
        name: "_owner",
        type: "address"
      }, {
        name: "_coins",
        type: "address[3]"
      }, {
        name: "_pool_token",
        type: "address"
      }, {
        name: "_A",
        type: "uint256"
      }, {
        name: "_fee",
        type: "uint256"
      }, {
        name: "_admin_fee",
        type: "uint256"
      }, {
        name: "_admin_fee_address",
        type: "address"
      }],
      outputs: [],
      stateMutability: "nonpayable",
      type: "constructor"
    }, {
      gas: 5199,
      inputs: [],
      name: "A",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 5161,
      inputs: [],
      name: "A_precise",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 1167850,
      inputs: [],
      name: "get_virtual_price",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 4646428,
      inputs: [{
        name: "amounts",
        type: "uint256[3]"
      }, {
        name: "is_deposit",
        type: "bool"
      }],
      name: "calc_token_amount",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 7177827,
      inputs: [{
        name: "amounts",
        type: "uint256[3]"
      }, {
        name: "min_mint_amount",
        type: "uint256"
      }],
      name: "add_liquidity",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 2743135,
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }],
      name: "get_dy",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2906161,
      inputs: [{
        name: "i",
        type: "int128"
      }, {
        name: "j",
        type: "int128"
      }, {
        name: "dx",
        type: "uint256"
      }, {
        name: "min_dy",
        type: "uint256"
      }],
      name: "exchange",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 211832,
      inputs: [{
        name: "_amount",
        type: "uint256"
      }, {
        name: "min_amounts",
        type: "uint256[3]"
      }],
      name: "remove_liquidity",
      outputs: [{
        name: "",
        type: "uint256[3]"
      }],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 7177198,
      inputs: [{
        name: "amounts",
        type: "uint256[3]"
      }, {
        name: "max_burn_amount",
        type: "uint256"
      }],
      name: "remove_liquidity_imbalance",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 1489,
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }],
      name: "calc_withdraw_one_coin",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 4116746,
      inputs: [{
        name: "_token_amount",
        type: "uint256"
      }, {
        name: "i",
        type: "int128"
      }, {
        name: "_min_amount",
        type: "uint256"
      }],
      name: "remove_liquidity_one_coin",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 151774,
      inputs: [{
        name: "_future_A",
        type: "uint256"
      }, {
        name: "_future_time",
        type: "uint256"
      }],
      name: "ramp_A",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 148535,
      inputs: [],
      name: "stop_ramp_A",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 110371,
      inputs: [{
        name: "new_fee",
        type: "uint256"
      }, {
        name: "new_admin_fee",
        type: "uint256"
      }],
      name: "commit_new_fee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 97152,
      inputs: [],
      name: "apply_new_fee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 21805,
      inputs: [],
      name: "revert_new_parameters",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 74543,
      inputs: [{
        name: "_owner",
        type: "address"
      }],
      name: "commit_transfer_ownership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 60620,
      inputs: [],
      name: "apply_transfer_ownership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 21895,
      inputs: [],
      name: "revert_transfer_ownership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 3391,
      inputs: [{
        name: "i",
        type: "uint256"
      }],
      name: "admin_balances",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 24647,
      inputs: [],
      name: "withdraw_admin_fees",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 111299,
      inputs: [],
      name: "donate_admin_fees",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 37908,
      inputs: [],
      name: "kill_me",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 22045,
      inputs: [],
      name: "unkill_me",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 37178,
      inputs: [{
        name: "_admin_fee_address",
        type: "address"
      }],
      name: "set_admin_fee_address",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }, {
      gas: 2160,
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      name: "coins",
      outputs: [{
        name: "",
        type: "address"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2190,
      inputs: [{
        name: "arg0",
        type: "uint256"
      }],
      name: "balances",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2111,
      inputs: [],
      name: "fee",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2141,
      inputs: [],
      name: "admin_fee",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2171,
      inputs: [],
      name: "admin_fee_address",
      outputs: [{
        name: "",
        type: "address"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2201,
      inputs: [],
      name: "owner",
      outputs: [{
        name: "",
        type: "address"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2231,
      inputs: [],
      name: "lp_token",
      outputs: [{
        name: "",
        type: "address"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2261,
      inputs: [],
      name: "initial_A",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2291,
      inputs: [],
      name: "future_A",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2321,
      inputs: [],
      name: "initial_A_time",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2351,
      inputs: [],
      name: "future_A_time",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2381,
      inputs: [],
      name: "admin_actions_deadline",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2411,
      inputs: [],
      name: "transfer_ownership_deadline",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2441,
      inputs: [],
      name: "future_fee",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2471,
      inputs: [],
      name: "future_admin_fee",
      outputs: [{
        name: "",
        type: "uint256"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }, {
      gas: 2501,
      inputs: [],
      name: "future_owner",
      outputs: [{
        name: "",
        type: "address"
      }],
      stateMutability: "view",
      type: "function",
      constant: !0
    }],
    fromBlock: 6351888
  }],
  tokens: {
    "0x5b17b4d5e4009B5C43e3e3d63A5229F794cBA389": {
      symbol: "ACSI"
    },
    "0x4197C6EF3879a08cD51e5560da5064B773aa1d29": {
      symbol: "ACS"
    },
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c": {
      symbol: "WBNB"
    },
    "0xBb1Aa6e59E5163D8722a122cd66EBA614b59df0d": {
      symbol: "aBNBb"
    },
    "0x2170Ed0880ac9A755fd29B2688956BD959F933F8": {
      symbol: "ETH"
    },
    "0x1075bEa848451a13fD6F696b5D0FdA52743E6439": {
      symbol: "aETHb"
    },
    "0xCC42724C6683B7E57334c4E856f4c9965ED682bD": {
      symbol: "MATIC"
    },
    "0x7465B49f83bfd74e8Df8574d43BFFF34EDbC1758": {
      symbol: "aMATICb"
    },
    "0x888888883BF208d3b1AcD0052a88b9Fd07bA5851": {
      symbol: "WAV"
    },
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56": {
      symbol: "BUSD"
    },
    "0x55d398326f99059fF775485246999027B3197955": {
      symbol: "USDT"
    },
    "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3": {
      symbol: "DAI"
    },
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d": {
      symbol: "USDC"
    },
    "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7": {
      symbol: "VAI"
    },
    "0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E": {
      symbol: "QUSD"
    },
    "0x23396cF899Ca06c4472205fC903bDB4de249D6fC": {
      symbol: "UST"
    },
    "0x7b65B489fE53fCE1F6548Db886C08aD73111DDd8": {
      symbol: "IRON"
    },
    "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c": {
      symbol: "BTCB"
    },
    "0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c": {
      symbol: "renBTC",
      decimals: 8
    },
    "0x3d4350cD54aeF9f9b2C29435e0fa809957B3F30a": {
      symbol: "USTw",
      decimals: 6
    },
    "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C": {
      symbol: "pBTC"
    },
    "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B": {
      symbol: "UNFI"
    },
    "0xFd7B3A77848f1C2D67E05E54d78d174a0C850335": {
      symbol: "ONT"
    },
    "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8": {
      symbol: "HELMET"
    },
    "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739": {
      symbol: "SWINGBY"
    },
    "0xB09FE1613fE03E7361319d2a43eDc17422f36B09": {
      symbol: "BOG"
    },
    "0x658A109C5900BC6d2357c87549B651670E5b0539": {
      symbol: "FOR"
    },
    "0x32299c93960bB583A43c2220Dc89152391A610c5": {
      symbol: "KALA"
    },
    "0x67d66e8Ec1Fd25d98B3Ccd3B19B7dc4b4b7fC493": {
      symbol: "FEED"
    },
    "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6": {
      symbol: "HOTCROSS"
    },
    "0x582C12b30F85162Fa393e5DBe2573f9F601f9D91": {
      symbol: "XMT"
    },
    "0x308bfaeAaC8BDab6e9Fc5Ead8EdCb5f95b0599d9": {
      symbol: "ONG",
      decimals: 9
    },
    "0xf307910A4c7bbc79691fD374889b36d8531B08e3": {
      symbol: "ANKR"
    },
    "0x361C60b7c2828fCAb80988d00D1D542c83387b50": {
      symbol: "DFI"
    }
  }
};

D.farmVaults = [
  {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xEc8375fF0D63b0f1B4193B726771Abf2094A16c7",
      tokenSymbol: "ETH-aETHb",
      tokenImage: "acs4usd.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/aethb/" target="_blank"><span data-i18n="get">Get</span> ETH-aETHb</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "stableswap", "new", "boost"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x8ba0Eb3D8C533DcDFDd487f0D2B92F96969Fc837",
      tokenSymbol: "MATIC-aMATICb",
      tokenImage: "acs4usd.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/amaticb/" target="_blank"><span data-i18n="get">Get</span> MATIC-aMATICb</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "stableswap", "new", "boost"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x38b28b191641Fd51e2f7a5819B899D9e4e809ac7",
      tokenSymbol: "BNB-aBNBb",
      tokenImage: "acs4usd.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/abnbb/" target="_blank"><span data-i18n="get">Get</span> BNB-aBNBb</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "stableswap", "new", "boost"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x6e5dbC9aa884F06324AD95E51F931DCf029859dc",
      tokenSymbol: "DFI-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x6e5dbc9aa884f06324ad95e51f931dcf029859dc00020000000000000000002a" target="_blank"><span data-i18n="get">Get</span> DFI-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi", "boost"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xC889543EA115D4403d00f8103980B25f70C107d6",
      tokenSymbol: "XMT-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xc889543ea115d4403d00f8103980b25f70c107d600020000000000000000001e" target="_blank"><span data-i18n="get">Get</span> XMT-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi", "boost"]
  }, {
    vault: {
      address: "0x6C8a596e777a21c45D07173938d588Ca4CA30d8d",
      tokenSymbol: "BSW",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      showWatchAsset: !0,
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x965F527D9159dCe6288a2219DB51fc6Eef120dD1" target="_blank"><span data-i18n="get">Get</span> BSW</a>',
      fromBlock: 12160704,
      defaultRoiDay: .61888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.BSW"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0xbba26766b17d774F55963a984265B7Cc5604BEa5",
      tokenSymbol: "BSW-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0x965F527D9159dCe6288a2219DB51fc6Eef120dD1" target="_blank"><span data-i18n="get">Get</span> BSW-BNB</a>',
      fromBlock: 12157615,
      defaultRoiDay: 1.0888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.BSW-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0x5c2b38bD976619CfC8cC3C7CbF47241E06478684",
      tokenSymbol: "BSW-USDT",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/0x55d398326f99059ff775485246999027b3197955/0x965F527D9159dCe6288a2219DB51fc6Eef120dD1" target="_blank"><span data-i18n="get">Get</span> BSW-USDT</a>',
      fromBlock: 12159027,
      defaultRoiDay: 1.1888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.BSW-USDT"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0xB89294e5Bf3D7D0afAaEa10DC4Fb6732749e677b",
      tokenSymbol: "BUSD-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" target="_blank"><span data-i18n="get">Get</span> BUSD-BNB</a>',
      fromBlock: 12160277,
      defaultRoiDay: .2888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.BUSD-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0x6cC0ef907bC1BEED82954Bd0706e177CdC314A9c",
      tokenSymbol: "USDT-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0x55d398326f99059ff775485246999027b3197955" target="_blank"><span data-i18n="get">Get</span> USDT-BNB</a>',
      fromBlock: 12160706,
      defaultRoiDay: .29888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.USDT-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0x1e5EA5427492fE93f22b8e4AA27Dc020FF3Da59A",
      tokenSymbol: "CAKE-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" target="_blank"><span data-i18n="get">Get</span> CAKE-BNB</a>',
      fromBlock: 14668888,
      defaultRoiDay: .3888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.CAKE-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0x56e407b9fE49c797eDB073c09e4C4AB5c9CA2946",
      tokenSymbol: "SOL-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0x570A5D26f7765Ecb712C0924E4De545B89fD43dF" target="_blank"><span data-i18n="get">Get</span> SOL-BNB</a>',
      fromBlock: 14933888,
      defaultRoiDay: .13888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.SOL-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0x8996A30ba6638DAc082c721C9e9499447D982852",
      tokenSymbol: "AVAX-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0x1ce0c2827e2ef14d5c4f29a091d735a204794041" target="_blank"><span data-i18n="get">Get</span> AVAX-BNB</a>',
      fromBlock: 14963888,
      defaultRoiDay: .18888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.AVAX-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0xd9Ab256c17Cb308Eb3E173aE65C8c7165d2aa824",
      tokenSymbol: "FTM-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0xAD29AbB318791D579433D831ed122aFeAf29dcfe" target="_blank"><span data-i18n="get">Get</span> FTM-BNB</a>',
      fromBlock: 14993888,
      defaultRoiDay: .23888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.FTM-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0x03E0Df5fb4feb9fE0c1AdFe347372B4A654233C1",
      tokenSymbol: "MATIC-BNB",
      tokenImage: "bsw.svg",
      harvesterRewardSymbol: "BSW",
      walletInfo: '<a class="wallet-info" href="https://exchange.biswap.org/#/add/ETH/0xCC42724C6683B7E57334c4E856f4c9965ED682bD" target="_blank"><span data-i18n="get">Get</span> MATIC-BNB</a>',
      fromBlock: 15019888,
      defaultRoiDay: .19888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.MATIC-BNB"
    },
    tags: ["acs", "biswap"]
  }, {
    vault: {
      address: "0x7679381507af0c8DE64586A458161aa58D3A4FC3",
      tokenSymbol: "ACS",
      harvesterRewardSymbol: "ACS",
      showWatchAsset: !0,
      withdrawAlert: "IMPORTANT: Please note that this is a Governance Vault with a high withdrawal fee, and carefully check that your input amount is correct.",
      walletInfo: '<span class="wallet-info"><span data-i18n="get">Get</span> ACS: <a href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x4197C6EF3879a08cD51e5560da5064B773aa1d29" target="_blank">Acsi.Finance</a> <a href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank">1inch</a></span>',
      transactionInfo: '<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-vault" target="_blank"><span data-i18n="withdrawFee">Withdrawal fee</span>: 10%<br/>acsACS <span data-i18n="nonTrans">is non-transferrable</span></a>'
    },
    tags: ["core", "acs"]
  }, {
    vault: {
      address: "0x2b66399AD01be47C5aa11C48fDd6DF689DAE929A",
      tokenSymbol: "ACSI",
      harvesterRewardSymbol: "ACSI",
      showWatchAsset: !0,
      withdrawAlert: "IMPORTANT: Please note that this is a Governance Vault with a high withdrawal fee, and carefully check that your input amount is correct.",
      walletInfo: '<span class="wallet-info"><span data-i18n="get">Get</span> ACSI: <a href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x5b17b4d5e4009B5C43e3e3d63A5229F794cBA389" target="_blank">Acsi.Finance</a> <a href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank">1inch</a></span>',
      transactionInfo: '<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-vault" target="_blank"><span data-i18n="withdrawFee">Withdrawal fee</span>: 10%<br/>acsACSI <span data-i18n="nonTrans">is non-transferrable</span></a>'
    },
    tags: ["core", "acsi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x894eD9026De37AfD9CCe1E6C0BE7d6b510e3FfE5",
      tokenSymbol: "ACS-ACSI-BNB-BUSD",
      title: "A2B2 (ACSI)",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x894ed9026de37afd9cce1e6c0be7d6b510e3ffe5000100000000000000000001" target="_blank"><span data-i18n="get">Get</span> ACS-ACSI-BNB-BUSD</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["core", "acsi", "acsifi", "onsen"]
  }, {
    farm: {
      master: D.acsMasterFarmV2,
      token: "0x894eD9026De37AfD9CCe1E6C0BE7d6b510e3FfE5",
      tokenSymbol: "ACS-ACSI-BNB-BUSD",
      title: "A2B2 (ACS)",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x894ed9026de37afd9cce1e6c0be7d6b510e3ffe5000100000000000000000001" target="_blank"><span data-i18n="get">Get</span> ACS-ACSI-BNB-BUSD</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["core", "acs"]
  }, {
    farm: {
      master: D.wavFarm,
      token: "0x894eD9026De37AfD9CCe1E6C0BE7d6b510e3FfE5",
      tokenSymbol: "ACS-ACSI-BNB-BUSD",
      title: "A2B2 (WAV)",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x894ed9026de37afd9cce1e6c0be7d6b510e3ffe5000100000000000000000001" target="_blank"><span data-i18n="get">Get</span> ACS-ACSI-BNB-BUSD</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.thegreatwave.io/tokenomics" target="_blank">Harvest fee: ${D.wavHarvestFee} WAV</a>`
    },
    tags: ["core", "wav"]
  }, {
    vault: {
      address: "0x7a2FB04dfc2B2cA052a769C023F43b81e67F6624",
      tokenSymbol: "dACS-BNB",
      tokenImage: "dsg.svg",
      harvesterRewardSymbol: "DSG",
      walletInfo: '<a class="wallet-info" href="https://dsgmetaverse.com/#/add/BNB/0x4197C6EF3879a08cD51e5560da5064B773aa1d29" target="_blank"><span data-i18n="get">Get</span> dACS-BNB</a>',
      firstDepositBlock: 12097312,
      defaultRoiDay: .888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.dACS-BNB"
    },
    tags: ["core", "acs", "dsg"]
  }, {
    vault: {
      address: "0xAB81911e6B884Ee3d85278F0aB8Cf38Eee31A2d1",
      tokenSymbol: "mACS-BNB",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/BNB/0x4197C6EF3879a08cD51e5560da5064B773aa1d29?lang=en" target="_blank"><span data-i18n="get">Get</span> mACS-BNB</a>',
      fromBlock: 7218888,
      defaultRoiDay: .2888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.mACS-BNB",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["core", "acs", "mdex"]
  }, {
    vault: {
      address: "0xf690AE6cf1f93dA3b56425061D37d24046720494",
      tokenSymbol: "dACSI-BNB",
      tokenImage: "dsg.svg",
      harvesterRewardSymbol: "DSG",
      walletInfo: '<a class="wallet-info" href="https://dsgmetaverse.com/#/add/BNB/0x5b17b4d5e4009B5C43e3e3d63A5229F794cBA389" target="_blank"><span data-i18n="get">Get</span> dACSI-BNB</a>',
      firstDepositBlock: 12464888,
      defaultRoiDay: 2.1888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.dACSI-BNB"
    },
    tags: ["core", "acsi", "dsg"]
  }, {
    vault: {
      address: "0x8888888818b6e5BBdF1F73c5F3A7F73b2454d2cA",
      tokenSymbol: "WAV-ACS-BNB",
      title: "TGW Vault",
      tokenImage: "wav.png",
      harvesterRewardSymbol: "WVP",
      withdrawAlert: "IMPORTANT: Please note that this is a Governance Vault with a high withdrawal fee, and carefully check that your input amount is correct.",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x44a9ce69ef2a71a9630697ca5cab3f4adaf8f90d00010000000000000000001a" target="_blank"><span data-i18n="get">Get</span> WAV-ACS-BNB</a>',
      transactionInfo: '<a class="wallet-info text-warning" href="https://docs.thegreatwave.io/tokenomics" target="_blank"><span data-i18n="withdrawFee">Withdrawal fee</span>: 88%</a>'
    },
    tags: ["wav"]
  }, {
    farm: {
      master: D.wavFarm,
      token: "0x44a9cE69eF2a71A9630697CA5CaB3f4aDaF8f90d",
      tokenSymbol: "WAV-ACS-BNB",
      tokenImage: "wav.png",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x44a9ce69ef2a71a9630697ca5cab3f4adaf8f90d00010000000000000000001a" target="_blank"><span data-i18n="get">Get</span> WAV-ACS-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.thegreatwave.io/tokenomics" target="_blank">Harvest fee: ${D.wavHarvestFee} WAV</a>`
    },
    tags: ["wav"]
  }, {
    farm: {
      master: D.wavFarm,
      token: "0x70650826a8c0b0B3b46cd95667Df79d02b66C002",
      tokenSymbol: "WAV-BNB",
      tokenImage: "wav.png",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x888888883BF208d3b1AcD0052a88b9Fd07bA5851" target="_blank"><span data-i18n="get">Get</span> WAV-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.thegreatwave.io/tokenomics" target="_blank">Harvest fee: ${D.wavHarvestFee} WAV</a>`
    },
    tags: ["wav", "pancake", "pancakeV2"]
  }, {
    vault: {
      address: "0x1Ba8b2E5Adc5722245B6e8330139f8b0E727406B",
      tokenSymbol: "ATL",
      showWatchAsset: !0,
      tokenImage: "atl.svg",
      harvesterRewardSymbol: "ATL",
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> ATL</a>',
      agoPollerShort: !0,
      firstDepositBlock: 12198426,
      defaultRoiDay: 6.3888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsATL"
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0xD574c6e64863C49f31C577d174BBD808e066db75",
      tokenSymbol: "ATL-BUSD",
      tokenImage: "atl.svg",
      harvesterRewardSymbol: "ATL",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x1fD991fb6c3102873ba68a4e6e6a87B3a5c10271" target="_blank"><span data-i18n="get">Get</span> ATL-BUSD</a>',
      agoPollerShort: !0,
      firstDepositBlock: 12015624
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsATL-BUSD"
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0x6Fe6762E9314ad80803fef083c8bB16Af435a628",
      tokenSymbol: "BNB",
      harvesterRewardSymbol: "XVS",
      isBnbVault: !0,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" target="_blank"><span data-i18n="get">Get</span> BNB</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBNB"
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x10137A821fD5aeA332F682F4CBAfC839E4373104",
      tokenSymbol: "BNB",
      harvesterRewardSymbol: "CAN",
      isBnbVault: !0,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" target="_blank"><span data-i18n="get">Get</span> BNB</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.cBNB"
    },
    tags: ["acs", "channels"]
  }, {
    vault: {
      address: "0x9978992538bD3e70c1Aff101dedd50E9E27CfbdE",
      tokenSymbol: "BNB",
      harvesterRewardSymbol: "ATL",
      isBnbVault: !0,
      showBorrowLimit: !0,
      agoPollerShort: !0,
      firstDepositBlock: 12017966,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" target="_blank"><span data-i18n="get">Get</span> BNB</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aBNB"
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0x9b55e223F16E18c4B9D222968d42F055ea0ED3d1",
      tokenSymbol: "BNB",
      harvesterRewardSymbol: "VALAS",
      isNativeVault: !0,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" target="_blank"><span data-i18n="get">Get</span> BNB</a>',
      fromBlock: 16678888,
      defaultRoiDay: .06898 / 365
    },
    tags: ["acs", "valas"]
  }, {
    vault: {
      address: "0x0395fCC8E1a1E30A1427D4079aF6E23c805E3eeF",
      tokenSymbol: "BTC",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c" target="_blank"><span data-i18n="get">Get</span> BTC</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBTC"
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0xFcf924f58fda91190b874547E08DFF069C6d5a48",
      tokenSymbol: "BTC",
      showWatchAsset: !0,
      harvesterRewardSymbol: "CAN",
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c" target="_blank"><span data-i18n="get">Get</span> BTC</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.cBTC"
    },
    tags: ["acs", "channels"]
  }, {
    vault: {
      address: "0x52525a9d0c562fc7b685efc754f496fEa055c006",
      tokenSymbol: "BTC",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      showBorrowLimit: !0,
      agoPollerShort: !0,
      firstDepositBlock: 12035050,
      defaultRoiDay: 1.2888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c" target="_blank"><span data-i18n="get">Get</span> BTC</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aBTC"
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0x35cAdD2DAA782556B7fD90A98663BaCDb78d863e",
      tokenSymbol: "ETH",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank"><span data-i18n="get">Get</span> ETH</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsETH"
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x5F9AAb778447010Ee0121E3460738CF8d1AEdF55",
      tokenSymbol: "ETH",
      showWatchAsset: !0,
      harvesterRewardSymbol: "CAN",
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank"><span data-i18n="get">Get</span> ETH</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.cETH"
    },
    tags: ["acs", "channels"]
  }, {
    vault: {
      address: "0xCF69F9e5558D1dafeC4373e3B569F53468bF6317",
      tokenSymbol: "ETH",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      showBorrowLimit: !0,
      agoPollerShort: !0,
      firstDepositBlock: 12039794,
      defaultRoiDay: 1.888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank"><span data-i18n="get">Get</span> ETH</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aETH"
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0x03E904a729A6E0eB4B675969D3fe51b5392f5C39",
      tokenSymbol: "BETH",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 4988888,
      showBorrowLimit: !0,
      defaultRoiDay: .4888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> BETH</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBETH",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x5C8C857c89AF070078ab4e72Dc0De8768910E5A8",
      tokenSymbol: "MATIC",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> MATIC</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsMATIC"
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0xf7FFa2F16684834AF27B77fEA1AcbE35ce7af16b",
      tokenSymbol: "AAVE",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      showBorrowLimit: !0,
      fromBlock: 10738888,
      defaultRoiDay: .16888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> AAVE</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsAAVE"
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0xFc698dAE6c5B7e38F8Eb8Fc240f23c598d17e5e2",
      tokenSymbol: "SXP",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 2738e3,
      showBorrowLimit: !0,
      walletInfo: '<span class="wallet-info"><span data-i18n="get">Get</span> SXP: <a href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A" target="_blank">Acsi.Finance</a> <a href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank">1inch</a></span>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsSXP"
    },
    tags: ["acs", "venus", "venusProtocol", "swipe"]
  }, {
    vault: {
      address: "0x7abbCf9Ac11f65955be8e93Ed7ed64B12E34a58E",
      tokenSymbol: "LTC",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 4699888,
      showBorrowLimit: !0,
      defaultRoiDay: .3888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> LTC</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsLTC",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x58d35BC513e46Bd80770c06543071F6A563a360B",
      tokenSymbol: "BCH",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 7501287,
      showBorrowLimit: !0,
      defaultRoiDay: .00888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> BCH</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBCH",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0xE0303c65fc9Ce79c53228aE1E8cde3b6b8c02F95",
      tokenSymbol: "DOT",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 5298888,
      showBorrowLimit: !0,
      defaultRoiDay: .04888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> DOT</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsDOT",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x0E3E97653fE81D771a250b03AF2b5cf294a6dE62",
      tokenSymbol: "DOT",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      firstDepositBlock: 12198016,
      defaultRoiDay: .73888 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> DOT</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aDOT",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0x161Afe47561CfCF9603Ef67C44de95114e78D33F",
      tokenSymbol: "LINK",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 5328888,
      showBorrowLimit: !0,
      defaultRoiDay: .06888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> LINK</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsLINK",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x87D5FD97436cd08024553Eeff98498103264A230",
      tokenSymbol: "LINK",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      agoPollerShort: !0,
      firstDepositBlock: 12040936,
      defaultRoiDay: 2.3888 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> LINK</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aLINK",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0xbB08f867dB0FDA40083D7636ef18bB88e592CC1b",
      tokenSymbol: "ADA",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 5288888,
      showBorrowLimit: !0,
      defaultRoiDay: .2488 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> ADA</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsADA",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x3a30E2029578056fA2Cf422AfEe048fE07AB0A06",
      tokenSymbol: "ADA",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      firstDepositBlock: 12198008,
      defaultRoiDay: .71888 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> ADA</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aADA",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "atlantis"]
  }, {
    vault: {
      address: "0x90F277c402Ea280E70068049fAb1d123bB6CBA16",
      tokenSymbol: "XRP",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 5319888,
      showBorrowLimit: !0,
      defaultRoiDay: .3888 / 365,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> XRP</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsXRP",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0xAc045258edAB47B62E427E2Fa659e3195CeCbdE2",
      tokenSymbol: "FIL",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> FIL</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsFIL",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0xda6E3B30F7628928ADD9f694AC0D97a00536033f",
      tokenSymbol: "DOGE",
      tokenDecimals: 8,
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank"><span data-i18n="get">Get</span> DOGE</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsDOGE",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "venus", "venusProtocol"]
  }, {
    vault: {
      address: "0x532d5775cE71Cb967B78acbc290f80DF80A9bAa5",
      tokenSymbol: "BUSD",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 2597909,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> BUSD</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBUSD"
    },
    tags: ["acs", "venus", "venusProtocol", "usd"]
  }, {
    vault: {
      address: "0x14B197CA1A5Aef891e86E1EaE7A110c865c7DCec",
      tokenSymbol: "BUSD",
      showWatchAsset: !0,
      harvesterRewardSymbol: "CAN",
      fromBlock: 10905888,
      defaultRoiDay: .12888 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> BUSD</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.cBUSD"
    },
    tags: ["acs", "channels", "usd"]
  }, {
    vault: {
      address: "0x17c9bBa4c84116472309d78B18fB038D4F15E0D6",
      tokenSymbol: "BUSD",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      agoPollerShort: !0,
      firstDepositBlock: 12048801,
      defaultRoiDay: .2388 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> BUSD</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aBUSD"
    },
    tags: ["acs", "atlantis", "usd"]
  }, {
    vault: {
      address: "0x32Fe1bE67102c10F6f5E798cb24723E738A31943",
      tokenSymbol: "USDT",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 2645816,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> USDT</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsUSDT"
    },
    tags: ["acs", "venus", "venusProtocol", "usd"]
  }, {
    vault: {
      address: "0x82B4C3EdCbA9B754F0eA4A9d043F6F943204BCEd",
      tokenSymbol: "USDT",
      showWatchAsset: !0,
      harvesterRewardSymbol: "CAN",
      fromBlock: 10938888,
      defaultRoiDay: .16888 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> USDT</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.cUSDT"
    },
    tags: ["acs", "channels", "usd"]
  }, {
    vault: {
      address: "0x5d15D6c40Ec91940E23Bd6419709D334Aa60EaE2",
      tokenSymbol: "USDT",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      agoPollerShort: !0,
      firstDepositBlock: 12048808,
      defaultRoiDay: .2888 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> USDT</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aUSDT"
    },
    tags: ["acs", "atlantis", "usd"]
  }, {
    vault: {
      address: "0x4E58b693092e33e46A8734B9c4064B82afdcA14f",
      tokenSymbol: "USDC",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 2711765,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> USDC</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsUSDC"
    },
    tags: ["acs", "venus", "venusProtocol", "usd"]
  }, {
    vault: {
      address: "0x675361701b15424Ff94B414eA76AEc1f61ab1ed9",
      tokenSymbol: "USDC",
      showWatchAsset: !0,
      harvesterRewardSymbol: "ATL",
      agoPollerShort: !0,
      firstDepositBlock: 12049121,
      defaultRoiDay: .688 / 365,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> USDC</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.aUSDC"
    },
    tags: ["acs", "atlantis", "usd"]
  }, {
    vault: {
      address: "0xA4964271b476B0730Acf86DD9f8D270b5E804126",
      tokenSymbol: "DAI",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 3776888,
      showBorrowLimit: !0,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/" target="_blank"><span data-i18n="get">Get</span> DAI</a>',
      defaultRoiDay: .000524469134595
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsDAI"
    },
    tags: ["acs", "venus", "venusProtocol", "usd"]
  }, {
    vault: {
      address: "0xAB819564a1Bb4a7F4142fDC1Be07599fD0c8b24A",
      tokenSymbol: "TUSD",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 11108888,
      showBorrowLimit: !0,
      defaultRoiDay: .16888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsTUSD"
    },
    tags: ["acs", "venus", "venusProtocol", "usd"]
  }, {
    vault: {
      address: "0x883A0D28dbac2E713e87aa2448595438D8016811",
      tokenSymbol: "VAI",
      showWatchAsset: !0,
      harvesterRewardSymbol: "XVS",
      fromBlock: 3533888,
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/vai/" target="_blank"><span data-i18n="get">Get</span> VAI</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsVAI"
    },
    tags: ["acs", "venus", "venusProtocol", "usd"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x7ea9F435c7CcB2eEF266F5366fe13ea6C9F3e245",
      tokenSymbol: "ACS3",
      title: "BTC-ETH-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x7ea9f435c7ccb2eef266f5366fe13ea6c9f3e245000100000000000000000000" target="_blank"><span data-i18n="get">Get</span> ACS3</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xaEcf01c5a659d74Dc33C9C922a4458eAB0b13DeA",
      tokenSymbol: "SOL-DOT-ADA-ETH-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xaecf01c5a659d74dc33c9c922a4458eab0b13dea000100000000000000000012" target="_blank"><span data-i18n="get">Get</span> SOL-DOT-ADA-ETH-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xb338a4ABD2e1f7066810ef0a8cdAdBdA3CEF0B92",
      tokenSymbol: "ETH-MATIC-AVAX-FTM-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xb338a4abd2e1f7066810ef0a8cdadbda3cef0b92000100000000000000000010" target="_blank"><span data-i18n="get">Get</span> ETH-MATIC-AVAX-FTM-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xbACa526c79B49a66f7F29123a2F4D7c17d083636",
      tokenSymbol: "BUSD-USDC-TUSD",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xbaca526c79b49a66f7f29123a2f4d7c17d08363600000000000000000000002e" target="_blank"><span data-i18n="get">Get</span> BUSD-USDC-TUSD</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi", "usd"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xA56202A0F9BE28fc091D80fa0b7aC20e5495b3BF",
      tokenSymbol: "BUSD-USDT-DAI-MIM",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xa56202a0f9be28fc091d80fa0b7ac20e5495b3bf00000000000000000000002f" target="_blank"><span data-i18n="get">Get</span> BUSD-USDT-DAI-MIM</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi", "usd"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xa22F3E51939488962AA26d42799dF75F72816cE0",
      tokenSymbol: "BUSD-USDT-DAI-USDC",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xa22f3e51939488962aa26d42799df75f72816ce0000000000000000000000007" target="_blank"><span data-i18n="get">Get</span> BUSD-USDT-DAI-USDC</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi", "usd", "deprecated"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xE901C4E9a56a175cb5c94bFb5f821Ebd5FC826C5",
      tokenSymbol: "BUSD-USDT-TUSD-USTw-MIM",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xe901c4e9a56a175cb5c94bfb5f821ebd5fc826c500000000000000000000001d" target="_blank"><span data-i18n="get">Get</span> BUSD-USDT-TUSD-USTw-MIM</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi", "usd", "deprecated"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x292B9e9e1D2B3F30BFc06aBD79a98F3e11665419",
      tokenSymbol: "renBTC-BTC",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x292b9e9e1d2b3f30bfc06abd79a98f3e11665419000200000000000000000016" target="_blank"><span data-i18n="get">Get</span> renBTC-BTC</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x8E1D3C611a4C08D6DA2d257Ed119c1144c1DCAd9",
      tokenSymbol: "ONT-ONG-ACSI-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x8e1d3c611a4c08d6da2d257ed119c1144c1dcad9000100000000000000000019" target="_blank"><span data-i18n="get">Get</span> ONT-ONG-ACSI-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x37BF06Fc8F3aF767Cc02448460ef5048bDfEEfFd",
      tokenSymbol: "HOTCROSS-ACSI-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x37bf06fc8f3af767cc02448460ef5048bdfeeffd000100000000000000000014" target="_blank"><span data-i18n="get">Get</span> HOTCROSS-ACSI-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x62672E4496D870ECfE88706d0e02D4f8f9566f38",
      tokenSymbol: "BOG-BNB-ACSI-BUSD",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x62672e4496d870ecfe88706d0e02d4f8f9566f3800010000000000000000000d" target="_blank"><span data-i18n="get">Get</span> BOG-BNB-ACSI-BUSD</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x79f819fD095F77c595cd892346dD35763Dc63166",
      tokenSymbol: "FEED-BTC-ETH-BNB-ACSI",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x79f819fd095f77c595cd892346dd35763dc63166000100000000000000000013" target="_blank"><span data-i18n="get">Get</span> FEED-BTC-ETH-BNB-ACSI</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x1f01eEc228f2295858EB60E0C9C59d74D3A927BF",
      tokenSymbol: "KALA-ACSI-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x1f01eec228f2295858eb60e0c9c59d74d3a927bf000100000000000000000011" target="_blank"><span data-i18n="get">Get</span> KALA-ACSI-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x43FE71651928C01306c1941b574f3e2342bfe477",
      tokenSymbol: "FOR-BUSD-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x43fe71651928c01306c1941b574f3e2342bfe47700010000000000000000000e" target="_blank"><span data-i18n="get">Get</span> FOR-BUSD-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xd8a01598399b4D90DFD73a78581Ca26bb09Da32B",
      tokenSymbol: "SWINGBY-BUSD-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xd8a01598399b4d90dfd73a78581ca26bb09da32b00010000000000000000000c" target="_blank"><span data-i18n="get">Get</span> SWINGBY-BUSD-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x86DdC49F66FA166E72e650A72752b43CE23eCBe5",
      tokenSymbol: "HELMET-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x86ddc49f66fa166e72e650a72752b43ce23ecbe500020000000000000000000b" target="_blank"><span data-i18n="get">Get</span> HELMET-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xDaAE64e8F4ecB50A9734c38b2fF395721D5fE588",
      tokenSymbol: "BUSD-BNB",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xdaae64e8f4ecb50a9734c38b2ff395721d5fe588000200000000000000000002" target="_blank"><span data-i18n="get">Get</span> BUSD-BNB</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xb978Bd521465f4aa58f79FE99Cb081C9772059eE",
      tokenSymbol: "BTC-USDT",
      tokenImage: "acsi-acs.svg",
      walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xb978bd521465f4aa58f79fe99cb081c9772059ee000200000000000000000003" target="_blank"><span data-i18n="get">Get</span> BTC-USDT</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "acsifi"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0x83D69Ef5c9837E21E2389D47d791714F5771F29b",
      tokenSymbol: "ACS4USD",
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/" target="_blank"><span data-i18n="get">Get</span> ACS4USD</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "stableswap", "usd"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xD3DEBe4a971e4492d0D61aB145468A5B2c23301b",
      tokenSymbol: "ACS4UST",
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/ust/" target="_blank"><span data-i18n="get">Get</span> ACS4UST</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "stableswap", "usd", "deprecated"]
  }, {
    farm: {
      master: D.acsiMasterFarmV2b,
      token: "0xEb7Dc7b3bfF60A450EfF31Edf1330355361EA5ad",
      tokenSymbol: "ACS4VAI",
      walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/vai/" target="_blank"><span data-i18n="get">Get</span> ACS4VAI</a>',
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
    },
    tags: ["acsi", "stableswap", "usd"]
  }, {
    vault: {
      address: "0x5e4993A09609eBCa7F038e3f66c8F97059563690",
      tokenSymbol: "MDX",
      showWatchAsset: !0,
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "WBNB",
      walletInfo: '<span class="wallet-info"><span data-i18n="get">Get</span> MDX: <a href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x9C65AB58d8d978DB963e63f2bfB7121627e3a739" target="_blank">Acsi.Finance</a> <a href="https://bsc.mdex.com/#/swap?outputCurrency=0x9C65AB58d8d978DB963e63f2bfB7121627e3a739" target="_blank">MDEX</a></span>',
      fromBlock: 7848888,
      defaultRoiDay: 1.2888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsMDX"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0xf54D438B63C1680B62418339EC2a4C6e4aF6C73A",
      tokenSymbol: "DSG-BNB",
      tokenImage: "dsg.svg",
      harvesterRewardSymbol: "DSG",
      walletInfo: '<a class="wallet-info" href="https://dsgmetaverse.com/#/add/BNB/0x9A78649501BbAAC285Ea4187299471B7ad4ABD35" target="_blank"><span data-i18n="get">Get</span> DSG-BNB</a>',
      firstDepositBlock: 12068613,
      defaultRoiDay: 4.2888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsDSG-BNB"
    },
    tags: ["acs", "dsg"]
  }, {
    vault: {
      address: "0x471696DcD1D615aFF82F23ed5835d8bcF0eC1F8d",
      tokenSymbol: "XVS-BNB",
      tokenImage: "dsg.svg",
      harvesterRewardSymbol: "DSG",
      walletInfo: '<a class="wallet-info" href="https://dsgmetaverse.com/#/add/BNB/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63" target="_blank"><span data-i18n="get">Get</span> XVS-BNB</a>',
      fromBlock: 12473333,
      defaultRoiDay: .2888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsXVS-BNB"
    },
    tags: ["acs", "dsg", "venus"]
  }, {
    vault: {
      address: "0x027b514B13B17eB123C88F48fedc14676Bbaac78",
      tokenSymbol: "mMDX-BNB",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/BNB/0x9C65AB58d8d978DB963e63f2bfB7121627e3a739?lang=en" target="_blank"><span data-i18n="get">Get</span> MDX-BNB</a>',
      fromBlock: 7848888,
      defaultRoiDay: 1.0888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsMDX-BNB"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x7ABc5868401eA6A46Ea0D114cafAf63879C8CdDa",
      tokenSymbol: "mMDX-ETH",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/0x9C65AB58d8d978DB963e63f2bfB7121627e3a739/0x2170Ed0880ac9A755fd29B2688956BD959F933F8?lang=en" target="_blank"><span data-i18n="get">Get</span> MDX-ETH</a>',
      fromBlock: 7913888,
      defaultRoiDay: 1.004888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsMDX-ETH"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x1B083711acb6C3673CeDDaFFdF5019429B119b8A",
      tokenSymbol: "mMDX-BTC",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/0x9C65AB58d8d978DB963e63f2bfB7121627e3a739/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c?lang=en" target="_blank"><span data-i18n="get">Get</span> MDX-BTC</a>',
      fromBlock: 7913888,
      defaultRoiDay: .99888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsMDX-BTC"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x8835D7fCd6e9cF0ada6eD81a0f9D7694efe4ff31",
      tokenSymbol: "mMDX-BUSD",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/0x9C65AB58d8d978DB963e63f2bfB7121627e3a739/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56?lang=en" target="_blank"><span data-i18n="get">Get</span> MDX-BUSD</a>',
      fromBlock: 7913888,
      defaultRoiDay: 1.0888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsMDX-BUSD"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x8DC707f2a9A9642f635392af34c0E6a712f1D766",
      tokenSymbol: "mETH-BNB",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/BNB/0x2170Ed0880ac9A755fd29B2688956BD959F933F8?lang=en" target="_blank"><span data-i18n="get">Get</span> ETH-BNB</a>',
      fromBlock: 8343888,
      defaultRoiDay: .28888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsETH-BNB"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x40085A8697eEB43Ff7be033Ecd00e5193530b8c9",
      tokenSymbol: "mBTC-BNB",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/BNB/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c?lang=en" target="_blank"><span data-i18n="get">Get</span> BTC-BNB</a>',
      fromBlock: 8343888,
      defaultRoiDay: .25888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBTC-BNB"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x4951C3567161d3E632c141B74Ac3781cb99aDd67",
      tokenSymbol: "mBTC-USDT",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/0x55d398326f99059fF775485246999027B3197955/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c?lang=en" target="_blank"><span data-i18n="get">Get</span> BTC-USDT</a>',
      fromBlock: 8368888,
      defaultRoiDay: .19888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBTC-USDT"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0xD016df56c65D3Af498D316065138B6BB95416507",
      tokenSymbol: "mETH-USDT",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/0x55d398326f99059fF775485246999027B3197955/0x2170Ed0880ac9A755fd29B2688956BD959F933F8?lang=en" target="_blank"><span data-i18n="get">Get</span> ETH-USDT</a>',
      fromBlock: 8368888,
      defaultRoiDay: .26888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsETH-USDT"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x12b05c671E30E9C79C50D8629955A7b9e9eFB2eD",
      tokenSymbol: "mETH-BTC",
      tokenImage: "mdx.png",
      harvesterRewardSymbol: "MDX",
      walletInfo: '<a class="wallet-info" href="https://bsc.mdex.com/#/add/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/0x2170Ed0880ac9A755fd29B2688956BD959F933F8?lang=en" target="_blank"><span data-i18n="get">Get</span> ETH-BTC</a>',
      fromBlock: 8368888,
      defaultRoiDay: .13888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsETH-BTC"
    },
    tags: ["acs", "mdex"]
  }, {
    vault: {
      address: "0x40a7dd6502828aE78d12F0F05506a64DCFdCDfEd",
      tokenSymbol: "uUNFI-BNB",
      tokenImage: "unfi.png",
      harvesterRewardSymbol: "UP",
      walletInfo: '<a class="wallet-info" href="https://binance.unifiprotocol.com/exchange/liquidity/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B" target="_blank"><span data-i18n="get">Get</span> uUNFI-BNB</a>',
      fromBlock: 8753888,
      defaultRoiDay: .9888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.uUNFI-BNB",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["acs", "unifi"]
  }, {
    vault: {
      address: "0x2875a5B002C2F2116590C70B632F6C28A5B3Ef2c",
      tokenSymbol: "uACS-BNB",
      tokenImage: "unfi.png",
      harvesterRewardSymbol: "UP",
      walletInfo: '<a class="wallet-info" href="https://binance.unifiprotocol.com/exchange/liquidity/add/0x4197c6ef3879a08cd51e5560da5064b773aa1d29/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" target="_blank"><span data-i18n="get">Get</span> uACS-BNB</a>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acs.uACS-BNB",
      transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
    },
    tags: ["core", "acs", "unifi"]
  }, {
    vault: {
      address: "0xB6eB654FBDc697edD73174a19B074BC67c00a0C0",
      tokenSymbol: "CAKE",
      showWatchAsset: !0,
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<span class="wallet-info"><span data-i18n="get">Get</span> CAKE: <a href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" target="_blank">Acsi.Finance</a> <a href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank">1inch</a></span>'
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsCAKE"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xe9861F3624B5F7012991ba2762CD1eAD4c622FF5",
      tokenSymbol: "CAKE-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" target="_blank"><span data-i18n="get">Get</span> CAKE-BNB</a>',
      fromBlock: 6908888,
      defaultRoiDay: .7188 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsCAKE-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x0551EA09C83FAFF84d83cfB1c75830EB1229fd31",
      tokenSymbol: "CAKE-BUSD",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" target="_blank"><span data-i18n="get">Get</span> CAKE-BUSD</a>',
      fromBlock: 7693888,
      defaultRoiDay: 1.888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsCAKE-BUSD"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xb9B8370BB74337859ee091ebc8Dfb58d94e84f31",
      tokenSymbol: "CAKE-USDT",
      tokenImage: "cake-busd.svg",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0x55d398326f99059fF775485246999027B3197955/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" target="_blank"><span data-i18n="get">Get</span> CAKE-USDT</a>',
      fromBlock: 8743888,
      defaultRoiDay: .888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsCAKE-USDT"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x1Db2f258E7f403C1f4b1BC47F686aa3E161DC655",
      tokenSymbol: "XVS-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63" target="_blank"><span data-i18n="get">Get</span> XVS-BNB</a>',
      fromBlock: 6920888,
      defaultRoiDay: .6888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsXVS-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "venus", "deprecated"]
  }, {
    vault: {
      address: "0x32d5B8867B44762d78e80fFcBF6E956E6A35F3a0",
      tokenSymbol: "SXP-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A" target="_blank"><span data-i18n="get">Get</span> SXP-BNB</a>',
      fromBlock: 6920888,
      defaultRoiDay: .6188 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsSXP-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "swipe", "deprecated"]
  }, {
    vault: {
      address: "0x9Ce0E88c803672CE672b9b9e66c664B81499cE04",
      tokenSymbol: "BUSD-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" target="_blank"><span data-i18n="get">Get</span> BUSD-BNB</a>',
      fromBlock: 6928888,
      defaultRoiDay: .29888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBUSD-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x54D01f573017A4e61452cb13432e3a59a79C36bf",
      tokenSymbol: "USDT-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x55d398326f99059fF775485246999027B3197955" target="_blank"><span data-i18n="get">Get</span> USDT-BNB</a>',
      fromBlock: 6928888,
      defaultRoiDay: .22888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsUSDT-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x08234f020496ccceEB144f9637A566b936b0EE6F",
      tokenSymbol: "ETH-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank"><span data-i18n="get">Get</span> ETH-BNB</a>',
      fromBlock: 6932888,
      defaultRoiDay: .15888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsETH-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xED3f6a5Fbe2B4Bf4250f5eCD1eEa9768A9E01765",
      tokenSymbol: "ETH-USDC",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank"><span data-i18n="get">Get</span> ETH-USDC</a>',
      fromBlock: 8283888,
      defaultRoiDay: .22888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsETH-USDC"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x1231082D043393f8990861521A10BDc911fEDbBe",
      tokenSymbol: "BTC-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c" target="_blank"><span data-i18n="get">Get</span> BTC-BNB</a>',
      fromBlock: 6932888,
      defaultRoiDay: .17888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBTC-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xbe627707f079e32A54d323BE0c61Da02a28bD0bd",
      tokenSymbol: "BTC-BUSD",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c" target="_blank"><span data-i18n="get">Get</span> BTC-BUSD</a>',
      fromBlock: 7008888,
      defaultRoiDay: .83888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBTC-BUSD"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x5e1D648CF00E31b08ede095170B6764B60D06056",
      tokenSymbol: "LTC-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94" target="_blank"><span data-i18n="get">Get</span> LTC-BNB</a>',
      fromBlock: 6948888,
      defaultRoiDay: .19888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsLTC-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x3DCd4c706EA3c36a1173503ad5C40217Bfbc935E",
      tokenSymbol: "ADA-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47" target="_blank"><span data-i18n="get">Get</span> ADA-BNB</a>',
      fromBlock: 6953888,
      defaultRoiDay: .29888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsADA-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xeE9Ccd9d5c8b07Bb9E6bF1Ab17748C737eC35EA0",
      tokenSymbol: "UNI-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1" target="_blank"><span data-i18n="get">Get</span> UNI-BNB</a>',
      fromBlock: 6953888,
      defaultRoiDay: .32888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsUNI-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xB2c1B30689B8A3fD0916B3a3C6135D0226DeCA7c",
      tokenSymbol: "DOT-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402" target="_blank"><span data-i18n="get">Get</span> DOT-BNB</a>',
      fromBlock: 6953888,
      defaultRoiDay: .35888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsDOT-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x67D288C7599F866880e7486F9E29dedA4749bBB8",
      tokenSymbol: "XRP-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE" target="_blank"><span data-i18n="get">Get</span> XRP-BNB</a>',
      fromBlock: 6953888,
      defaultRoiDay: .48888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsXRP-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xB18Cf14cCD6a32C87783c2010D52aB39fA98A081",
      tokenSymbol: "LINK-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD" target="_blank"><span data-i18n="get">Get</span> LINK-BNB</a>',
      fromBlock: 6953888,
      defaultRoiDay: .36888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsLINK-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x22E61e0E445f3a5d2675Cbb20f8c03FA3C55BD95",
      tokenSymbol: "TWT-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x4B0F1812e5Df2A09796481Ff14017e6005508003" target="_blank"><span data-i18n="get">Get</span> TWT-BNB</a>',
      fromBlock: 6958888,
      defaultRoiDay: 1.3988 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsTWT-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xB8C134eFAfda61a906B657A19b37B3d733362C98",
      tokenSymbol: "BTCST-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x78650B139471520656b9E7aA7A5e9276814a38e9" target="_blank"><span data-i18n="get">Get</span> BTCST-BNB</a>',
      fromBlock: 6958888,
      defaultRoiDay: 1.59888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsBTCST-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x14cb72a422bE17372108A2b5f7A2837297948745",
      tokenSymbol: "SFP-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb" target="_blank"><span data-i18n="get">Get</span> SFP-BNB</a>',
      fromBlock: 6958888,
      defaultRoiDay: .9688 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsSFP-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x79980898fB7fCC8950335b173Cc5872A96328b5d",
      tokenSymbol: "TKO-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x9f589e3eabe42ebC94A44727b3f3531C0c877809" target="_blank"><span data-i18n="get">Get</span> TKO-BNB</a>',
      fromBlock: 6958888,
      defaultRoiDay: 1.1988 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsTKO-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x7d34CD09953E4f30Cb21494A1ee74eb3F03d996a",
      tokenSymbol: "TLM-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x2222227E22102Fe3322098e4CBfE18cFebD57c95" target="_blank"><span data-i18n="get">Get</span> TLM-BNB</a>',
      fromBlock: 6963888,
      defaultRoiDay: 2.0888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsTLM-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x5A330d3F99Ac2Ef00ac5167707D88E9D3D59620c",
      tokenSymbol: "ALICE-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xAC51066d7bEC65Dc4589368da368b212745d63E8" target="_blank"><span data-i18n="get">Get</span> ALICE-BNB</a>',
      fromBlock: 6963888,
      defaultRoiDay: 1.55888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsALICE-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xcDb35CF4DeD79c991eabcbB03fEcBA6D9af0Bf6e",
      tokenSymbol: "ALPHA-BNB",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xa1faa113cbE53436Df28FF0aEe54275c13B40975" target="_blank"><span data-i18n="get">Get</span> ALPHA-BNB</a>',
      fromBlock: 6985888,
      defaultRoiDay: 1.59888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsALPHA-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x61E960dC662c798Dc1646219017542612e35aE8B",
      tokenSymbol: "HOTCROSS-BNB",
      tokenImage: "cake-bnb.svg",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x4FA7163E153419E0E1064e418dd7A99314Ed27b6" target="_blank"><span data-i18n="get">Get</span> HOTCROSS-BNB</a>',
      fromBlock: 10423888,
      defaultRoiDay: .3888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsHOTCROSS-BNB"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0x38e3e6973Ba60daADB3bA8B4DF76Ef3a5A8962b0",
      tokenSymbol: "USDT-BUSD",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x55d398326f99059fF775485246999027B3197955" target="_blank"><span data-i18n="get">Get</span> USDT-BUSD</a>',
      fromBlock: 6978888,
      defaultRoiDay: .0988 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsUSDT-BUSD"
    },
    tags: ["acs", "pancake", "pancakeV2", "usd", "deprecated"]
  }, {
    vault: {
      address: "0x713dA080C8014111F42FBb76423D52F22e38d8DE",
      tokenSymbol: "TUSD-BUSD",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x14016E85a25aeb13065688cAFB43044C2ef86784" target="_blank"><span data-i18n="get">Get</span> TUSD-BUSD</a>',
      fromBlock: 8283888,
      defaultRoiDay: .11888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsTUSD-BUSD"
    },
    tags: ["acs", "pancake", "pancakeV2", "usd", "deprecated"]
  }, {
    vault: {
      address: "0xCbA040A994824572c6827d81A6f5715E163C0F64",
      tokenSymbol: "TPT-BUSD",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xECa41281c24451168a37211F0bc2b8645AF45092" target="_blank"><span data-i18n="get">Get</span> TPT-BUSD</a>',
      fromBlock: 6978888,
      defaultRoiDay: 1.64888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsTPT-BUSD"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }, {
    vault: {
      address: "0xCFb96FFbE95C0B7129b57eC4D229F8b9eae2d280",
      tokenSymbol: "SUSHI-ETH",
      harvesterRewardSymbol: "CAKE",
      walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4" target="_blank"><span data-i18n="get">Get</span> SUSHI-ETH</a>',
      fromBlock: 6978888,
      defaultRoiDay: .35888 / 365
    },
    farm: {
      master: D.acsMasterFarmV2,
      tokenSymbol: "acsSUSHI-ETH"
    },
    tags: ["acs", "pancake", "pancakeV2", "deprecated"]
  }];
D.farmVaultsDeprecated = [{
  vault: {
    deprecated: !0,
    address: "0x28b4b0fe2FCe360AfF812D2d0B9d88c575314Af9",
    tokenSymbol: "DSG-VAI",
    tokenImage: "dsg.svg",
    harvesterRewardSymbol: "DSG",
    walletInfo: '<a class="wallet-info" href="https://dsgmetaverse.com/#/add/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7/0x9A78649501BbAAC285Ea4187299471B7ad4ABD35" target="_blank"><span data-i18n="get">Get</span> DSG-VAI</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsDSG-VAI"
  },
  tags: ["acs", "dsg"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0xEa20aC7B5E6379cEB44ab0E18C5e8A09Da40EaA0",
    tokenSymbol: "TUSD-BUSD",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xea20ac7b5e6379ceb44ab0e18c5e8a09da40eaa000020000000000000000000f" target="_blank"><span data-i18n="get">Get</span> TUSD-BUSD</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi", "usd"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x51441Efb4bEeB1694FcC985d522c120286400061",
    tokenSymbol: "USTw-BUSD",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x51441efb4beeb1694fcc985d522c12028640006100020000000000000000001b" target="_blank"><span data-i18n="get">Get</span> USTw-BUSD</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi", "usd"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x33aD459E413FF93762f69a156c375ADCF6196f12",
    tokenSymbol: "MIM-BUSD",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x33ad459e413ff93762f69a156c375adcf6196f1200020000000000000000001c" target="_blank"><span data-i18n="get">Get</span> MIM-BUSD</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi", "usd"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x16f057CFcd681F754e27cb98ac7Ef7B1099F216C",
    tokenSymbol: "DOGELON",
    title: "DOGE-SHIB-mTSLA-BTC",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x16f057cfcd681f754e27cb98ac7ef7b1099f216c000100000000000000000017" target="_blank"><span data-i18n="get">Get</span> DOGE-SHIB-mTSLA-BTC</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0xDfd7684dbd0C31a302aBaC3a4b62caAdD1235E7F",
    tokenSymbol: "XVS-SXP-VRT-VAI-BNB",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xdfd7684dbd0c31a302abac3a4b62caadd1235e7f000100000000000000000004" target="_blank"><span data-i18n="get">Get</span> XVS-SXP-VRT-VAI-BNB</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi", "venus"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x56C4F0984Ce2c82e340E697210984Fc9b1532eE6",
    tokenSymbol: "CAKE-MDX-HMDX-BAKE-ACSI-BNB",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x56c4f0984ce2c82e340e697210984fc9b1532ee6000100000000000000000005" target="_blank"><span data-i18n="get">Get</span> CAKE-MDX-HMDX-BAKE-ACSI-BNB</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi"]
}, {
  vault: {
    deprecated: !0,
    address: "0xB1Dc4FEe3248362d54E15192EA771E82dfafd5Bd",
    tokenSymbol: "XVS",
    showWatchAsset: !0,
    harvesterRewardSymbol: "XVS",
    fromBlock: 2674259,
    showBorrowLimit: !0,
    walletInfo: '<span class="wallet-info"><span data-i18n="get">Get</span> XVS: <a href="https://app.acsi.finance/#/trade/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63" target="_blank">Acsi.Finance</a> <a href="https://app.1inch.io/#/r/0x5bd97307a40dfbfdbaef4b3d997adb816f2dadcc" target="_blank">1inch</a></span>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsXVS"
  },
  tags: ["acs", "venus", "venusProtocol", "swipe"]
}, {
  vault: {
    deprecated: !0,
    address: "0x8692858d9DAE5C9E48515531E8d62d2c44E4C453",
    tokenSymbol: "FRONT-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b" target="_blank"><span data-i18n="get">Get</span> FRONT-BNB</a>',
    fromBlock: 6963888,
    defaultRoiDay: 1.73888 / 365
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsFRONT-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0xFafF81515aC376b1E07F068f527ed8de31437A9F",
    tokenSymbol: "ONT-BUSD-BNB",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0xfaff81515ac376b1e07f068f527ed8de31437a9f000100000000000000000008" target="_blank"><span data-i18n="get">Get</span> ONT-BUSD-BNB</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x40e030d42f2417624E950E86a6A94195b2D69f54",
    tokenSymbol: "FINS-BNB",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x40e030d42f2417624e950e86a6a94195b2d69f54000200000000000000000018" target="_blank"><span data-i18n="get">Get</span> FINS-BNB</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x699c58d77027Ae44608808B3863C394A194d76f6",
    tokenSymbol: "ACSI-ACS",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0x4197C6EF3879a08cD51e5560da5064B773aa1d29/0x5b17b4d5e4009B5C43e3e3d63A5229F794cBA389" target="_blank"><span data-i18n="get">Get</span> ACSI-ACS</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["core", "acsi"]
}, {
  vault: {
    deprecated: !0,
    address: "0x4939A789b36C058b5b96D3e24588674d81a9EFBD",
    tokenSymbol: "NAOS-BNB",
    tokenImage: "cake-bnb.svg",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x758d08864fB6cCE3062667225ca10b8F00496cc2" target="_blank"><span data-i18n="get">Get</span> NAOS-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsNAOS-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0x4c6f2643001669842778D8B6C1878E3EbC1Ea377",
    tokenSymbol: "REEF-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e" target="_blank"><span data-i18n="get">Get</span> REEF-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsREEF-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0x2883D6d514D2474B942769B981702526897D74D4",
    tokenSymbol: "BAND-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18" target="_blank"><span data-i18n="get">Get</span> BAND-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsBAND-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0xb00B62da1cd28AB88983960487F2902c64c00bc5",
    tokenSymbol: "sACS-SXP",
    tokenImage: "sxp.svg",
    harvesterRewardSymbol: "SXP",
    walletInfo: '<a class="wallet-info" href="https://swap.swipe.org/add-liquidity?type=add&inputCurrency=0x4197c6ef3879a08cd51e5560da5064b773aa1d29&outputCurrency=0x47bead2563dcbf3bf2c9407fea4dc236faba485a" target="_blank"><span data-i18n="get">Get</span> sACS-SXP</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acs.sACS-SXP",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["swipeswap"]
}, {
  vault: {
    deprecated: !0,
    address: "0x03f52C3612df0dB3c86a4776a20caece8A194f38",
    tokenSymbol: "sVAI-BNB",
    tokenImage: "sxp.svg",
    harvesterRewardSymbol: "SXP",
    walletInfo: '<a class="wallet-info" href="https://swap.swipe.org/add-liquidity?type=add&inputCurrency=0x4bd17003473389a42daf6a0a729f6fdb328bbbd7&outputCurrency=0x0000000000000000000000000000000000000000" target="_blank"><span data-i18n="get">Get</span> sVAI-BNB</a>',
    fromBlock: 5788888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acs.sVAI-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["swipeswap"]
}, {
  vault: {
    deprecated: !0,
    address: "0x1DA371DC8127b0cdED8D13fF20F062Bb9e02C1a3",
    tokenSymbol: "sSXP-BNB",
    tokenImage: "sxp.svg",
    harvesterRewardSymbol: "SXP",
    walletInfo: '<a class="wallet-info" href="https://swap.swipe.org/add-liquidity?type=add&inputCurrency=0x47bead2563dcbf3bf2c9407fea4dc236faba485a&outputCurrency=0x0000000000000000000000000000000000000000" target="_blank"><span data-i18n="get">Get</span> sSXP-BNB</a>',
    fromBlock: 5758888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acs.sSXP-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["swipeswap"]
}, {
  vault: {
    deprecated: !0,
    address: "0x49C4b95dc2198F2c4c9516834a8AcBFc4b3e4429",
    tokenSymbol: "sSXP-BUSD",
    tokenImage: "sxp.svg",
    harvesterRewardSymbol: "SXP",
    walletInfo: '<a class="wallet-info" href="https://swap.swipe.org/add-liquidity?type=add&inputCurrency=0x47bead2563dcbf3bf2c9407fea4dc236faba485a&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56" target="_blank"><span data-i18n="get">Get</span> sSXP-BUSD</a>',
    fromBlock: 5728888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acs.sSXP-BUSD",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["swipeswap"]
}, {
  vault: {
    deprecated: !0,
    address: "0x2C39de04688D71Cd7d502297dEf53E4be0c420B3",
    tokenSymbol: "sSXP-BTC",
    tokenImage: "sxp.svg",
    harvesterRewardSymbol: "SXP",
    walletInfo: '<a class="wallet-info" href="https://swap.swipe.org/add-liquidity?type=add&inputCurrency=0x47bead2563dcbf3bf2c9407fea4dc236faba485a&outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" target="_blank"><span data-i18n="get">Get</span> sSXP-BTC</a>',
    fromBlock: 5728888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acs.sSXP-BTC",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["swipeswap"]
}, {
  vault: {
    deprecated: !0,
    address: "0x7Cc9bc059401964E060f027a027FCF039C954C6b",
    tokenSymbol: "sBTC-BNB",
    tokenImage: "sxp.svg",
    harvesterRewardSymbol: "SXP",
    walletInfo: '<a class="wallet-info" href="https://swap.swipe.org/add-liquidity?type=add&inputCurrency=0x0000000000000000000000000000000000000000&outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" target="_blank"><span data-i18n="get">Get</span> sBTC-BNB</a>',
    fromBlock: 7453888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acs.sBTC-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["swipeswap"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x49b823Bec2d4E89Cf4368bD743de1bC74871af22",
    tokenSymbol: "BTC-renBTC-pBTC",
    tokenImage: "acsi-acs.svg",
    walletInfo: '<a class="wallet-info" href="https://app.acsi.finance/#/pool/0x49b823bec2d4e89cf4368bd743de1bc74871af22000000000000000000000006" target="_blank"><span data-i18n="get">Get</span> BTC-renBTC-pBTC</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "acsifi"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x2d00C55b93a03830D19eb97A5e48F77aCaac2D63",
    tokenSymbol: "ACS3BTC",
    walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/btc/" target="_blank"><span data-i18n="get">Get</span> ACS3BTC</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "stableswap"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarmV2b,
    token: "0x49440376254290b3264183807A16450457f02B28",
    tokenSymbol: "ACS4QUSD",
    walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/qusd/" target="_blank"><span data-i18n="get">Get</span> ACS4QUSD</a>',
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acsi-farms" target="_blank">Harvest fee: ${D.acsiHarvestFee} ACSI</a>`
  },
  tags: ["acsi", "stableswap"]
}, {
  vault: {
    deprecated: !0,
    address: "0xC3eF174A704aB413cA81A5eB3f7eB08B535e91C4",
    tokenSymbol: "pBTC-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C" target="_blank"><span data-i18n="get">Get</span> pBTC-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acspBTC-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0x627E6506F26f7ae6250667f4F5A494E0e6443ED5",
    tokenSymbol: "COMP-ETH",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8" target="_blank"><span data-i18n="get">Get</span> COMP-ETH</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsCOMP-ETH"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0xA7fE1ac962E451312208e09A7c894EBa44833E86",
    tokenSymbol: "MIR-UST",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9" target="_blank"><span data-i18n="get">Get</span> MIR-UST</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsMIR-UST"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0x46E65055Be06AF470384BcFe140b4ec8a160d15f",
    tokenSymbol: "CTK-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929" target="_blank"><span data-i18n="get">Get</span> CTK-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsCTK-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0x8383661eCF333FCe4Bf51d498D7c94e2a0c7d5AF",
    tokenSymbol: "WATCH-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0" target="_blank"><span data-i18n="get">Get</span> WATCH-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsWATCH-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0xC34E0597e50A173E3bE8682512aff80D0DFd49f9",
    tokenSymbol: "SWINGBY-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739" target="_blank"><span data-i18n="get">Get</span> SWINGBY-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsSWINGBY-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0xAd4BBa0Da4889830fa8C9c7B1b04Ab4faa791F6f",
    tokenSymbol: "FOR-BUSD",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x658A109C5900BC6d2357c87549B651670E5b0539" target="_blank"><span data-i18n="get">Get</span> FOR-BUSD</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsFOR-BUSD"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0x3d4bECF8C867d0Ca5C40b5c9449b96C481425334",
    tokenSymbol: "ZIL-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787" target="_blank"><span data-i18n="get">Get</span> ZIL-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsZIL-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0xAdb783Ca0eeDe47d882A8E1C656A1E681a388adA",
    tokenSymbol: "VRT-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x5F84ce30DC3cF7909101C69086c50De191895883" target="_blank"><span data-i18n="get">Get</span> VRT-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsVRT-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0xdFE0E5992dE7Ca8277A40C37ACCDE36dCb9c94C6",
    tokenSymbol: "YFI-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e" target="_blank"><span data-i18n="get">Get</span> YFI-BNB</a>',
    fromBlock: 6953888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsYFI-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  vault: {
    deprecated: !0,
    address: "0xE47C98A41Ea2f48C17d6B58420CbCeD5E69F5987",
    tokenSymbol: "UNFI-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://pancakeswap.finance/add/BNB/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B" target="_blank"><span data-i18n="get">Get</span> UNFI-BNB</a>',
    fromBlock: 6958888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsUNFI-BNB"
  },
  tags: ["acs", "pancake", "pancakeV2"]
}, {
  farm: {
    deprecated: !0,
    token: "0x2366eC9dDD1eB27506Fa2Ed48Da8f2D9e99ed3c7",
    master: D.acsMasterFarmV2,
    tokenSymbol: "ACS-BNB",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x4197C6EF3879a08cD51e5560da5064B773aa1d29" target="_blank"><span data-i18n="get">Get</span> ACS-BNB</a>'
  },
  tags: ["core", "acs"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarm,
    pid: 0,
    tokenSymbol: "ACSI-ACS",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0x4197C6EF3879a08cD51e5560da5064B773aa1d29/0x5b17b4d5e4009B5C43e3e3d63A5229F794cBA389" target="_blank"><span data-i18n="get">Get</span> ACSI-ACS</a>',
    transactionInfo: C
  },
  tags: ["acsiV1"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarm,
    pid: 1,
    tokenSymbol: "ACS4USD",
    walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/" target="_blank"><span data-i18n="get">Get</span> ACS4USD</a>',
    transactionInfo: C
  },
  tags: ["acsiV1"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarm,
    pid: 2,
    tokenSymbol: "ACS4VAI",
    walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/vai/" target="_blank"><span data-i18n="get">Get</span> ACS4VAI</a>',
    transactionInfo: C
  },
  tags: ["acsiV1"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarm,
    pid: 4,
    tokenSymbol: "ACS4UST",
    walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/ust/" target="_blank"><span data-i18n="get">Get</span> ACS4UST</a>',
    transactionInfo: C
  },
  tags: ["acsiV1"]
}, {
  farm: {
    deprecated: !0,
    master: D.acsiMasterFarm,
    pid: 3,
    tokenSymbol: "ACS4QUSD",
    walletInfo: '<a class="wallet-info" href="https://app.acryptos.com/stableswap/deposit/qusd/" target="_blank"><span data-i18n="get">Get</span> ACS4QUSD</a>',
    transactionInfo: C
  },
  tags: ["acsiV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x68fdCd299E33Bee7695eFBc227Ab948Ae29BFc3c",
    tokenSymbol: "CAKE-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" target="_blank"><span data-i18n="get">Get</span> CAKE-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsCAKE-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xcd630D39F76C12Af11c2Ed9876ccF976C47A08C3",
    tokenSymbol: "XVS-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63" target="_blank"><span data-i18n="get">Get</span> XVS-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsXVS-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1", "venus"]
}, {
  vault: {
    deprecated: !0,
    address: "0xFd1EfbAe73E0BAF23fB0Fb394480405609B331b6",
    tokenSymbol: "SXP-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A" target="_blank"><span data-i18n="get">Get</span> SXP-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsSXP-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1", "swipe"]
}, {
  vault: {
    deprecated: !0,
    address: "0x97391c2A035bdCF537c1ce2a70D14fAA3d44317f",
    tokenSymbol: "BUSD-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xe9e7cea3dedca5984780bafc599bd69add087d56" target="_blank"><span data-i18n="get">Get</span> BUSD-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsBUSD-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xA0753CC49EB66bb4Bc80E8f042A6dE21fc03e5cD",
    tokenSymbol: "USDT-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x55d398326f99059fF775485246999027B3197955" target="_blank"><span data-i18n="get">Get</span> USDT-BNB</a>',
    fromBlock: 5123888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsUSDT-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xCfbB1A0522e70fA5688c023b37C58e43c9A6398E",
    tokenSymbol: "USDT-BUSD",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x55d398326f99059fF775485246999027B3197955" target="_blank"><span data-i18n="get">Get</span> USDT-BUSD</a>',
    fromBlock: 5188888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsUSDT-BUSD",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1", "usd"]
}, {
  vault: {
    deprecated: !0,
    address: "0x51d6b8A1d3f6b4aEf8bcaECD8EaD7ff2EFDcbB73",
    tokenSymbol: "ETH-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank"><span data-i18n="get">Get</span> ETH-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsETH-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x161A623c27D20d3717ffe279889e50eEb23962c3",
    tokenSymbol: "BTC-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c" target="_blank"><span data-i18n="get">Get</span> BTC-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsBTC-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x1B5ca4cBf6a2f453506fEC365dc0061d8D127Ec9",
    tokenSymbol: "pBTC-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C" target="_blank"><span data-i18n="get">Get</span> pBTC-BNB</a>',
    fromBlock: 6168888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acs.pBTC-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x15edF148b5d43684075B77EEa866FF833a54d73c",
    tokenSymbol: "LTC-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94" target="_blank"><span data-i18n="get">Get</span> LTC-BNB</a>',
    fromBlock: 3970888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsLTC-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x55D2AE06B0904d70d091BC32608F37C5FBE375D4",
    tokenSymbol: "YFI-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e" target="_blank"><span data-i18n="get">Get</span> YFI-BNB</a>',
    fromBlock: 4528888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsYFI-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xDAC0c9b3CaccF7e76D2F238663c98fDd9D07F323",
    tokenSymbol: "ADA-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47" target="_blank"><span data-i18n="get">Get</span> ADA-BNB</a>',
    fromBlock: 4168888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsADA-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xed08BD00c24197f696A58CAdb3Bca9c67d8110A7",
    tokenSymbol: "UNI-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1" target="_blank"><span data-i18n="get">Get</span> UNI-BNB</a>',
    fromBlock: 4878888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsUNI-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xEC94dC055d478C97E7C434dd6BC34eAb1c527aB3",
    tokenSymbol: "DOT-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402" target="_blank"><span data-i18n="get">Get</span> DOT-BNB</a>',
    fromBlock: 5008888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsDOT-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xA20806fB4fC6dC3434Bba7a8587f0efEB0e69584",
    tokenSymbol: "BAND-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18" target="_blank"><span data-i18n="get">Get</span> BAND-BNB</a>',
    fromBlock: 5008888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsBAND-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xD7d38dBcC1cF9DF5f644b23eB19DdeA17105ec25",
    tokenSymbol: "ZIL-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787" target="_blank"><span data-i18n="get">Get</span> ZIL-BNB</a>',
    fromBlock: 6098888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsZIL-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xeF015F747dC06672501Ff0F20c3b94F56FA5427F",
    tokenSymbol: "TKO-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x9f589e3eabe42ebC94A44727b3f3531C0c877809" target="_blank"><span data-i18n="get">Get</span> TKO-BNB</a>',
    fromBlock: 6378888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsTKO-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x6200F22041bDA696D3A639aF1ddb62747E384941",
    tokenSymbol: "TLM-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x2222227E22102Fe3322098e4CBfE18cFebD57c95" target="_blank"><span data-i18n="get">Get</span> TLM-BNB</a>',
    fromBlock: 6538888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsTLM-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xe427a9688C0d16eA5d29DB0dcC1D6E1e61Ea9908",
    tokenSymbol: "TWT-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x4B0F1812e5Df2A09796481Ff14017e6005508003" target="_blank"><span data-i18n="get">Get</span> TWT-BNB</a>',
    fromBlock: 3710934
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsTWT-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xDB335c7c4AD429A1F53971fd4644b599DC631306",
    tokenSymbol: "UNFI-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B" target="_blank"><span data-i18n="get">Get</span> UNFI-BNB</a>'
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsUNFI-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x93e2e1e384dC298bDEafaEe9751841EA211f2d42",
    tokenSymbol: "BTCST-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x78650B139471520656b9E7aA7A5e9276814a38e9" target="_blank"><span data-i18n="get">Get</span> BTCST-BNB</a>',
    fromBlock: 3949888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsBTCST-BNB"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x02AaBF12f7C377916BB828BcE3d45c778d919d0e",
    tokenSymbol: "SFP-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb" target="_blank"><span data-i18n="get">Get</span> SFP-BNB</a>',
    fromBlock: 4703888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsSFP-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x2932568487318969BE7593a27dD5d45aB521e50D",
    tokenSymbol: "FRONT-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b" target="_blank"><span data-i18n="get">Get</span> FRONT-BNB</a>',
    fromBlock: 4948888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsFRONT-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xC109d8B9F89Bd939B81Df4Fe47951f9683207102",
    tokenSymbol: "WATCH-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0" target="_blank"><span data-i18n="get">Get</span> WATCH-BNB</a>',
    fromBlock: 5958888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsWATCH-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x2D8483Bc2a9E2723711888532Fd542483F041137",
    tokenSymbol: "SWINGBY-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739" target="_blank"><span data-i18n="get">Get</span> SWINGBY-BNB</a>',
    fromBlock: 5269888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsSWINGBY-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xa1125B756e0ac05ff5d07Cde4D511E1837aADc88",
    tokenSymbol: "ALICE-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xAC51066d7bEC65Dc4589368da368b212745d63E8" target="_blank"><span data-i18n="get">Get</span> ALICE-BNB</a>',
    fromBlock: 5703888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsALICE-BNB",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x2654346a32D4233B3266AF3C5FD7BAE3C571F345",
    tokenSymbol: "FOR-BUSD",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x658A109C5900BC6d2357c87549B651670E5b0539" target="_blank"><span data-i18n="get">Get</span> FOR-BUSD</a>',
    fromBlock: 5818888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsFOR-BUSD",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xa387beD33E0415302614545eAD370c27778B955E",
    tokenSymbol: "TPT-BUSD",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xECa41281c24451168a37211F0bc2b8645AF45092" target="_blank"><span data-i18n="get">Get</span> TPT-BUSD</a>',
    fromBlock: 5578888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsTPT-BUSD",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x373561f3119353e50F21EE1181dd8749ae8276b9",
    tokenSymbol: "MIR-UST",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9" target="_blank"><span data-i18n="get">Get</span> MIR-UST</a>',
    fromBlock: 6308888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsMIR-UST",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xED51b5c077B71d5B475E30C88B72632fa679fCE3",
    tokenSymbol: "COMP-ETH",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8" target="_blank"><span data-i18n="get">Get</span> COMP-ETH</a>',
    fromBlock: 4758888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsCOMP-ETH",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0x3679d4C2752bEef8632fd12c45b005ecB2774EF0",
    tokenSymbol: "SUSHI-ETH",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4" target="_blank"><span data-i18n="get">Get</span> SUSHI-ETH</a>',
    fromBlock: 5188888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsSUSHI-ETH",
    transactionInfo: `<a class="wallet-info" href="https://docs.acryptos.com/fees#acs-farms-v2" target="_blank">Harvest fee: ${D.acsHarvestFee} ACS</a>`
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  vault: {
    deprecated: !0,
    address: "0xe9d9f54Ab89F712ABBdbb3C0F63f2D6eDAa3869c",
    tokenSymbol: "BETH-ETH",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B" target="_blank"><span data-i18n="get">Get</span> BETH-ETH</a>',
    fromBlock: 4608888
  },
  farm: {
    deprecated: !0,
    master: D.acsMasterFarmV2,
    tokenSymbol: "acsBETH-ETH"
  },
  tags: ["acs", "pancake", "pancakeV1"]
}, {
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 0,
    tokenSymbol: "ACS-BNB",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x4197C6EF3879a08cD51e5560da5064B773aa1d29" target="_blank"><span data-i18n="get">Get</span> ACS-BNB</a>'
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x6Fe6762E9314ad80803fef083c8bB16Af435a628",
    tokenSymbol: "BNB",
    harvesterRewardSymbol: "XVS",
    isBnbVault: !0,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 10,
    tokenSymbol: "acsBNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x0395fCC8E1a1E30A1427D4079aF6E23c805E3eeF",
    tokenSymbol: "BTC",
    harvesterRewardSymbol: "XVS",
    fromBlock: 2908281,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 15,
    tokenSymbol: "acsBTC"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x35cAdD2DAA782556B7fD90A98663BaCDb78d863e",
    tokenSymbol: "ETH",
    harvesterRewardSymbol: "XVS",
    fromBlock: 2938888,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 16,
    tokenSymbol: "acsETH"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x883A0D28dbac2E713e87aa2448595438D8016811",
    tokenSymbol: "VAI",
    harvesterRewardSymbol: "XVS",
    fromBlock: 3533888
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 17,
    tokenSymbol: "acsVAI"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x532d5775cE71Cb967B78acbc290f80DF80A9bAa5",
    tokenSymbol: "BUSD",
    harvesterRewardSymbol: "XVS",
    fromBlock: 2597909,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 9,
    tokenSymbol: "acsBUSD"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x32Fe1bE67102c10F6f5E798cb24723E738A31943",
    tokenSymbol: "USDT",
    harvesterRewardSymbol: "XVS",
    fromBlock: 2645816,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 11,
    tokenSymbol: "acsUSDT"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xA4964271b476B0730Acf86DD9f8D270b5E804126",
    tokenSymbol: "DAI",
    harvesterRewardSymbol: "XVS",
    fromBlock: 3776888,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 19,
    tokenSymbol: "acsDAI"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x4E58b693092e33e46A8734B9c4064B82afdcA14f",
    tokenSymbol: "USDC",
    harvesterRewardSymbol: "XVS",
    fromBlock: 2711765,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 13,
    tokenSymbol: "acsUSDC"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xFc698dAE6c5B7e38F8Eb8Fc240f23c598d17e5e2",
    tokenSymbol: "SXP",
    harvesterRewardSymbol: "XVS",
    fromBlock: 2738e3,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 14,
    tokenSymbol: "acsSXP"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xB1Dc4FEe3248362d54E15192EA771E82dfafd5Bd",
    tokenSymbol: "XVS",
    harvesterRewardSymbol: "XVS",
    fromBlock: 2674259,
    showBorrowLimit: !0
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 12,
    tokenSymbol: "acsXVS"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xB6eB654FBDc697edD73174a19B074BC67c00a0C0",
    tokenSymbol: "CAKE"
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 1,
    tokenSymbol: "acsCAKE"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x68fdCd299E33Bee7695eFBc227Ab948Ae29BFc3c",
    tokenSymbol: "CAKE-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" target="_blank"><span data-i18n="get">Get</span> CAKE-BNB</a>'
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 7,
    tokenSymbol: "acsCAKE-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xcd630D39F76C12Af11c2Ed9876ccF976C47A08C3",
    tokenSymbol: "XVS-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63" target="_blank"><span data-i18n="get">Get</span> XVS-BNB</a>'
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 4,
    tokenSymbol: "acsXVS-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xFd1EfbAe73E0BAF23fB0Fb394480405609B331b6",
    tokenSymbol: "SXP-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A" target="_blank"><span data-i18n="get">Get</span> SXP-BNB</a>'
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 5,
    tokenSymbol: "acsSXP-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x97391c2A035bdCF537c1ce2a70D14fAA3d44317f",
    tokenSymbol: "BUSD-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0xe9e7cea3dedca5984780bafc599bd69add087d56" target="_blank"><span data-i18n="get">Get</span> BUSD-BNB</a>'
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 6,
    tokenSymbol: "acsBUSD-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x51d6b8A1d3f6b4aEf8bcaECD8EaD7ff2EFDcbB73",
    tokenSymbol: "ETH-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x2170Ed0880ac9A755fd29B2688956BD959F933F8" target="_blank"><span data-i18n="get">Get</span> ETH-BNB</a>'
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 3,
    tokenSymbol: "acsETH-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x161A623c27D20d3717ffe279889e50eEb23962c3",
    tokenSymbol: "BTC-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c" target="_blank"><span data-i18n="get">Get</span> BTC-BNB</a>'
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 2,
    tokenSymbol: "acsBTC-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x15edF148b5d43684075B77EEa866FF833a54d73c",
    tokenSymbol: "LTC-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94" target="_blank"><span data-i18n="get">Get</span> LTC-BNB</a>',
    fromBlock: 3970888
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 21,
    tokenSymbol: "acsLTC-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x55D2AE06B0904d70d091BC32608F37C5FBE375D4",
    tokenSymbol: "YFI-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e" target="_blank"><span data-i18n="get">Get</span> YFI-BNB</a>',
    fromBlock: 4528888
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 24,
    tokenSymbol: "acsYFI-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xDAC0c9b3CaccF7e76D2F238663c98fDd9D07F323",
    tokenSymbol: "ADA-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47" target="_blank"><span data-i18n="get">Get</span> ADA-BNB</a>',
    fromBlock: 4168888
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 23,
    tokenSymbol: "acsADA-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xe427a9688C0d16eA5d29DB0dcC1D6E1e61Ea9908",
    tokenSymbol: "TWT-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x4B0F1812e5Df2A09796481Ff14017e6005508003" target="_blank"><span data-i18n="get">Get</span> TWT-BNB</a>',
    fromBlock: 3710934
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 18,
    tokenSymbol: "acsTWT-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xDB335c7c4AD429A1F53971fd4644b599DC631306",
    tokenSymbol: "UNFI-BNB",
    harvesterRewardSymbol: "CAKE"
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 22,
    tokenSymbol: "acsUNFI-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0x93e2e1e384dC298bDEafaEe9751841EA211f2d42",
    tokenSymbol: "BTCST-BNB",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/BNB/0x78650B139471520656b9E7aA7A5e9276814a38e9" target="_blank"><span data-i18n="get">Get</span> BTCST-BNB</a>',
    fromBlock: 3949888
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 20,
    tokenSymbol: "acsBTCST-BNB"
  },
  tags: ["acsV1"]
}, {
  vault: {
    showFarmDeprecatedOnly: !0,
    address: "0xe9d9f54Ab89F712ABBdbb3C0F63f2D6eDAa3869c",
    tokenSymbol: "BETH-ETH",
    harvesterRewardSymbol: "CAKE",
    walletInfo: '<a class="wallet-info" href="https://acs-lp.unrekt.net/#/add/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B" target="_blank"><span data-i18n="get">Get</span> BETH-ETH</a>',
    fromBlock: 4608888
  },
  farm: {
    transactionInfo: x,
    deprecated: !0,
    master: D.acsMasterFarm,
    pid: 25,
    tokenSymbol: "acsBETH-ETH"
  },
  tags: ["acsV1"]
}];
D.masterFarms = {};
D.abis = {
  erc20: [{
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      name: "guy",
      type: "address"
    }, {
      name: "wad",
      type: "uint256"
    }],
    name: "approve",
    outputs: [{
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      name: "src",
      type: "address"
    }, {
      name: "dst",
      type: "address"
    }, {
      name: "wad",
      type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      name: "wad",
      type: "uint256"
    }],
    name: "withdraw",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
      name: "",
      type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      name: "",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      name: "dst",
      type: "address"
    }, {
      name: "wad",
      type: "uint256"
    }],
    name: "transfer",
    outputs: [{
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: !0,
    stateMutability: "payable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      name: "",
      type: "address"
    }, {
      name: "",
      type: "address"
    }],
    name: "allowance",
    outputs: [{
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      name: "src",
      type: "address"
    }, {
      indexed: !0,
      name: "guy",
      type: "address"
    }, {
      indexed: !1,
      name: "wad",
      type: "uint256"
    }],
    name: "Approval",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      name: "src",
      type: "address"
    }, {
      indexed: !0,
      name: "dst",
      type: "address"
    }, {
      indexed: !1,
      name: "wad",
      type: "uint256"
    }],
    name: "Transfer",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      name: "dst",
      type: "address"
    }, {
      indexed: !1,
      name: "wad",
      type: "uint256"
    }],
    name: "Deposit",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      name: "src",
      type: "address"
    }, {
      indexed: !1,
      name: "wad",
      type: "uint256"
    }],
    name: "Withdrawal",
    type: "event"
  }],
  uniswapV2Pair: [{
    inputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Approval",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount0",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount1",
      type: "uint256"
    }, {
      indexed: !0,
      internalType: "address",
      name: "to",
      type: "address"
    }],
    name: "Burn",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount0",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount1",
      type: "uint256"
    }],
    name: "Mint",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount0In",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount1In",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount0Out",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount1Out",
      type: "uint256"
    }, {
      indexed: !0,
      internalType: "address",
      name: "to",
      type: "address"
    }],
    name: "Swap",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "uint112",
      name: "reserve0",
      type: "uint112"
    }, {
      indexed: !1,
      internalType: "uint112",
      name: "reserve1",
      type: "uint112"
    }],
    name: "Sync",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "from",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Transfer",
    type: "event"
  }, {
    constant: !0,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }, {
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "allowance",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "approve",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "to",
      type: "address"
    }],
    name: "burn",
    outputs: [{
      internalType: "uint256",
      name: "amount0",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "amount1",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
      internalType: "uint8",
      name: "",
      type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "factory",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "getReserves",
    outputs: [{
      internalType: "uint112",
      name: "_reserve0",
      type: "uint112"
    }, {
      internalType: "uint112",
      name: "_reserve1",
      type: "uint112"
    }, {
      internalType: "uint32",
      name: "_blockTimestampLast",
      type: "uint32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token0",
      type: "address"
    }, {
      internalType: "address",
      name: "_token1",
      type: "address"
    }],
    name: "initialize",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "kLast",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "to",
      type: "address"
    }],
    name: "mint",
    outputs: [{
      internalType: "uint256",
      name: "liquidity",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "nonces",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "deadline",
      type: "uint256"
    }, {
      internalType: "uint8",
      name: "v",
      type: "uint8"
    }, {
      internalType: "bytes32",
      name: "r",
      type: "bytes32"
    }, {
      internalType: "bytes32",
      name: "s",
      type: "bytes32"
    }],
    name: "permit",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "to",
      type: "address"
    }],
    name: "skim",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "uint256",
      name: "amount0Out",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "amount1Out",
      type: "uint256"
    }, {
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      internalType: "bytes",
      name: "data",
      type: "bytes"
    }],
    name: "swap",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "token0",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "token1",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "transfer",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "from",
      type: "address"
    }, {
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }],
  controller: [{
    inputs: [{
      internalType: "address",
      name: "_governance",
      type: "address"
    }, {
      internalType: "address",
      name: "_rewards",
      type: "address"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "address",
      name: "_strategy",
      type: "address"
    }],
    name: "approveStrategy",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }, {
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "approvedStrategies",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }, {
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "converters",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "earn",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "_strategy",
      type: "address"
    }, {
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "uint256",
      name: "parts",
      type: "uint256"
    }],
    name: "getExpectedReturn",
    outputs: [{
      internalType: "uint256",
      name: "expected",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "governance",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_strategy",
      type: "address"
    }, {
      internalType: "address",
      name: "_token",
      type: "address"
    }],
    name: "inCaseStrategyTokenGetStuck",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "inCaseTokensGetStuck",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "max",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "onesplit",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "address",
      name: "_strategy",
      type: "address"
    }],
    name: "revokeStrategy",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "rewards",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_input",
      type: "address"
    }, {
      internalType: "address",
      name: "_output",
      type: "address"
    }, {
      internalType: "address",
      name: "_converter",
      type: "address"
    }],
    name: "setConverter",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_governance",
      type: "address"
    }],
    name: "setGovernance",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_onesplit",
      type: "address"
    }],
    name: "setOneSplit",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_rewards",
      type: "address"
    }],
    name: "setRewards",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "uint256",
      name: "_split",
      type: "uint256"
    }],
    name: "setSplit",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_strategist",
      type: "address"
    }],
    name: "setStrategist",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "address",
      name: "_strategy",
      type: "address"
    }],
    name: "setStrategy",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "address",
      name: "_vault",
      type: "address"
    }],
    name: "setVault",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "split",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "strategies",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "strategist",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "vaults",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "withdraw",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }],
    name: "withdrawAll",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_strategy",
      type: "address"
    }, {
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "uint256",
      name: "parts",
      type: "uint256"
    }],
    name: "yearn",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }],
  vault: [{
    inputs: [{
      internalType: "address",
      name: "_token",
      type: "address"
    }, {
      internalType: "address",
      name: "_controller",
      type: "address"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Approval",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "from",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Transfer",
    type: "event"
  }, {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      internalType: "address",
      name: "spender",
      type: "address"
    }],
    name: "allowance",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "approve",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [{
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "controller",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
      internalType: "uint8",
      name: "",
      type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "subtractedValue",
      type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "governance",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "addedValue",
      type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "max",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "min",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "token",
    outputs: [{
      internalType: "contractIERC20",
      name: "",
      type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transfer",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "balance",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "uint256",
      name: "_min",
      type: "uint256"
    }],
    name: "setMin",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_governance",
      type: "address"
    }],
    name: "setGovernance",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "_controller",
      type: "address"
    }],
    name: "setController",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "available",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "earn",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "depositAll",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "deposit",
    outputs: [],
    payable: !0,
    stateMutability: "payable",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "depositETH",
    outputs: [],
    payable: !0,
    stateMutability: "payable",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "withdrawAllETH",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "address",
      name: "reserve",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "harvest",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "uint256",
      name: "_shares",
      type: "uint256"
    }],
    name: "withdraw",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [{
      internalType: "uint256",
      name: "_shares",
      type: "uint256"
    }],
    name: "withdrawETH",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !0,
    inputs: [],
    name: "getPricePerFullShare",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "uint256",
      name: "shares",
      type: "uint256"
    }],
    name: "withdrawNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }],
  strategy: [{
    constant: !1,
    inputs: [],
    name: "harvest",
    outputs: [{
      internalType: "uint256",
      name: "harvesterRewarded",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }, {
    constant: !1,
    inputs: [],
    name: "borrowLimit",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  }],
  bVault: [{
    inputs: [{
      internalType: "contractIAuthorizer",
      name: "authorizer",
      type: "address"
    }, {
      internalType: "contractIWETH",
      name: "weth",
      type: "address"
    }, {
      internalType: "uint256",
      name: "pauseWindowDuration",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "bufferPeriodDuration",
      type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "contractIAuthorizer",
      name: "newAuthorizer",
      type: "address"
    }],
    name: "AuthorizerChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "ExternalBalanceTransfer",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "contractIFlashLoanRecipient",
      name: "recipient",
      type: "address"
    }, {
      indexed: !0,
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "feeAmount",
      type: "uint256"
    }],
    name: "FlashLoan",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "user",
      type: "address"
    }, {
      indexed: !0,
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }, {
      indexed: !1,
      internalType: "int256",
      name: "delta",
      type: "int256"
    }],
    name: "InternalBalanceChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "bool",
      name: "paused",
      type: "bool"
    }],
    name: "PausedStateChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      indexed: !0,
      internalType: "address",
      name: "liquidityProvider",
      type: "address"
    }, {
      indexed: !1,
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }, {
      indexed: !1,
      internalType: "int256[]",
      name: "deltas",
      type: "int256[]"
    }, {
      indexed: !1,
      internalType: "uint256[]",
      name: "protocolFeeAmounts",
      type: "uint256[]"
    }],
    name: "PoolBalanceChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      indexed: !0,
      internalType: "address",
      name: "assetManager",
      type: "address"
    }, {
      indexed: !0,
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }, {
      indexed: !1,
      internalType: "int256",
      name: "cashDelta",
      type: "int256"
    }, {
      indexed: !1,
      internalType: "int256",
      name: "managedDelta",
      type: "int256"
    }],
    name: "PoolBalanceManaged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      indexed: !0,
      internalType: "address",
      name: "poolAddress",
      type: "address"
    }, {
      indexed: !1,
      internalType: "enumIVault.PoolSpecialization",
      name: "specialization",
      type: "uint8"
    }],
    name: "PoolRegistered",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "relayer",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "bool",
      name: "approved",
      type: "bool"
    }],
    name: "RelayerApprovalChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      indexed: !0,
      internalType: "contractIERC20",
      name: "tokenIn",
      type: "address"
    }, {
      indexed: !0,
      internalType: "contractIERC20",
      name: "tokenOut",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amountIn",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "amountOut",
      type: "uint256"
    }],
    name: "Swap",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      indexed: !1,
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }],
    name: "TokensDeregistered",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      indexed: !1,
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }, {
      indexed: !1,
      internalType: "address[]",
      name: "assetManagers",
      type: "address[]"
    }],
    name: "TokensRegistered",
    type: "event"
  }, {
    inputs: [],
    name: "WETH",
    outputs: [{
      internalType: "contractIWETH",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "enumIVault.SwapKind",
      name: "kind",
      type: "uint8"
    }, {
      components: [{
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      }, {
        internalType: "uint256",
        name: "assetInIndex",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "assetOutIndex",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }],
      internalType: "structIVault.BatchSwapStep[]",
      name: "swaps",
      type: "tuple[]"
    }, {
      internalType: "contractIAsset[]",
      name: "assets",
      type: "address[]"
    }, {
      components: [{
        internalType: "address",
        name: "sender",
        type: "address"
      }, {
        internalType: "bool",
        name: "fromInternalBalance",
        type: "bool"
      }, {
        internalType: "addresspayable",
        name: "recipient",
        type: "address"
      }, {
        internalType: "bool",
        name: "toInternalBalance",
        type: "bool"
      }],
      internalType: "structIVault.FundManagement",
      name: "funds",
      type: "tuple"
    }, {
      internalType: "int256[]",
      name: "limits",
      type: "int256[]"
    }, {
      internalType: "uint256",
      name: "deadline",
      type: "uint256"
    }],
    name: "batchSwap",
    outputs: [{
      internalType: "int256[]",
      name: "assetDeltas",
      type: "int256[]"
    }],
    stateMutability: "payable",
    type: "function",
    payable: !0
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }],
    name: "deregisterTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "addresspayable",
      name: "recipient",
      type: "address"
    }, {
      components: [{
        internalType: "contractIAsset[]",
        name: "assets",
        type: "address[]"
      }, {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }, {
        internalType: "bool",
        name: "toInternalBalance",
        type: "bool"
      }],
      internalType: "structIVault.ExitPoolRequest",
      name: "request",
      type: "tuple"
    }],
    name: "exitPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "contractIFlashLoanRecipient",
      name: "recipient",
      type: "address"
    }, {
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "flashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes4",
      name: "selector",
      type: "bytes4"
    }],
    name: "getActionId",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getAuthorizer",
    outputs: [{
      internalType: "contractIAuthorizer",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "user",
      type: "address"
    }, {
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }],
    name: "getInternalBalance",
    outputs: [{
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "user",
      type: "address"
    }],
    name: "getNextNonce",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getPausedState",
    outputs: [{
      internalType: "bool",
      name: "paused",
      type: "bool"
    }, {
      internalType: "uint256",
      name: "pauseWindowEndTime",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "bufferPeriodEndTime",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }],
    name: "getPool",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }, {
      internalType: "enumIVault.PoolSpecialization",
      name: "",
      type: "uint8"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }],
    name: "getPoolTokenInfo",
    outputs: [{
      internalType: "uint256",
      name: "cash",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "managed",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "address",
      name: "assetManager",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }],
    name: "getPoolTokens",
    outputs: [{
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getProtocolFeesCollector",
    outputs: [{
      internalType: "contractProtocolFeesCollector",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "user",
      type: "address"
    }, {
      internalType: "address",
      name: "relayer",
      type: "address"
    }],
    name: "hasApprovedRelayer",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      components: [{
        internalType: "contractIAsset[]",
        name: "assets",
        type: "address[]"
      }, {
        internalType: "uint256[]",
        name: "maxAmountsIn",
        type: "uint256[]"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }, {
        internalType: "bool",
        name: "fromInternalBalance",
        type: "bool"
      }],
      internalType: "structIVault.JoinPoolRequest",
      name: "request",
      type: "tuple"
    }],
    name: "joinPool",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: !0
  }, {
    inputs: [{
      components: [{
        internalType: "enumIVault.PoolBalanceOpKind",
        name: "kind",
        type: "uint8"
      }, {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      }, {
        internalType: "contractIERC20",
        name: "token",
        type: "address"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }],
      internalType: "structIVault.PoolBalanceOp[]",
      name: "ops",
      type: "tuple[]"
    }],
    name: "managePoolBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      components: [{
        internalType: "enumIVault.UserBalanceOpKind",
        name: "kind",
        type: "uint8"
      }, {
        internalType: "contractIAsset",
        name: "asset",
        type: "address"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }, {
        internalType: "address",
        name: "sender",
        type: "address"
      }, {
        internalType: "addresspayable",
        name: "recipient",
        type: "address"
      }],
      internalType: "structIVault.UserBalanceOp[]",
      name: "ops",
      type: "tuple[]"
    }],
    name: "manageUserBalance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: !0
  }, {
    inputs: [{
      internalType: "enumIVault.SwapKind",
      name: "kind",
      type: "uint8"
    }, {
      components: [{
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      }, {
        internalType: "uint256",
        name: "assetInIndex",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "assetOutIndex",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }],
      internalType: "structIVault.BatchSwapStep[]",
      name: "swaps",
      type: "tuple[]"
    }, {
      internalType: "contractIAsset[]",
      name: "assets",
      type: "address[]"
    }, {
      components: [{
        internalType: "address",
        name: "sender",
        type: "address"
      }, {
        internalType: "bool",
        name: "fromInternalBalance",
        type: "bool"
      }, {
        internalType: "addresspayable",
        name: "recipient",
        type: "address"
      }, {
        internalType: "bool",
        name: "toInternalBalance",
        type: "bool"
      }],
      internalType: "structIVault.FundManagement",
      name: "funds",
      type: "tuple"
    }],
    name: "queryBatchSwap",
    outputs: [{
      internalType: "int256[]",
      name: "",
      type: "int256[]"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "enumIVault.PoolSpecialization",
      name: "specialization",
      type: "uint8"
    }],
    name: "registerPool",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }, {
      internalType: "address[]",
      name: "assetManagers",
      type: "address[]"
    }],
    name: "registerTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "contractIAuthorizer",
      name: "newAuthorizer",
      type: "address"
    }],
    name: "setAuthorizer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bool",
      name: "paused",
      type: "bool"
    }],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "relayer",
      type: "address"
    }, {
      internalType: "bool",
      name: "approved",
      type: "bool"
    }],
    name: "setRelayerApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      components: [{
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      }, {
        internalType: "enumIVault.SwapKind",
        name: "kind",
        type: "uint8"
      }, {
        internalType: "contractIAsset",
        name: "assetIn",
        type: "address"
      }, {
        internalType: "contractIAsset",
        name: "assetOut",
        type: "address"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }],
      internalType: "structIVault.SingleSwap",
      name: "singleSwap",
      type: "tuple"
    }, {
      components: [{
        internalType: "address",
        name: "sender",
        type: "address"
      }, {
        internalType: "bool",
        name: "fromInternalBalance",
        type: "bool"
      }, {
        internalType: "addresspayable",
        name: "recipient",
        type: "address"
      }, {
        internalType: "bool",
        name: "toInternalBalance",
        type: "bool"
      }],
      internalType: "structIVault.FundManagement",
      name: "funds",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "limit",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "deadline",
      type: "uint256"
    }],
    name: "swap",
    outputs: [{
      internalType: "uint256",
      name: "amountCalculated",
      type: "uint256"
    }],
    stateMutability: "payable",
    type: "function",
    payable: !0
  }, {
    stateMutability: "payable",
    type: "receive",
    payable: !0
  }],
  weightedPool: [{
    inputs: [{
      internalType: "contractIVault",
      name: "vault",
      type: "address"
    }, {
      internalType: "string",
      name: "name",
      type: "string"
    }, {
      internalType: "string",
      name: "symbol",
      type: "string"
    }, {
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }, {
      internalType: "uint256[]",
      name: "normalizedWeights",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "swapFeePercentage",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "pauseWindowDuration",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "bufferPeriodDuration",
      type: "uint256"
    }, {
      internalType: "address",
      name: "owner",
      type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Approval",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "bool",
      name: "paused",
      type: "bool"
    }],
    name: "PausedStateChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "uint256",
      name: "swapFeePercentage",
      type: "uint256"
    }],
    name: "SwapFeePercentageChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }, {
      components: [{
        internalType: "uint64",
        name: "targetPercentage",
        type: "uint64"
      }, {
        internalType: "uint64",
        name: "criticalPercentage",
        type: "uint64"
      }, {
        internalType: "uint64",
        name: "feePercentage",
        type: "uint64"
      }],
      indexed: !1,
      internalType: "structIAssetManager.PoolConfig",
      name: "target",
      type: "tuple"
    }],
    name: "TargetManagerPoolConfigChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "from",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Transfer",
    type: "event"
  }, {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      internalType: "address",
      name: "spender",
      type: "address"
    }],
    name: "allowance",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "approve",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "decimals",
    outputs: [{
      internalType: "uint8",
      name: "",
      type: "uint8"
    }],
    stateMutability: "pure",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "decreaseApproval",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes4",
      name: "selector",
      type: "bytes4"
    }],
    name: "getActionId",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getAuthorizer",
    outputs: [{
      internalType: "contractIAuthorizer",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getInvariant",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getLastInvariant",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getNormalizedWeights",
    outputs: [{
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getOwner",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getPausedState",
    outputs: [{
      internalType: "bool",
      name: "paused",
      type: "bool"
    }, {
      internalType: "uint256",
      name: "pauseWindowEndTime",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "bufferPeriodEndTime",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getPoolId",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getRate",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getSwapFeePercentage",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "getVault",
    outputs: [{
      internalType: "contractIVault",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "increaseApproval",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [],
    name: "name",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }],
    name: "nonces",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "onExitPool",
    outputs: [{
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }, {
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "onJoinPool",
    outputs: [{
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }, {
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      components: [{
        internalType: "enumIVault.SwapKind",
        name: "kind",
        type: "uint8"
      }, {
        internalType: "contractIERC20",
        name: "tokenIn",
        type: "address"
      }, {
        internalType: "contractIERC20",
        name: "tokenOut",
        type: "address"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }, {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      }, {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      }, {
        internalType: "address",
        name: "from",
        type: "address"
      }, {
        internalType: "address",
        name: "to",
        type: "address"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }],
      internalType: "structIPoolSwapStructs.SwapRequest",
      name: "request",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "balanceTokenIn",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "balanceTokenOut",
      type: "uint256"
    }],
    name: "onSwap",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "deadline",
      type: "uint256"
    }, {
      internalType: "uint8",
      name: "v",
      type: "uint8"
    }, {
      internalType: "bytes32",
      name: "r",
      type: "bytes32"
    }, {
      internalType: "bytes32",
      name: "s",
      type: "bytes32"
    }],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "queryExit",
    outputs: [{
      internalType: "uint256",
      name: "bptIn",
      type: "uint256"
    }, {
      internalType: "uint256[]",
      name: "amountsOut",
      type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "queryJoin",
    outputs: [{
      internalType: "uint256",
      name: "bptOut",
      type: "uint256"
    }, {
      internalType: "uint256[]",
      name: "amountsIn",
      type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }, {
      components: [{
        internalType: "uint64",
        name: "targetPercentage",
        type: "uint64"
      }, {
        internalType: "uint64",
        name: "criticalPercentage",
        type: "uint64"
      }, {
        internalType: "uint64",
        name: "feePercentage",
        type: "uint64"
      }],
      internalType: "structIAssetManager.PoolConfig",
      name: "poolConfig",
      type: "tuple"
    }],
    name: "setAssetManagerPoolConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bool",
      name: "paused",
      type: "bool"
    }],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "uint256",
      name: "swapFeePercentage",
      type: "uint256"
    }],
    name: "setSwapFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [],
    name: "symbol",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
    constant: !0
  }, {
    inputs: [{
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transfer",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }],
  stablePool: [{
    inputs: [{
      internalType: "contractIVault",
      name: "vault",
      type: "address"
    }, {
      internalType: "string",
      name: "name",
      type: "string"
    }, {
      internalType: "string",
      name: "symbol",
      type: "string"
    }, {
      internalType: "contractIERC20[]",
      name: "tokens",
      type: "address[]"
    }, {
      internalType: "uint256",
      name: "amplificationParameter",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "swapFeePercentage",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "pauseWindowDuration",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "bufferPeriodDuration",
      type: "uint256"
    }, {
      internalType: "address",
      name: "owner",
      type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "uint256",
      name: "startValue",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "endValue",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "startTime",
      type: "uint256"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "endTime",
      type: "uint256"
    }],
    name: "AmpUpdateStarted",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "uint256",
      name: "currentValue",
      type: "uint256"
    }],
    name: "AmpUpdateStopped",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Approval",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "bool",
      name: "paused",
      type: "bool"
    }],
    name: "PausedStateChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !1,
      internalType: "uint256",
      name: "swapFeePercentage",
      type: "uint256"
    }],
    name: "SwapFeePercentageChanged",
    type: "event"
  }, {
    anonymous: !1,
    inputs: [{
      indexed: !0,
      internalType: "address",
      name: "from",
      type: "address"
    }, {
      indexed: !0,
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      indexed: !1,
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }],
    name: "Transfer",
    type: "event"
  }, {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      internalType: "address",
      name: "spender",
      type: "address"
    }],
    name: "allowance",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "approve",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "account",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "decimals",
    outputs: [{
      internalType: "uint8",
      name: "",
      type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes4",
      name: "selector",
      type: "bytes4"
    }],
    name: "getActionId",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getAmplificationParameter",
    outputs: [{
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }, {
      internalType: "bool",
      name: "isUpdating",
      type: "bool"
    }, {
      internalType: "uint256",
      name: "precision",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getAuthorizer",
    outputs: [{
      internalType: "contractIAuthorizer",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getOwner",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getPausedState",
    outputs: [{
      internalType: "bool",
      name: "paused",
      type: "bool"
    }, {
      internalType: "uint256",
      name: "pauseWindowEndTime",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "bufferPeriodEndTime",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getPoolId",
    outputs: [{
      internalType: "bytes32",
      name: "",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getRate",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getSwapFeePercentage",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getVault",
    outputs: [{
      internalType: "contractIVault",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "addedValue",
      type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [],
    name: "name",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }],
    name: "nonces",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "onExitPool",
    outputs: [{
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }, {
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "onJoinPool",
    outputs: [{
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }, {
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      components: [{
        internalType: "enumIVault.SwapKind",
        name: "kind",
        type: "uint8"
      }, {
        internalType: "contractIERC20",
        name: "tokenIn",
        type: "address"
      }, {
        internalType: "contractIERC20",
        name: "tokenOut",
        type: "address"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }, {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      }, {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      }, {
        internalType: "address",
        name: "from",
        type: "address"
      }, {
        internalType: "address",
        name: "to",
        type: "address"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }],
      internalType: "structIPoolSwapStructs.SwapRequest",
      name: "swapRequest",
      type: "tuple"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "indexIn",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "indexOut",
      type: "uint256"
    }],
    name: "onSwap",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      components: [{
        internalType: "enumIVault.SwapKind",
        name: "kind",
        type: "uint8"
      }, {
        internalType: "contractIERC20",
        name: "tokenIn",
        type: "address"
      }, {
        internalType: "contractIERC20",
        name: "tokenOut",
        type: "address"
      }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }, {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      }, {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      }, {
        internalType: "address",
        name: "from",
        type: "address"
      }, {
        internalType: "address",
        name: "to",
        type: "address"
      }, {
        internalType: "bytes",
        name: "userData",
        type: "bytes"
      }],
      internalType: "structIPoolSwapStructs.SwapRequest",
      name: "request",
      type: "tuple"
    }, {
      internalType: "uint256",
      name: "balanceTokenIn",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "balanceTokenOut",
      type: "uint256"
    }],
    name: "onSwap",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }, {
      internalType: "address",
      name: "spender",
      type: "address"
    }, {
      internalType: "uint256",
      name: "value",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "deadline",
      type: "uint256"
    }, {
      internalType: "uint8",
      name: "v",
      type: "uint8"
    }, {
      internalType: "bytes32",
      name: "r",
      type: "bytes32"
    }, {
      internalType: "bytes32",
      name: "s",
      type: "bytes32"
    }],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "queryExit",
    outputs: [{
      internalType: "uint256",
      name: "bptIn",
      type: "uint256"
    }, {
      internalType: "uint256[]",
      name: "amountsOut",
      type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bytes32",
      name: "poolId",
      type: "bytes32"
    }, {
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256[]",
      name: "balances",
      type: "uint256[]"
    }, {
      internalType: "uint256",
      name: "lastChangeBlock",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "protocolSwapFeePercentage",
      type: "uint256"
    }, {
      internalType: "bytes",
      name: "userData",
      type: "bytes"
    }],
    name: "queryJoin",
    outputs: [{
      internalType: "uint256",
      name: "bptOut",
      type: "uint256"
    }, {
      internalType: "uint256[]",
      name: "amountsIn",
      type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "contractIERC20",
      name: "token",
      type: "address"
    }, {
      internalType: "bytes",
      name: "poolConfig",
      type: "bytes"
    }],
    name: "setAssetManagerPoolConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "bool",
      name: "paused",
      type: "bool"
    }],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "uint256",
      name: "swapFeePercentage",
      type: "uint256"
    }],
    name: "setSwapFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "uint256",
      name: "rawEndValue",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "endTime",
      type: "uint256"
    }],
    name: "startAmplificationParameterUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [],
    name: "stopAmplificationParameterUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [],
    name: "symbol",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transfer",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "sender",
      type: "address"
    }, {
      internalType: "address",
      name: "recipient",
      type: "address"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }],
  multicall: [{
    inputs: [{
      components: [{
        internalType: "address",
        name: "target",
        type: "address"
      }, {
        internalType: "bytes",
        name: "callData",
        type: "bytes"
      }],
      internalType: "struct Multicall.Call[]",
      name: "calls",
      type: "tuple[]"
    }],
    name: "aggregate",
    outputs: [{
      internalType: "uint256",
      name: "blockNumber",
      type: "uint256"
    }, {
      internalType: "bytes[]",
      name: "returnData",
      type: "bytes[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    inputs: [{
      internalType: "uint256",
      name: "blockNumber",
      type: "uint256"
    }],
    name: "getBlockHash",
    outputs: [{
      internalType: "bytes32",
      name: "blockHash",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [{
      internalType: "address",
      name: "coinbase",
      type: "address"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [{
      internalType: "uint256",
      name: "difficulty",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [{
      internalType: "uint256",
      name: "gaslimit",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [{
      internalType: "uint256",
      name: "timestamp",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [{
      internalType: "address",
      name: "addr",
      type: "address"
    }],
    name: "getEthBalance",
    outputs: [{
      internalType: "uint256",
      name: "balance",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }, {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [{
      internalType: "bytes32",
      name: "blockHash",
      type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
  }]
};

module.exports = D;
