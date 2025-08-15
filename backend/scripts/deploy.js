const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with:", deployer.address);

  // 1. Deploy token contract
  const Token = await hre.ethers.getContractFactory("EcoShow");
  const token = await Token.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("EcoShow deployed at:", tokenAddress);

  // 2. Deploy faucet contract, passing token address
  const Faucet = await hre.ethers.getContractFactory("EcoShowsFaucet");
  const faucet = await Faucet.deploy(tokenAddress);
  await faucet.waitForDeployment();
  const faucetAddress = await faucet.getAddress();
  console.log("Faucet deployed at:", faucetAddress);

  // 3. Deploy SendEcoShow contract using same token
  const SendEcoShow = await hre.ethers.getContractFactory("SendEcoShow");
  const sendEcoShow = await SendEcoShow.deploy(tokenAddress);
  await sendEcoShow.waitForDeployment();
  const sendEcoShowAddress = await sendEcoShow.getAddress();
  console.log("SendEcoShow deployed at:", sendEcoShowAddress);

  // 4. Fund faucet with tokens
  const amountToFund = hre.ethers.parseUnits("10", 18); // 10 ECS
  const tx = await token.transfer(faucetAddress, amountToFund);
  await tx.wait();
  console.log(`Transferred ${amountToFund} ECS to faucet`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
