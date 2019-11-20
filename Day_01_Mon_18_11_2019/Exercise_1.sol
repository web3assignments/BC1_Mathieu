pragma solidity >=0.5.0 <0.7.0;
/*
This contract is written by Mathieu Gatsonides student at the Hague university of applied sciences
It was made to understand some of the basic functionality and try something out

*/


contract Exercise_1 {
    
    string public welcome = "Hello World!";
    
    uint32 public a = 15;
    uint32 public b = 7;
    uint32 public c = 0;
    
    /// This setups an intial amount of the contract. It is supplied during the creation of the contract.    
    constructor() public payable
    {}
    
    //adds tokens to the contract, only need to make a function that is payable.
    function payToContract() public payable {}
    
    // This function returns the current amount of tokens in the contract
    function getContractBalance() public view returns(uint256 ret)
    {
        return address(this).balance;
    }
    
    function verdubbel() public returns (uint32)
    {
        //trying out some basic math
        a=a*2;
        return a;
    }
    
    function samen() public returns (uint32) {
        //trying out some basic math
        c=a+b;
        return c;
    }
    
    //Fallback function
    function () external payable
    {}
    
    //Transfer tokens to the address that has interacted with this function
    //Using address payable because that adds .transfer and .sender
    function RequestFromContract() public {
        msg.sender.transfer(0.1 ether);
        
    }
}
