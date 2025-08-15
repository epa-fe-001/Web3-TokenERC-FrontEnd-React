// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract SendEcoShow {
    address public client;
    IERC20 public token;

    constructor(address _token) {
        client = msg.sender;
        token = IERC20(_token);
    }

    function sendToFriend(address friend, uint256 amount) external {
        require(token.transferFrom(msg.sender, friend, amount), "Transfer failed");
    }
}
