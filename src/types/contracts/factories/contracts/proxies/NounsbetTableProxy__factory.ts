/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NounsbetTableProxy,
  NounsbetTableProxyInterface,
} from "../../../contracts/proxies/NounsbetTableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f7a38038062000f7a8339810160408190526200003491620004e8565b82828282816200006660017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6200061b565b60008051602062000f338339815191521462000086576200008662000670565b6200009482826000620000fb565b50620000c4905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61046200061b565b60008051602062000f1383398151915214620000e457620000e462000670565b620000ef8262000138565b5050505050506200069c565b620001068362000193565b600082511180620001145750805b156200013357620001318383620001d560201b620002601760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200016362000204565b604080516001600160a01b03928316815291841660208301520160405180910390a162000190816200023d565b50565b6200019e81620002f2565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001fd838360405180606001604052806027815260200162000f536027913962000395565b9392505050565b60006200022e60008051602062000f1383398151915260001b6200047b60201b620002081760201c565b546001600160a01b0316919050565b6001600160a01b038116620002a85760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002d160008051602062000f1383398151915260001b6200047b60201b620002081760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b62000308816200047e60201b6200028c1760201c565b6200036c5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200029f565b80620002d160008051602062000f3383398151915260001b6200047b60201b620002081760201c565b60606001600160a01b0384163b620003ff5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016200029f565b600080856001600160a01b0316856040516200041c9190620005c8565b600060405180830381855af49150503d806000811462000459576040519150601f19603f3d011682016040523d82523d6000602084013e6200045e565b606091505b509092509050620004718282866200048d565b9695505050505050565b90565b6001600160a01b03163b151590565b606083156200049e575081620001fd565b825115620004af5782518084602001fd5b8160405162461bcd60e51b81526004016200029f9190620005e6565b80516001600160a01b0381168114620004e357600080fd5b919050565b600080600060608486031215620004fe57600080fd5b6200050984620004cb565b92506200051960208501620004cb565b60408501519092506001600160401b03808211156200053757600080fd5b818601915086601f8301126200054c57600080fd5b81518181111562000561576200056162000686565b604051601f8201601f19908116603f011681019083821181831017156200058c576200058c62000686565b81604052828152896020848701011115620005a657600080fd5b620005b983602083016020880162000641565b80955050505050509250925092565b60008251620005dc81846020870162000641565b9190910192915050565b60208152600082518060208401526200060781604085016020870162000641565b601f01601f19169190910160400192915050565b6000828210156200063c57634e487b7160e01b600052601160045260246000fd5b500390565b60005b838110156200065e57818101518382015260200162000644565b83811115620001315750506000910152565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61086780620006ac6000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b6100803660046106f1565b610118565b61005b61009336600461070c565b61015f565b3480156100a457600080fd5b506100ad6101d0565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e43660046106f1565b61020b565b3480156100f557600080fd5b506100ad610235565b61010661029b565b61011661011161033a565b610344565b565b610120610368565b6001600160a01b0316336001600160a01b03161415610157576101548160405180602001604052806000815250600061039b565b50565b6101546100fe565b610167610368565b6001600160a01b0316336001600160a01b031614156101c8576101c38383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506001925061039b915050565b505050565b6101c36100fe565b60006101da610368565b6001600160a01b0316336001600160a01b03161415610200576101fb61033a565b905090565b6102086100fe565b90565b610213610368565b6001600160a01b0316336001600160a01b0316141561015757610154816103c6565b600061023f610368565b6001600160a01b0316336001600160a01b03161415610200576101fb610368565b6060610285838360405180606001604052806027815260200161080b6027913961041a565b9392505050565b6001600160a01b03163b151590565b6102a3610368565b6001600160a01b0316336001600160a01b031614156101165760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101fb6104f7565b3660008037600080366000845af43d6000803e808015610363573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b6103a48361051f565b6000825111806103b15750805b156101c3576103c08383610260565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103ef610368565b604080516001600160a01b03928316815291841660208301520160405180910390a16101548161055f565b60606001600160a01b0384163b6104825760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610331565b600080856001600160a01b03168560405161049d919061078f565b600060405180830381855af49150503d80600081146104d8576040519150601f19603f3d011682016040523d82523d6000602084013e6104dd565b606091505b50915091506104ed828286610608565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61038c565b61052881610641565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105c45760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608401610331565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b60608315610617575081610285565b8251156106275782518084602001fd5b8160405162461bcd60e51b815260040161033191906107ab565b6001600160a01b0381163b6106ae5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610331565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105e7565b80356001600160a01b03811681146106ec57600080fd5b919050565b60006020828403121561070357600080fd5b610285826106d5565b60008060006040848603121561072157600080fd5b61072a846106d5565b9250602084013567ffffffffffffffff8082111561074757600080fd5b818601915086601f83011261075b57600080fd5b81358181111561076a57600080fd5b87602082850101111561077c57600080fd5b6020830194508093505050509250925092565b600082516107a18184602087016107de565b9190910192915050565b60208152600082518060208401526107ca8160408501602087016107de565b601f01601f19169190910160400192915050565b60005b838110156107f95781810151838201526020016107e1565b838111156103c0575050600091015256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202db7c7ce724e3051ec16db18bedcd510d0efdb479c731dd37df73a893c6dc9aa64736f6c63430008060033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type NounsbetTableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NounsbetTableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NounsbetTableProxy__factory extends ContractFactory {
  constructor(...args: NounsbetTableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    logic: string,
    admin: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsbetTableProxy> {
    return super.deploy(
      logic,
      admin,
      data,
      overrides || {}
    ) as Promise<NounsbetTableProxy>;
  }
  override getDeployTransaction(
    logic: string,
    admin: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(logic, admin, data, overrides || {});
  }
  override attach(address: string): NounsbetTableProxy {
    return super.attach(address) as NounsbetTableProxy;
  }
  override connect(signer: Signer): NounsbetTableProxy__factory {
    return super.connect(signer) as NounsbetTableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NounsbetTableProxyInterface {
    return new utils.Interface(_abi) as NounsbetTableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsbetTableProxy {
    return new Contract(address, _abi, signerOrProvider) as NounsbetTableProxy;
  }
}
