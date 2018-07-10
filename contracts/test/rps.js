let RPS = artifacts.require('RockPaperScissors.sol');


contract('RPS', (deployer, network, accounts) => {
  let rpsRoc, rpsPaper;

  beforeEach(async () =>  {
    rpsRock = await RPS.new("rock");
    rpsPaper = await RPS.new("paper");
  });

  it('paper beats rock', async() => {
    await rpsPaper.shoot("rock", {from: web3.eth.accounts[1]});
    assert.equal(await rpsPaper.winner(), web3.eth.accounts[0]);
  });

  it('rock beats scissor', async() => {
    await rpsRock.shoot("scissors", {from: web3.eth.accounts[1]});
    assert.equal(await rpsRock.winner(), web3.eth.accounts[0]);
  });

  it('rock loses to paper', async() => {
    await rpsRock.shoot("paper", {from: web3.eth.accounts[1]});
    assert.equal(await rpsRock.winner(), web3.eth.accounts[1]);
  });

  it('rock draws rock', async() => {
    await rpsRock.shoot("rock", {from: web3.eth.accounts[1]});
    assert.equal(await rpsRock.winner(), "0x0000000000000000000000000000000000000000");
  });
});

