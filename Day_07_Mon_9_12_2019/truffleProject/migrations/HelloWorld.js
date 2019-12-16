{
  "contractName": "HelloWorld",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "welcome",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.12+commit.7709ece9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"welcome\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Z/blockchain/web3examples/ethereum/truffle_examples/HelloWorld/contracts/HelloWorld.sol\":\"HelloWorld\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Z/blockchain/web3examples/ethereum/truffle_examples/HelloWorld/contracts/HelloWorld.sol\":{\"keccak256\":\"0x38178ce835040c4a313aee7a10722416fd7429a40cf352c1085f722a65b89bc3\",\"urls\":[\"bzz-raw://8a1cecd9c80412d634b207ee1eed555c08b6bcdef1c337e2fe363f3667086e3f\",\"dweb:/ipfs/QmVVpD8oM6ECAzxHpuJfiMCjUvp25AfZHy8yeRfk19947U\"]}},\"version\":1}",
  "bytecode": "0x60806040526040518060400160405280600c81526020017f48656c6c6f20576f726c642100000000000000000000000000000000000000008152506000908051906020019061004f929190610062565b5034801561005c57600080fd5b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b610186806101166000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b627cf3b14610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101495780601f1061011e57610100808354040283529160200191610149565b820191906000526020600020905b81548152906001019060200180831161012c57829003601f168201915b50505050508156fea265627a7a72315820ff831192bc3f6cfb96627feb6fd92d7e7d294f041cbf0b7f58c158d27079b39164736f6c634300050c0032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b627cf3b14610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101495780601f1061011e57610100808354040283529160200191610149565b820191906000526020600020905b81548152906001019060200180831161012c57829003601f168201915b50505050508156fea265627a7a72315820ff831192bc3f6cfb96627feb6fd92d7e7d294f041cbf0b7f58c158d27079b39164736f6c634300050c0032",
  "sourceMap": "28:67:0:-;;;53:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;28:67;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:67:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "28:67:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:67:0;;;;;;;;;;;;;;;;;;;53:38;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;53:38:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.12;\r\n\r\ncontract HelloWorld {\r\n  string public welcome = \"Hello World!\";\r\n}\r\n",
  "sourcePath": "Z:\\blockchain\\web3examples\\ethereum\\truffle_examples\\HelloWorld\\contracts\\HelloWorld.sol",
  "ast": {
    "absolutePath": "/Z/blockchain/web3examples/ethereum/truffle_examples/HelloWorld/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        5
      ]
    },
    "id": 6,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".12"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5,
        "linearizedBaseContracts": [
          5
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "welcome",
            "nodeType": "VariableDeclaration",
            "scope": 5,
            "src": "53:38:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "53:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "48656c6c6f20576f726c6421",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "77:14:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0",
                "typeString": "literal_string \"Hello World!\""
              },
              "value": "Hello World!"
            },
            "visibility": "public"
          }
        ],
        "scope": 6,
        "src": "28:67:0"
      }
    ],
    "src": "0:97:0"
  },
  "legacyAST": {
    "absolutePath": "/Z/blockchain/web3examples/ethereum/truffle_examples/HelloWorld/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        5
      ]
    },
    "id": 6,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".12"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5,
        "linearizedBaseContracts": [
          5
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "welcome",
            "nodeType": "VariableDeclaration",
            "scope": 5,
            "src": "53:38:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "53:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "48656c6c6f20576f726c6421",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "77:14:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0",
                "typeString": "literal_string \"Hello World!\""
              },
              "value": "Hello World!"
            },
            "visibility": "public"
          }
        ],
        "scope": 6,
        "src": "28:67:0"
      }
    ],
    "src": "0:97:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.12+commit.7709ece9.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x4a07a27eF50c2bA0df2e8635A3Ef43E16a391343",
      "transactionHash": "0xfe15bb914285f07fc8cabd624ef8cc8c884f3eaf0b8d1963ae6728862d237a21"
    }
  },
  "schemaVersion": "3.0.19",
  "updatedAt": "2019-12-06T15:36:58.318Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
