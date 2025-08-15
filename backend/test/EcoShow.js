const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EcoShow", function () {
  it("Should deploy and have correct name", async function () {
    // Mendapatkan kontrak EcoShow
    const EcoShow = await ethers.getContractFactory("EcoShow");
    
    // Men-deploy kontrak EcoShow
    const ecoShow = await EcoShow.deploy();

    // Menunggu agar transaksi deployment selesai
    await ecoShow.deployed();

    // Verifikasi bahwa kontrak dideploy dengan benar
    expect(await ecoShow.name()).to.equal("EcoShow");
    expect(await ecoShow.symbol()).to.equal("ECS");
  });
});
