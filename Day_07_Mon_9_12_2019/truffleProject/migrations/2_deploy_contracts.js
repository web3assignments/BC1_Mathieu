var HelloWorld = artifacts.require("HelloWorld");
var HelloWorld2 = artifacts.require("HelloWorld2");

var TipHoldAndDistribute = artifacts.require("tipHoldAndDistribute");
var YoutubeViews = artifacts.require("YoutubeViews");

module.exports = async function(deployer) {
    deployer.deploy(HelloWorld);
    deployer.deploy(TipHoldAndDistribute);
    deployer.deploy(YoutubeViews);
    Hello = await HelloWorld.deployed();
    await deployer.deploy(HelloWorld2, Hello.address); // supply address
    Hello2 = await HelloWorld2.deployed();
    TestContract = await TipHoldAndDistribute.deployed();
    //Views = await YoutubeViews.deployed();
    //console.log(`Views gangnam Style: ${Views.viewsCount}`);

    console.log(`HelloWorld is at address:  ${Hello.address}`);
    console.log(`Message from HelloWorld:   ${await Hello.welcome()}`)
    console.log(`HelloWorld2 is at address: ${Hello2.address}`);
    console.log(`HelloWorld2 links to:      ${await Hello2.OtherContract()}`);
    console.log(`Message from HelloWorld2:  ${await Hello2.Message()}`)
};
