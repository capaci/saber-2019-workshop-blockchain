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

    event Finish();
    event Vote(address user, uint8 answer);

    // Create a new voting with two options
    constructor(string memory _question, string memory _answer0, string memory _answer1) public {
        owner = msg.sender;
        question = _question;
        answers.push(_answer0);
        answers.push(_answer1);
    }

    // Finish a voting
    function finish() public {
        require(msg.sender == owner, "Only owner can finish the voting");
        opened = false;
        emit Finish();
    }

    // Give a vote for an answer
    function vote(uint8 _answer) public {
        require(opened == true, "Voting is closed");
        require(_answer == 0 || _answer == 1, "Invalid option!");

        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You already voted");
        sender.voted = true;
        sender.vote = _answer;
        total++;
        counter[_answer]++;

        emit Vote(msg.sender, _answer);
    }

    function winningAnswer() public view returns (int _winningAnswer) {
        uint a = counter[0];
        uint b = counter[1];

        if (a > b) return 0;
        if (b > a) return 1;
        return -1;
    }
}
