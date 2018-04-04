var Users = artifacts.require("./Users.sol");
var ZeitgeistToken = artifacts.require("./ZeitgeistToken.sol");
var MyCrowdsale = artifacts.require("./MyCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ZeitgeistToken)
    .then(function() {
      const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 // one second in the future
      const endTime = startTime + (86400 * 20) // 20 days
      const rate = new web3.BigNumber(1000)
      const wallet = accounts[0]
      return deployer.deploy(MyCrowdsale, rate, wallet, ZeitgeistToken.address)
      .then(function () {
        ZeitgeistToken.at(ZeitgeistToken.address).mint("0x9A67e9790DE2551BBD668d98FB2A0b2419d07373", 10000000000000000000)
        .then(function () {
          ZeitgeistToken.at(ZeitgeistToken.address).transferOwnership(MyCrowdsale.address)
        });
      })
    });
};
