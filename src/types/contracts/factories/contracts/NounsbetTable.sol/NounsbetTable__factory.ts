/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NounsbetTable,
  NounsbetTableInterface,
} from "../../../contracts/NounsbetTable.sol/NounsbetTable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "URI_SETTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600054610100900460ff166200002f5760005460ff161562000039565b62000039620000de565b620000a15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015620000c4576000805461ffff19166101011790555b8015620000d7576000805461ff00191690555b506200010b565b6000620000f630620000fc60201b62000b3c1760201c565b15905090565b6001600160a01b03163b151590565b612a8b806200011b6000396000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c8063731133e9116100f9578063bd85b03911610097578063e63ab1e911610071578063e63ab1e9146103df578063e985e9c5146103f4578063f242432a14610430578063f5298aca1461044357600080fd5b8063bd85b03914610396578063d5391393146103b7578063d547741f146103cc57600080fd5b80638456cb59116100d35780638456cb591461036057806391d1485414610368578063a217fddf1461037b578063a22cb4651461038357600080fd5b8063731133e91461031e5780637f345710146103315780638129fc1c1461035857600080fd5b80632f2ff15d116101665780634e1273f4116101405780634e1273f4146102bd5780634f558e79146102dd5780635c975abb146103005780636b20c4541461030b57600080fd5b80632f2ff15d1461028f57806336568abe146102a25780633f4ba83a146102b557600080fd5b80630e89341c116101a25780630e89341c146102265780631f7fdffa14610246578063248a9ca3146102595780632eb2c2d61461027c57600080fd5b8062fdd58e146101c857806301ffc9a7146101ee57806302fe530514610211575b600080fd5b6101db6101d6366004612149565b610456565b6040519081526020015b60405180910390f35b6102016101fc366004612306565b6104ef565b60405190151581526020016101e5565b61022461021f366004612340565b610500565b005b6102396102343660046122ca565b610538565b6040516101e59190612550565b610224610254366004612075565b6105cc565b6101db6102673660046122ca565b60009081526097602052604090206001015490565b61022461028a366004611ef5565b6105f8565b61022461029d3660046122e3565b610688565b6102246102b03660046122e3565b6106b3565b61022461072d565b6102d06102cb3660046121fa565b610751565b6040516101e5919061250f565b6102016102eb3660046122ca565b600090815261012d6020526040902054151590565b60c95460ff16610201565b610224610319366004612002565b61087a565b61022461032c3660046121a6565b6108bd565b6101db7f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c81565b6102246108e2565b610224610a37565b6102016103763660046122e3565b610a58565b6101db600081565b61022461039136600461210d565b610a83565b6101db6103a43660046122ca565b600090815261012d602052604090205490565b6101db600080516020612a3683398151915281565b6102246103da3660046122e3565b610a8e565b6101db600080516020612a1683398151915281565b610201610402366004611ec2565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b61022461043e366004611f9e565b610ab4565b610224610451366004612173565b610af9565b60006001600160a01b0383166104c75760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006104fa82610b4b565b92915050565b7f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c61052b8133610b70565b61053482610bd4565b5050565b60606067805461054790612896565b80601f016020809104026020016040519081016040528092919081815260200182805461057390612896565b80156105c05780601f10610595576101008083540402835291602001916105c0565b820191906000526020600020905b8154815290600101906020018083116105a357829003601f168201915b50505050509050919050565b600080516020612a368339815191526105e58133610b70565b6105f185858585610be7565b5050505050565b6001600160a01b03851633148061061457506106148533610402565b61067b5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016104be565b6105f18585858585610d42565b6000828152609760205260409020600101546106a48133610b70565b6106ae8383610eef565b505050565b6001600160a01b03811633146107235760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104be565b6105348282610f75565b600080516020612a168339815191526107468133610b70565b61074e610fdc565b50565b606081518351146107b65760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016104be565b600083516001600160401b038111156107d1576107d1612944565b6040519080825280602002602001820160405280156107fa578160200160208202803683370190505b50905060005b84518110156108725761084585828151811061081e5761081e61292e565b60200260200101518583815181106108385761083861292e565b6020026020010151610456565b8282815181106108575761085761292e565b602090810291909101015261086b816128fd565b9050610800565b509392505050565b6001600160a01b03831633148061089657506108968333610402565b6108b25760405162461bcd60e51b81526004016104be906125ef565b6106ae83838361106f565b600080516020612a368339815191526108d68133610b70565b6105f185858585611200565b600054610100900460ff166108fd5760005460ff1615610901565b303b155b6109645760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104be565b600054610100900460ff16158015610986576000805461ffff19166101011790555b61099e604051806020016040528060008152506112d8565b6109a6611308565b6109ae611331565b6109b6611308565b6109be611308565b6109c9600033610eef565b6109f37f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c33610eef565b610a0b600080516020612a1683398151915233610eef565b610a23600080516020612a3683398151915233610eef565b801561074e576000805461ff001916905550565b600080516020612a16833981519152610a508133610b70565b61074e611360565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6105343383836113db565b600082815260976020526040902060010154610aaa8133610b70565b6106ae8383610f75565b6001600160a01b038516331480610ad05750610ad08533610402565b610aec5760405162461bcd60e51b81526004016104be906125ef565b6105f185858585856114bc565b6001600160a01b038316331480610b155750610b158333610402565b610b315760405162461bcd60e51b81526004016104be906125ef565b6106ae8383836115dd565b6001600160a01b03163b151590565b60006001600160e01b03198216637965db0b60e01b14806104fa57506104fa826116e2565b610b7a8282610a58565b61053457610b92816001600160a01b03166014611732565b610b9d836020611732565b604051602001610bae9291906123f7565b60408051601f198184030181529082905262461bcd60e51b82526104be91600401612550565b8051610534906067906020840190611d19565b6001600160a01b038416610c0d5760405162461bcd60e51b81526004016104be9061279d565b8151835114610c2e5760405162461bcd60e51b81526004016104be90612755565b33610c3e816000878787876118d4565b60005b8451811015610cda57838181518110610c5c57610c5c61292e565b602002602001015160656000878481518110610c7a57610c7a61292e565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254610cc29190612801565b90915550819050610cd2816128fd565b915050610c41565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610d2b929190612522565b60405180910390a46105f181600087878787611928565b8151835114610d635760405162461bcd60e51b81526004016104be90612755565b6001600160a01b038416610d895760405162461bcd60e51b81526004016104be90612638565b33610d988187878787876118d4565b60005b8451811015610e81576000858281518110610db857610db861292e565b602002602001015190506000858381518110610dd657610dd661292e565b60209081029190910181015160008481526065835260408082206001600160a01b038e168352909352919091205490915081811015610e275760405162461bcd60e51b81526004016104be906126c0565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610e66908490612801565b9250508190555050505080610e7a906128fd565b9050610d9b565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610ed1929190612522565b60405180910390a4610ee7818787878787611928565b505050505050565b610ef98282610a58565b6105345760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610f313390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610f7f8282610a58565b156105345760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60c95460ff166110255760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016104be565b60c9805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0383166110955760405162461bcd60e51b81526004016104be9061267d565b80518251146110b65760405162461bcd60e51b81526004016104be90612755565b60003390506110d9818560008686604051806020016040528060008152506118d4565b60005b83518110156111a15760008482815181106110f9576110f961292e565b6020026020010151905060008483815181106111175761111761292e565b60209081029190910181015160008481526065835260408082206001600160a01b038c1683529093529190912054909150818110156111685760405162461bcd60e51b81526004016104be906125ab565b60009283526065602090815260408085206001600160a01b038b1686529091529092209103905580611199816128fd565b9150506110dc565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516111f2929190612522565b60405180910390a450505050565b6001600160a01b0384166112265760405162461bcd60e51b81526004016104be9061279d565b336112468160008761123788611a93565b61124088611a93565b876118d4565b60008481526065602090815260408083206001600160a01b038916845290915281208054859290611278908490612801565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46105f181600087878787611ade565b600054610100900460ff166112ff5760405162461bcd60e51b81526004016104be9061270a565b61074e81611ba8565b600054610100900460ff1661132f5760405162461bcd60e51b81526004016104be9061270a565b565b600054610100900460ff166113585760405162461bcd60e51b81526004016104be9061270a565b61132f611bd8565b60c95460ff16156113a65760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104be565b60c9805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110523390565b816001600160a01b0316836001600160a01b0316141561144f5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016104be565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166114e25760405162461bcd60e51b81526004016104be90612638565b336114f281878761123788611a93565b60008481526065602090815260408083206001600160a01b038a168452909152902054838110156115355760405162461bcd60e51b81526004016104be906126c0565b60008581526065602090815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290611574908490612801565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46115d4828888888888611ade565b50505050505050565b6001600160a01b0383166116035760405162461bcd60e51b81526004016104be9061267d565b336116328185600061161487611a93565b61161d87611a93565b604051806020016040528060008152506118d4565b60008381526065602090815260408083206001600160a01b0388168452909152902054828110156116755760405162461bcd60e51b81526004016104be906125ab565b60008481526065602090815260408083206001600160a01b03898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006001600160e01b03198216636cdb3d1360e11b148061171357506001600160e01b031982166303a24d0760e21b145b806104fa57506301ffc9a760e01b6001600160e01b03198316146104fa565b60606000611741836002612819565b61174c906002612801565b6001600160401b0381111561176357611763612944565b6040519080825280601f01601f19166020018201604052801561178d576020820181803683370190505b509050600360fc1b816000815181106117a8576117a861292e565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106117d7576117d761292e565b60200101906001600160f81b031916908160001a90535060006117fb846002612819565b611806906001612801565b90505b600181111561187e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061183a5761183a61292e565b1a60f81b8282815181106118505761185061292e565b60200101906001600160f81b031916908160001a90535060049490941c936118778161287f565b9050611809565b5083156118cd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104be565b9392505050565b60c95460ff161561191a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104be565b610ee7868686868686611c0b565b6001600160a01b0384163b15610ee75760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061196c908990899088908890889060040161246c565b602060405180830381600087803b15801561198657600080fd5b505af19250505080156119b6575060408051601f3d908101601f191682019092526119b391810190612323565b60015b611a63576119c261295a565b806308c379a014156119fc57506119d7612976565b806119e257506119fe565b8060405162461bcd60e51b81526004016104be9190612550565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016104be565b6001600160e01b0319811663bc197c8160e01b146115d45760405162461bcd60e51b81526004016104be90612563565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611acd57611acd61292e565b602090810291909101015292915050565b6001600160a01b0384163b15610ee75760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190611b2290899089908890889088906004016124ca565b602060405180830381600087803b158015611b3c57600080fd5b505af1925050508015611b6c575060408051601f3d908101601f19168201909252611b6991810190612323565b60015b611b78576119c261295a565b6001600160e01b0319811663f23a6e6160e01b146115d45760405162461bcd60e51b81526004016104be90612563565b600054610100900460ff16611bcf5760405162461bcd60e51b81526004016104be9061270a565b61074e81610bd4565b600054610100900460ff16611bff5760405162461bcd60e51b81526004016104be9061270a565b60c9805460ff19169055565b6001600160a01b038516611c935760005b8351811015611c9157828181518110611c3757611c3761292e565b602002602001015161012d6000868481518110611c5657611c5661292e565b602002602001015181526020019081526020016000206000828254611c7b9190612801565b90915550611c8a9050816128fd565b9050611c1c565b505b6001600160a01b038416610ee75760005b83518110156115d457828181518110611cbf57611cbf61292e565b602002602001015161012d6000868481518110611cde57611cde61292e565b602002602001015181526020019081526020016000206000828254611d039190612838565b90915550611d129050816128fd565b9050611ca4565b828054611d2590612896565b90600052602060002090601f016020900481019282611d475760008555611d8d565b82601f10611d6057805160ff1916838001178555611d8d565b82800160010185558215611d8d579182015b82811115611d8d578251825591602001919060010190611d72565b50611d99929150611d9d565b5090565b5b80821115611d995760008155600101611d9e565b60006001600160401b03831115611dcb57611dcb612944565b604051611de2601f8501601f1916602001826128d1565b809150838152848484011115611df757600080fd5b83836020830137600060208583010152509392505050565b80356001600160a01b0381168114611e2657600080fd5b919050565b600082601f830112611e3c57600080fd5b81356020611e49826127de565b604051611e5682826128d1565b8381528281019150858301600585901b87018401881015611e7657600080fd5b60005b85811015611e9557813584529284019290840190600101611e79565b5090979650505050505050565b600082601f830112611eb357600080fd5b6118cd83833560208501611db2565b60008060408385031215611ed557600080fd5b611ede83611e0f565b9150611eec60208401611e0f565b90509250929050565b600080600080600060a08688031215611f0d57600080fd5b611f1686611e0f565b9450611f2460208701611e0f565b935060408601356001600160401b0380821115611f4057600080fd5b611f4c89838a01611e2b565b94506060880135915080821115611f6257600080fd5b611f6e89838a01611e2b565b93506080880135915080821115611f8457600080fd5b50611f9188828901611ea2565b9150509295509295909350565b600080600080600060a08688031215611fb657600080fd5b611fbf86611e0f565b9450611fcd60208701611e0f565b9350604086013592506060860135915060808601356001600160401b03811115611ff657600080fd5b611f9188828901611ea2565b60008060006060848603121561201757600080fd5b61202084611e0f565b925060208401356001600160401b038082111561203c57600080fd5b61204887838801611e2b565b9350604086013591508082111561205e57600080fd5b5061206b86828701611e2b565b9150509250925092565b6000806000806080858703121561208b57600080fd5b61209485611e0f565b935060208501356001600160401b03808211156120b057600080fd5b6120bc88838901611e2b565b945060408701359150808211156120d257600080fd5b6120de88838901611e2b565b935060608701359150808211156120f457600080fd5b5061210187828801611ea2565b91505092959194509250565b6000806040838503121561212057600080fd5b61212983611e0f565b91506020830135801515811461213e57600080fd5b809150509250929050565b6000806040838503121561215c57600080fd5b61216583611e0f565b946020939093013593505050565b60008060006060848603121561218857600080fd5b61219184611e0f565b95602085013595506040909401359392505050565b600080600080608085870312156121bc57600080fd5b6121c585611e0f565b9350602085013592506040850135915060608501356001600160401b038111156121ee57600080fd5b61210187828801611ea2565b6000806040838503121561220d57600080fd5b82356001600160401b038082111561222457600080fd5b818501915085601f83011261223857600080fd5b81356020612245826127de565b60405161225282826128d1565b8381528281019150858301600585901b870184018b101561227257600080fd5b600096505b8487101561229c5761228881611e0f565b835260019690960195918301918301612277565b50965050860135925050808211156122b357600080fd5b506122c085828601611e2b565b9150509250929050565b6000602082840312156122dc57600080fd5b5035919050565b600080604083850312156122f657600080fd5b82359150611eec60208401611e0f565b60006020828403121561231857600080fd5b81356118cd816129ff565b60006020828403121561233557600080fd5b81516118cd816129ff565b60006020828403121561235257600080fd5b81356001600160401b0381111561236857600080fd5b8201601f8101841361237957600080fd5b61238884823560208401611db2565b949350505050565b600081518084526020808501945080840160005b838110156123c0578151875295820195908201906001016123a4565b509495945050505050565b600081518084526123e381602086016020860161284f565b601f01601f19169290920160200192915050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161242f81601785016020880161284f565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161246081602884016020880161284f565b01602801949350505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061249890830186612390565b82810360608401526124aa8186612390565b905082810360808401526124be81856123cb565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090612504908301846123cb565b979650505050505050565b6020815260006118cd6020830184612390565b6040815260006125356040830185612390565b82810360208401526125478185612390565b95945050505050565b6020815260006118cd60208301846123cb565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60006001600160401b038211156127f7576127f7612944565b5060051b60200190565b6000821982111561281457612814612918565b500190565b600081600019048311821515161561283357612833612918565b500290565b60008282101561284a5761284a612918565b500390565b60005b8381101561286a578181015183820152602001612852565b83811115612879576000848401525b50505050565b60008161288e5761288e612918565b506000190190565b600181811c908216806128aa57607f821691505b602082108114156128cb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f191681016001600160401b03811182821017156128f6576128f6612944565b6040525050565b600060001982141561291157612911612918565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d11156129735760046000803e5060005160e01c5b90565b600060443d10156129845790565b6040516003193d81016004833e81513d6001600160401b0381602484011181841117156129b357505050505090565b82850191508151818111156129cb5750505050505090565b843d87010160208285010111156129e55750505050505090565b6129f4602082860101876128d1565b509095945050505050565b6001600160e01b03198116811461074e57600080fdfe65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a2646970667358221220d43087dbbb820872177e8f649f2f0c675e5d9837759974eddcbbe88d846982ea64736f6c63430008060033";

type NounsbetTableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NounsbetTableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NounsbetTable__factory extends ContractFactory {
  constructor(...args: NounsbetTableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsbetTable> {
    return super.deploy(overrides || {}) as Promise<NounsbetTable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NounsbetTable {
    return super.attach(address) as NounsbetTable;
  }
  override connect(signer: Signer): NounsbetTable__factory {
    return super.connect(signer) as NounsbetTable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NounsbetTableInterface {
    return new utils.Interface(_abi) as NounsbetTableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsbetTable {
    return new Contract(address, _abi, signerOrProvider) as NounsbetTable;
  }
}