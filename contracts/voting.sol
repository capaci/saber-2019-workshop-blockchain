pragma solidity ^0.5.12;

contract Voting {

    struct Voter {
        bool voted;
        uint8 vote;
    }
    mapping(address => Voter) public voters;

    bool public opened = true;
    address public owner;

    string public question;
    string[] public answers;

    uint256[] public counter = [0, 0];
    uint256 public total = 0;

    // Create a new voting with two options
    constructor(string memory _question, string memory _answer0, string memory _answer1) public {
    }

    // Finish a voting
    function finish() public {
    }

    // Give a vote for an answer
    function vote(uint8 _answer) public {
    }

    function winningAnswer() public view returns (int _winningAnswer) {
    }
}
