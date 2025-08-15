// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract EcoShowsFaucet {
    IERC20 public token;
    address public owner;
    uint256 public faucetAmount = 0.02 ether; // 0.02 ECS
    uint256 public cooldown = 1 days; // 24 jam

    mapping(address => uint256) public lastClaimed;

    constructor(address _token) {
        token = IERC20(_token);
        owner = msg.sender;
    }

    function claim() external {
        uint256 balance = token.balanceOf(address(this));
        require(balance >= faucetAmount, "Faucet empty");

        require(
            block.timestamp - lastClaimed[msg.sender] >= cooldown,
            "You must wait 24 hours between claims"
        );

        lastClaimed[msg.sender] = block.timestamp;
        token.transfer(msg.sender, faucetAmount);
    }

    function setAmount(uint256 amount) external {
        require(msg.sender == owner, "Only owner");
        faucetAmount = amount;
    }

    function withdrawTokens(address to, uint256 amount) external {
        require(msg.sender == owner, "Only owner");
        token.transfer(to, amount);
    }

    // Optional: ubah waktu tunggu 24 jam
    function setCooldown(uint256 _cooldown) external {
        require(msg.sender == owner, "Only owner");
        cooldown = _cooldown;
    }
}
