pragma solidity ^0.4.24;

contract Lottery {
  address[] public participants;
  uint256 public durationInDays;
  uint256 public entryFee; // in wei
  uint256 public closingTime;

  event Winner(address winner, uint256 amount);

  constructor(uint256 _entryFee, uint256 _durationInDays) {
    entryFee = _entryFee;
    durationInDays = _durationInDays;
    closingTime = now + durationInDays * 1 days;
  }

  function participate() payable public {
    require(msg.value == entryFee);
    participants.push(msg.sender);
  }

  function selectWinner() public {
    //require(now > closingTime);
    uint256 numOfParticipants = participants.length;
    bytes32 blockHash = blockhash(block.number - 1);
    uint256 winner = uint32(blockHash) % numOfParticipants;
    emit Winner(participants[winner], address(this).balance);
    participants[winner].transfer(address(this).balance);
    closingTime = now + durationInDays * 1 days;
  }


  function() payable {
    participate();
  }
}
