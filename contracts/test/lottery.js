let Lottery = artifacts.require('Lottery');


contract('lottery', (deployer, networks, accounts) => {
  let lottery;
  beforeEach(async() => {
    lottery = await Lottery.new(.5e18, 0); // .5 ether, 0 days
  });


  it('should pick random winner', async () => {
    await lottery.participate({value: .5e18});
    await lottery.participate({value: .5e18, from: web3.eth.accounts[1]});
    await lottery.participate({value: .5e18, from: web3.eth.accounts[2]});
    
    let tx = await lottery.selectWinner();
    let winner1 = tx.logs[0].args.winner;
    tx = await lottery.selectWinner();
    let winner2 = tx.logs[0].args.winner;
    console.log(winner1, winner2);
    assert(winner1 !== winner2); //course they can equal sometimes
  });
});
