pragma solidity ^0.5.12;

contract Owner {
   address public owner;
   
   constructor() public {
      owner = msg.sender;
   }
   
   modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }
   
}

contract Proxy_Return_Storage is Owner{
    uint public result;
    
    function version1() external pure returns(string memory) {
        return "Proxy";
    }
    
    function SetRelay(address newVersion) public onlyOwner{
        bytes32 slot = keccak256("Random");
        assembly { sstore(slot, newVersion) }
    }  
    
    function GetRelay() public view returns(address implementation)  {
        bytes32 slot = keccak256("Random");
        assembly { implementation := sload(slot) }
    }  
    
    function () external payable {
        address implementation =GetRelay(); 
        assembly {        
            calldatacopy(0, 0, calldatasize)
            let result := 
                delegatecall(gas, implementation, 0, calldatasize, 0, 0)
            returndatacopy(0, 0, returndatasize)
            switch result
                case 0 { revert(0, returndatasize) }
                default { return(0, returndatasize) }
        }
    }
    
}
