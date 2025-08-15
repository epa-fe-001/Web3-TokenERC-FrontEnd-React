# 🚀 Web3 Token ERC FrontEnd React

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/node-%3E%3D14-green)](https://nodejs.org/)

---

## 📝 Deskripsi

Aplikasi frontend berbasis Web3 untuk token ERC-20, dibangun dengan **Solidity** dan **React.js** menggunakan **Vite** sebagai build tool.  
Mendukung interaksi dengan smart contract ERC-20 dan integrasi dengan wallet MetaMask.

---

## ✨ Fitur Utama

- Integrasi penuh dengan smart contract ERC-20 token  
- Kirim token EchoShow ECS ERC-20 secara mudah  
- Dukungan wallet Web3, khususnya ekstensi MetaMask di browser  
- Claim Faucet token EchoShow ECS dengan gas fee ETH di jaringan Sepolia Testnet  
- Faucet ETH Sepolia Testnet:  
  [https://cloud.google.com/application/web3/faucet/ethereum/sepolia](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)

---

## ⚙️ Instalasi

### Persyaratan

- Node.js versi 14 atau lebih baru  
  Download: [https://nodejs.org/](https://nodejs.org/)

### Langkah Instalasi

```bash
# Clone repository
git clone https://github.com/epaweb3/Web3-TokenERC-FrontEnd-React.git
cd Web3-TokenERC-FrontEnd-React

# Install dependencies
npm install

#Run Application
frontend
npm run dev
backend
npm hardhat node

#Compile Backend
npx hardhat compile --force

#Backend Deploy Token ERC-20
npx hardat run folder_deploy/script_deploy.js --network sepoila

#Setting ENV
SEPOLIA_RPC_URL=YOUR_RPC_URL_INFURA_OR_ALCHEMY
PRIVATE_KEY=YOUR_ADRESS_PRIVATE_KEY_

```


## 🧪 Testing Application

Berikut langkah-langkah pengujian aplikasi agar kamu bisa mencoba fitur utama dengan lancar.

---

### 1. Login dengan Connect Wallet

Saat pertama kali membuka website, kamu harus menghubungkan wallet kamu dengan aplikasi.

- Klik tombol **Connect Wallet**  
- Verifikasi menggunakan ekstensi wallet MetaMask di browser kamu

<p align="center">
  <img src="https://github.com/epa-fe-001/Web3-TokenERC-FrontEnd-React/blob/main/front-testnet/src/images/connect_metamask.PNG" alt="Connect Wallet MetaMask" width="400" />
</p>

---

### 2. Klaim Faucet Token EchoShow Symbol ECS

Setelah berhasil login, kamu dapat mengklaim token dari Faucet.

- Klik tombol **Claim Faucet**  
- Verifikasi transaksi pada wallet MetaMask  
- Gas fee menggunakan ETH di jaringan Sepolia Testnet

<p align="center">
  <img src="https://github.com/epa-fe-001/Web3-TokenERC-FrontEnd-React/blob/main/front-testnet/src/images/claim_faucet.PNG" alt="Claim Faucet" width="400" />
</p>

---

### 3. Kirim Token EchoShow Symbol ECS ke Teman

Kamu dapat mengirim token EchoShow Symbol ECS ke alamat teman dengan mudah melalui aplikasi ini.

---

**Langkah-langkah:**

1. Masukkan alamat wallet teman yang ingin kamu kirimi token pada kolom input yang tersedia.  
2. Klik tombol **Send** untuk memulai pengiriman token.  
3. Konfirmasi transaksi melalui wallet MetaMask kamu.

---

**Konfirmasi Transaksi**

<p align="center">
  <img src="https://github.com/epa-fe-001/Web3-TokenERC-FrontEnd-React/blob/main/front-testnet/src/images/03.PNG" alt="Konfirmasi Transaksi MetaMask" width="400" />
</p>

---

**Riwayat Transaksi Wallet**

<p align="center">
  <img src="https://github.com/epa-fe-001/Web3-TokenERC-FrontEnd-React/blob/main/front-testnet/src/images/05.PNG" alt="Riwayat Transaksi Wallet" width="400" />
</p>

---

**Token Berhasil Dikirim**

<p align="center">
  <img src="https://github.com/epa-fe-001/Web3-TokenERC-FrontEnd-React/blob/main/front-testnet/src/images/04.PNG" alt="Token Berhasil Dikirim" width="400" />
</p>

---

**Detail Transaksi di Blockchain**

- Link transaksi di Sepolia Etherscan:  
  [https://sepolia.etherscan.io/tx/0x0a4a1dfac72bf736506906b48887ed4c46d602b8ecdb481f7ab2863cdcaca95b](https://sepolia.etherscan.io/tx/0x0a4a1dfac72bf736506906b48887ed4c46d602b8ecdb481f7ab2863cdcaca95b)

<p align="center">
  <img src="https://github.com/epa-fe-001/Web3-TokenERC-FrontEnd-React/blob/main/front-testnet/src/images/06.PNG" alt="Detail Transaksi di Blockchain" width="400" />
</p>

---

### 4. Ecosystem Token EchoShow Symbol ECS

Berikut adalah gambaran ekosistem token EchoShow Symbol (ECS) yang mencakup fitur dan interaksi utama dalam aplikasi.

<p align="center">
  <img src="https://github.com/epa-fe-001/Web3-TokenERC-FrontEnd-React/blob/main/front-testnet/src/images/07.PNG" alt="Ecosystem Token EchoShow Symbol ECS" width="400" />
</p>

---
> **Catatan:**  
> Pastikan alamat wallet teman sudah benar dan wallet kamu terhubung ke jaringan Sepolia Testnet agar transaksi berhasil.