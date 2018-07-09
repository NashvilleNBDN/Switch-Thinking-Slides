pragma solidity ^0.4.24;

contract RockPaperScissors {
  address public player1;
  address public player2;
  address public winner;
  
  enum Decision {
    Rock,
    Paper,
    Scissor
  }

  constructor() {
    player1 = msg.sender;
  }

  function pick() {
  }
}
