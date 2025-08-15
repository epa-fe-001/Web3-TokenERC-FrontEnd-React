// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EcoShow is ERC20 {
    constructor() ERC20("EcoShows", "ECS") {
        // Optional: Mint tokens to the deployer on deployment
        _mint(msg.sender, 1000 * 10 ** 18);  // 1000 tokens dengan desimal 18
    }
}
