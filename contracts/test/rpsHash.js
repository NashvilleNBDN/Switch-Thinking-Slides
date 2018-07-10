let RPS = artifacts.require('RockPaperScissorsHash.sol');


contract('RPS', (deployer, network, accounts) => {
  let rpsRoc, rpsPaper;

  beforeEach(async () =>  {
    let rps = await RPS.new('fds');
    paperHash = await rps.hashValues("paper", "secret");
    rockHash = await rps.hashValues("rock", "secret");
    rpsRock = await RPS.new(rockHash);
    rpsPaper = await RPS.new(paperHash);
  });

  it('paper beats rock', async() => {
    await rpsPaper.shoot("rock", {from: web3.eth.accounts[1]});
    await rpsPaper.reveal("paper", "secret");
    assert.equal(await rpsPaper.winner(), web3.eth.accounts[0]);
  });

  it('rock beats scissor', async() => {
    await rpsRock.shoot("scissors", {from: web3.eth.accounts[1]});
    await rpsRock.reveal("rock", "secret");
    assert.equal(await rpsRock.winner(), web3.eth.accounts[0]);
  });

  it('rock loses to paper', async() => {
    await rpsRock.shoot("paper", {from: web3.eth.accounts[1]});
    await rpsRock.reveal("rock", "secret");
    assert.equal(await rpsRock.winner(), web3.eth.accounts[1]);
  });

  it('rock draws rock', async() => {
    await rpsRock.shoot("rock", {from: web3.eth.accounts[1]});
    await rpsRock.reveal("rock", "secret");
    assert.equal(await rpsRock.winner(), "0x0000000000000000000000000000000000000000");
  });
});

