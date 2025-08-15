import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import faucetAbi from '../abis/faucetAbi.json';


const tokenAbi = ['function balanceOf(address account) view returns (uint256)'];

const FAUCET_ADDRESS = import.meta.env.VITE_TOKEN_FAUCET;
const TOKEN_ADDRESS = import.meta.env.VITE_TOKEN_ADDRESS;

console.log('✅ Token Address:', FAUCET_ADDRESS);
console.log('✅ Token Address:', TOKEN_ADDRESS);


export default function useFaucet(account) {
  const [isClaiming, setIsClaiming] = useState(false);
  const [status, setStatus] = useState('');
  const [faucetBalance, setFaucetBalance] = useState(null);
  const [canClaim, setCanClaim] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    checkFaucetBalance();
    if (account) checkCooldown(account);
  }, [account]);

  

  const checkFaucetBalance = async () => {
    try {
      if (!window.ethereum) throw new Error('MetaMask not found');
      const provider = new ethers.BrowserProvider(window.ethereum);
      const token = new ethers.Contract(TOKEN_ADDRESS, tokenAbi, provider);
      const balance = await token.balanceOf(FAUCET_ADDRESS);
      const formatted = ethers.formatUnits(balance, 18);
      setFaucetBalance(formatted);
    } catch (err) {
      console.error('❌ Failed to fetch faucet balance:', err);
      setFaucetBalance('Error');
    }
  };

  const checkCooldown = async (userAddress) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const faucet = new ethers.Contract(FAUCET_ADDRESS, faucetAbi, provider);
      const lastClaim = await faucet.lastClaimed(userAddress);
      const lastTime = Number(lastClaim);
      const now = Math.floor(Date.now() / 1000);

      const diff = now - lastTime;
      const remaining = 86400 - diff; // 24 jam = 86400 detik

      if (parseFloat(faucetBalance) === 0) {
        setStatus('❌ Faucet is empty.');
        return;
      }

      if (lastTime === 0 || diff >= 86400) {
        setCanClaim(true);
        setTimeRemaining(null);
      } else {
        setCanClaim(false);
        setTimeRemaining(remaining);
      }

    } catch (err) {
      console.error('❌ Failed to check cooldown:', err);
      setCanClaim(false);
    }
  };

  const claimFaucet = async () => {
    try {
      if (!window.ethereum) throw new Error('MetaMask not found');

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const faucet = new ethers.Contract(FAUCET_ADDRESS, faucetAbi, signer);

      setIsClaiming(true);
      const tx = await faucet.claim();
      await tx.wait();

      setStatus('✅ Claim successful!');
      checkFaucetBalance();
      checkCooldown(account); // Refresh cooldown info
    } catch (err) {
      console.error('❌ Claim failed:', err);
      setStatus(`❌ Claim failed: ${err.reason || err.message}`);
    } finally {
      setIsClaiming(false);
    }
  };

  

  return {
    isClaiming,
    status,
    faucetBalance,
    claimFaucet,
    canClaim,
    timeRemaining,
  };
}
