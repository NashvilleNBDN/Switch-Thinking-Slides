pragma solidity ^0.4.24;

contract RockPaperScissors {
  address public player1;
  address public player2;
  mapping(address => Decision) decisions;
  address public winner;
  
  enum Decision {
    Rock,
    Paper,
    Scissor
  }

  constructor() {
    player1 = msg.sender;
  }
  
  function decideWinner() internal returns (address) {
    Decision p1decision = decisions[player1];
    Decision p2decision = decisions[player2];

    if (p1decision == p2decision) {
      return address(0);
    }

    if (p1decision == Decision.Rock && p2decision == Decision.Paper) {
      return player2;
    }
    if (p1decision == Decision.Rock && p2decision == Decision.Scissor) {
      return player1;
    }
  }
}
