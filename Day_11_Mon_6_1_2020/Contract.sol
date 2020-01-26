pragma solidity ^0.5.3;

/*  
    This code has been written by Mathieu Gatsonides, student at THUAS.
    
    I would like to create a contract that customers of a restaurant can tip to.
    The tip will be distributed/sent to the restaurant's staff (2 fixed addresses in this example)
    after a certain amount of tokens has been earned.
    
    
    I ran into a buffer underflow, changed the calculation a bit to fix that.
*/


contract Owner {
   address public owner;
   
   constructor() public {
      owner = msg.sender;
   }
   
   modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }
   
   modifier onlyBy(address _account)
    {
        require(
            msg.sender == _account,
            "Sender not authorized."
        );
        // Do not forget the "_;"! It will
        // be replaced by the actual function
        // body when the modifier is used.
        _;
    }
   
}


contract tipHoldAndDistribute
{
    event Log(string message, uint add, uint balance);
    event Transferred(bool transferHappen);
    
    uint constant AMOUNT_NEEDED = 5000 wei;
    
    struct staffMember
    {
        string name;
        uint level;
    }
    
    mapping (address => staffMember) staffMemberStructs;
    address payable[] public staffMemberAddresses;
    
    function createStaffMember(string memory _name, uint _level) onlyOwner
    {
        staffMemberStructs[msg.sender].name = _name;
        staffMemberStructs[msg.sender].level = _level;
        staffMemberAddresses.push(msg.sender);
    }
    
    function getAllStaff() onlyOwner external view returns (address payable[] memory)
    {
        return staffMemberAddresses;
    }
    
    //How many tokens are in the contract?
    //I can use the address.balance() function for this
    function contractBalance() onlyOwner view returns(uint)
    {
        return address(this).balance;
    }
    
    
    //How many tokens are still needed for next payment?
    function amountStillNeeded() onlyOwner view returns(uint)
    {
        if((AMOUNT_NEEDED < contractBalance()))
        {
            return 0;
        }
        else
        {
            return (AMOUNT_NEEDED - address(this).balance);
        }
    }
    
    //Tokens need to be paid to the contract, but I don't want that zero tokens are payable
    function payToContract() onlyOwner payable
    {
        emit Log("In payToContract", msg.value, address(this).balance);
        uint paid = msg.value;
        require(paid > 0, "No money added to the contract.");
    }
    
    //Tokens need to be sent, they can only be sent when a certain amount is reached.
    function transferToStaff() onlyOwner
    {
        require(amountStillNeeded() == 0, "No money is sent");
        
        uint amountPerStaffMember = (contractBalance()/staffMemberAddresses.length);
            
        for(uint i; i < staffMemberAddresses.length; i++)
        {
            staffMemberAddresses[i].transfer(amountPerStaffMember);
        }
        emit Transferred(true);
    }
}
