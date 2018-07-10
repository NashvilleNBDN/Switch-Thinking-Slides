var RockPaperScissors = artifacts.require("./RockPaperScissors.sol");
var Lottery = artifacts.require('Lottery.sol');

module.exports = function(deployer) {
  deployer.deploy(RockPaperScissors, "paper");
  deployer.deploy(Lottery, .2e18, 5);
};
