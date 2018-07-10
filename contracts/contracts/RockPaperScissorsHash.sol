pragma solidity ^0.4.24;

contract RockPaperScissorsHash {
  address public player1;
  address public player2;
  bytes32 public decisionHash;
  mapping(address => Decision) decisions;
  address public winner;
  
  enum Decision {
    None,
    Rock,
    Paper,
    Scissors
  }

  constructor(bytes32 _hash) {
    player1 = msg.sender;
    decisionHash = _hash;
  }
  
  function shoot(bytes32 _decision) public {
    player2 = msg.sender;
    decisions[msg.sender] = decisionBytesToEnum(_decision);
    winner = getWinner();
  }

  function reveal(bytes32 _decision, bytes32 _secret) public {
    require(decisionHash == keccak256(abi.encodePacked(_decision, _secret)));
    decisions[player1] = decisionBytesToEnum(_decision);
    winner = getWinner();
  }

  function decisionBytesToEnum(bytes32 _decision) internal returns (Decision) {
    if (_decision == bytes32("rock")) { return Decision.Rock; }
    if (_decision == bytes32("paper")) { return Decision.Paper; }
    if (_decision == bytes32("scissors")) { return Decision.Scissors; }
    revert();
  }
  
  function getWinner() internal returns (address) {
    Decision p1decision = decisions[player1];
    Decision p2decision = decisions[player2];

    if (p1decision == p2decision) {
      return address(0);
    }

    // Player One Wins Scenarios
    if (p1decision == Decision.Rock && p2decision == Decision.Scissors) {
      return player1;
    }

    if (p1decision == Decision.Paper && p2decision == Decision.Rock) {
      return player1;
    }

    if (p1decision == Decision.Scissors && p2decision == Decision.Paper) {
      return player1;
    }
    
    return player2;
  }

  function hashValues(bytes32 _v1, bytes32 _v2) view public returns (bytes32) {
    return keccak256(abi.encodePacked(_v1, _v2));
  }
}
