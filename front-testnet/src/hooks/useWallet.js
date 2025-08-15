import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const TOKEN_ADDRESS = import.meta.env.VITE_TOKEN_ADDRESS;

const TOKEN_ABI = [
  'function balanceOf(address account) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function transfer(address to, uint256 amount) returns (bool)',
];

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * useWallet
 *
 * A React hook to connect to a user's Ethereum wallet using the
 * Metamask browser extension.
 *
 * @returns {object} An object with the following properties:
 *  - `account`: The currently connected Ethereum account as a string.
 *  - `balance`: The current balance of the user's token as a string.
 *  - `connectWallet`: A function to connect to the user's Ethereum wallet.
/*******  28d0e006-b08d-42fa-98a8-b455d4bacba9  *******/ export default function useWallet() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status_send, setStatusSend] = useState('');
  const [to, setTo] = useState('');
   const [amount, setAmount] = useState('');

  const fetchBalance = async (provider, userAddress) => {
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Fetches the token balance of the given user address.
     *
     * @param {ethers.providers.Provider} provider - The Ethereum provider to use.
     * @param {string} userAddress - The Ethereum address to fetch the balance for.
     */
    /*******  1af66c33-9939-4f2a-a20c-7af4151f7edf  *******/ try {
      const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
      const [rawBalance, decimals] = await Promise.all([
        token.balanceOf(userAddress),
        token.decimals(),
      ]);
      const formatted = ethers.formatUnits(rawBalance, decimals);
      setBalance(formatted);
    } catch (err) {
      console.error('Failed to fetch token balance:', err);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert('Install Metamask');

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      if (accounts.length > 0) {
        const userAddress = accounts[0];
        setAccount(userAddress);
        localStorage.setItem('wallet', userAddress); // optional
        await fetchBalance(provider, userAddress);
      }
    } catch (err) {
      console.error('Error connecting wallet:', err);
    }
  };

  const sendToken = async (to, amount) => {
    try {
        console.log('🧪 Sending to:', to, amount);
      if (!window.ethereum) throw new Error('MetaMask not installed');
      if (!ethers.isAddress(to)) throw new Error('Invalid recipient address');
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);

      const decimals = await token.decimals();
      const parsedAmount = ethers.parseUnits(amount.toString(), decimals);

      setIsSending(true);
      setStatusSend('⏳ Sending transaction...');
      const tx = await token.transfer(to, parsedAmount);
      await tx.wait();

      setStatusSend(`✅ Sent ${amount} ECS to ${to}`);
    } catch (err) {
      console.error('❌ Send failed:', err);
      setStatusSend(`❌ Error: ${err.message || err}`);
    } finally {
      setIsSending(false);
    }
  };

  // Auto-connect on page load if wallet previously connected
  useEffect(() => {
    async function autoConnect() {
      if (window.ethereum && window.ethereum.selectedAddress) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const userAddress = window.ethereum.selectedAddress;
        setAccount(userAddress);
        await fetchBalance(provider, userAddress);
      }
    }

    autoConnect();

    // Optional: Listen to account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length === 0) {
          setAccount(null);
          setBalance(null);
        } else {
          const provider = new ethers.BrowserProvider(window.ethereum);
          setAccount(accounts[0]);
          await fetchBalance(provider, accounts[0]);
        }
      });
    }

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, []);

  return {
    account,
    balance,
    connectWallet,
    isOpen,
    setIsOpen,
    sendToken,
    isSending,
    to,
    status_send,
    amount,
    setTo,
    setAmount,
    setStatusSend
  };
}
