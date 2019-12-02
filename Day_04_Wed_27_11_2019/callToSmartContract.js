/*
Web3.js is an api that can interact with the Ethereum Blockchain.
This is a test script to learn about interactions.
The script is written by Mathieu Gatsonides student at the Hague university
used sources:
https://web3js.readthedocs.io/en/v1.2.4/                                                       for web3 documentation
https://www.youtube.com/watch?v=PoRJizFvM7s                                                    for async js (callbacks, promises & Async await)
https://github.com/web3examples/ethereum/blob/master/web3js/subscribe.js                       for subscribing to events
https://github.com/web3examples/ethereum/blob/master/web3js/call_ropsten.js                    for calling a method.
https://www.youtube.com/watch?v=CX2QOE0FcEo&list=PLS5SEs8ZftgXlCGXNfzKdq7nGBcIaVOdN&index=6    for web3.js events

*/

var Web3 = require('web3');
var web3 = new Web3('https://ropsten.infura.io');
console.log('web3 version = ' + web3.version);
web3.eth.getBlockNumber().then('Blocknumber = ' + console.log);

const tipHoldAndDistributeABI = [{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "add",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "name": "Log",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "bool",
      "name": "transferHappen",
      "type": "bool"
    }],
    "name": "Transferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [{
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
      }
    ],
    "name": "createStaffMember",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "payToContract",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "transferToStaff",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "amountStillNeeded",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "contractBalance",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllStaff",
    "outputs": [{
      "internalType": "address payable[]",
      "name": "",
      "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "staffMemberAddresses",
    "outputs": [{
      "internalType": "address payable",
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];


const tipHoldAndDistributeAddress = "0x9105396C954C3b7f242d9667e88f13F0FeDD8DB1";
const tipHoldAndDistributeContract = new web3.eth.Contract(tipHoldAndDistributeABI, tipHoldAndDistributeAddress);

//console.log(tipHoldAndDistributeContract);
async function f() {
  //Read only so we can use the .call method.
  var balance = await tipHoldAndDistributeContract.methods.contractBalance().call();
  console.log('balance = ' + balance);

  //console.log(`ContractBalance shows ${Web3.utils.fromWei(balance)} ether`);
}

function listEvents() {
  tipHoldAndDistributeContract.events.allEvents().on('data', function(event) {
    console.log(event);
  });
}

function listPastEvents() {           //This function logs all events to the console.
  tipHoldAndDistributeContract.getPastEvents("allEvents", {
      fromBlock: 0,
      toBlock: 'latest'
    }) //, function(error, events){console.log(events);}) //Callback is optional.
    .then(function(events) {
      console.log('These are all smart contract events \n' + JSON.stringify(events));
    });
}

f();
listPastEvents();
