pragma solidity >=0.4.22 <0.5.13;

import "remix_tests.sol";
import "ToBeTested.sol";


contract testContract {
   
    tipHoldAndDistribute tip;


    function beforeEach() public {
        tip = new tipHoldAndDistribute();
        //tip.payToContract.value(100)();
    }
    
    
    function testContractBalance()  public{
      Assert.equal(uint(tip.contractBalance()), uint(0), "Balance not 0");
    }
    
    
    function testAmountStillNeeded() public{
      Assert.equal(uint(tip.amountStillNeeded()), uint(5000), "amountStillNeeded is not equal to 5000");
    }
    
    
    function testCreateStaffMember()  public{
      tip.createStaffMember("tester", 5);
      
      //string memory error = tip.toString(msg.sender);
      address payable[] memory staffMemberAddresses = tip.getAllStaff();
      
      Assert.equal(staffMemberAddresses[0], address(this), "error");
    }
    
    
    function testStaffLevel() public{
        tip.createStaffMember("tester", 5);
        Assert.equal(tip.checkLevel(), 5, "level is not correct");
    }
    
    
    function testStaffName() public{
        tip.createStaffMember("tester", 5);
        Assert.equal(tip.checkName(), "tester", "name is not correct");
    }
}
