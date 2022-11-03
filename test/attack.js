const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, waffle } = require("hardhat");

describe("Attack prey contract", () => {
  it("Should change the owner of the prey contract", async () => {
    const helper = await ethers.getContractFactory("Helper");
    const Helper = await helper.deploy();
    await Helper.deployed();
    console.log("Helper contract address: ", Helper.address);

    const prey = await ethers.getContractFactory("Prey");
    const Prey = await prey.deploy(Helper.address);
    await Prey.deployed();
    console.log("Prey contract address: ", Prey.address);

    const attacker = await ethers.getContractFactory("Attack");
    const Attacker = await attacker.deploy(Prey.address);
    await Attacker.deployed();
    console.log("Attacker contract address: ", Attacker.address);

    let tx = await Attacker.attack();
    await tx.wait();

    expect(await Prey.owner()).to.equal(Attacker.address)
  });
});