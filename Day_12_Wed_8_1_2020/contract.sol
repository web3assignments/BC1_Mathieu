pragma solidity >=0.4.22 <0.5.13;

/*
    This code has been written by Mathieu Gatsonides, student at THUAS.

    I would like to create a contract that customers of a restaurant can tip to.
    The tip will be distributed/sent to the restaurant's staff (2 fixed addresses in this example)
    after a certain amount of tokens has been earned.

*/

/// @title A contract to manage tips.
/// @author Mathieu G.
/// @notice You can use this contract to store customer tips until a certain threshold has been reached. After being reached it can be sent to employee's

contract tipHoldAndDistribute
{
/// @author Mathieu G.
/// @notice manage tips

    event Log(string message, uint add, uint balance);
    event Transferred(bool transferHappen);

/// @param AMOUNT_NEEDED the nessecary amount before the contract tokenbalance can be sent to employees/staff
    uint constant AMOUNT_NEEDED = 5000 wei;

    struct staffMember
    {
        string name;
        uint level;
    }

    mapping (address => staffMember) staffMemberStructs;

/// @param staffMemberAddresses stores all addresses of the staff members the contract needs to send tokens
    address payable[] public staffMemberAddresses;

/// @param _name Name of the to be created employee
/// @param _level Level of the to be created employee
    function createStaffMember(string memory _name, uint _level) public
    {
        staffMemberStructs[msg.sender].name = _name;
        staffMemberStructs[msg.sender].level = _level;
        staffMemberAddresses.push(msg.sender);
    }
    
/// @return level of the member    
    function checkLevel() public view returns (uint _level)
    {
        return staffMemberStructs[msg.sender].level;
    }
    
    
/// @return name of the member.    
    function checkName() public view returns (string memory _name)
    {
        return staffMemberStructs[msg.sender].name;
    }


/// @return Data array of all staff members.
    function getAllStaff() public view returns (address payable[] memory)
    {
        return staffMemberAddresses;
    }


/// @notice shows how many tokens are in the contract
/// @dev I used the address.balance() function for this
/// @return Current contract eth balance in wei
    function contractBalance() public view returns(uint)
    {
        return address(this).balance;
    }



/// @notice Shows how many tokens are still needed for next payment?
/// @return Current amount of tokens nessecary before tokens can be sent.
    function amountStillNeeded() public view returns(uint)
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

/// @dev Tokens need to be paid to the contract, but I don't want that zero tokens are payable
/// @notice Function to deposit tokens to the contract
    function payToContract() public payable
    {
        emit Log("In payToContract", msg.value, address(this).balance);
        uint paid = msg.value;
        require(paid > 0, "No money added to the contract.");
    }


/// @dev Tokens need to be sent, they can only be sent when a certain amount is reached.
/// @notice Function to transfer tokens from contract to staff
    function transferToStaff() public
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
