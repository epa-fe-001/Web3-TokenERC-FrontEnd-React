import React from 'react';
import okx_wallet from '@images/okx.png';
import bitget_wallet from '@images/bitget.png';
import Zenith from '@images/Zennith.png';
import R2 from '@images/R2.png';
import Layout from '@components/Layout';
const Ecosystem = () => {
  return (
    <Layout title='Ecosystem'>
      <div className='pt-18'>
        <div className='min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6'>
          <div className='flex flex-col items-center justify-center px-4 py-6 text-center md:px-28 md:py-8'>
            <h1 className='exo-2-700 text-1xl mb-3 font-bold md:text-3xl'>
              <span className='exo-2-700 bg-clip-text font-bold'>Explore</span> The Ecoshow
              Ecosystem
            </h1>

            <p className='exo-2-400 mt-1 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores facilis ad sequi,
              earum eos qui! Doloribus corporis repellat dolorum illo hic eveniet ipsa, deserunt
              velit consequuntur, delectus, quo nostrum eos!
            </p>
          </div>
          <div className='px-4 py-6 md:px-28 md:py-8'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <div className='space-y-3 rounded-4xl bg-white p-6 shadow'>
                <img
                  src={okx_wallet}
                  width={50}
                  height={50}
                  className='rounded-full'
                  alt='okx_wallet'
                />
                <h2 className='text-lg font-bold text-gray-800'>OKX Wallet</h2>
                <p className='text-md exo-2-400 text-gray-600'>
                  The Crypto Wallet for Everyting Onchain
                </p>

                <button
                  disabled
                  className='mt-14 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200'
                >
                  Comming Soon
                </button>
              </div>
              <div className='space-y-3 rounded-4xl bg-white p-6 shadow'>
                <img
                  src={bitget_wallet}
                  width={50}
                  height={50}
                  className='rounded-full'
                  alt='okx_wallet'
                />
                <h2 className='text-lg font-bold text-gray-800'>Bitget Wallet</h2>
                <p className='text-md exo-2-400 text-gray-600'>
                  Bitget Wallet - Your Web3 Tranding Wallet of The Futures
                </p>

                <button
                  disabled
                  className='mt-14 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200'
                >
                  Comming Soon
                </button>
              </div>
              <div className='space-y-3 rounded-4xl bg-white p-6 shadow'>
                <img
                  src={Zenith}
                  width={50}
                  height={50}
                  className='rounded-full'
                  alt='okx_wallet'
                />
                <h2 className='text-lg font-bold text-gray-800'>Zenith</h2>
                <p className='text-md exo-2-400 text-gray-600'>
                  The Beaconof DeFi - Secure, Fast, and User-Friendly Decentralized Exchange
                </p>

                <button
                  disabled
                  className='mt-14 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200'
                >
                  Comming Soon
                </button>
              </div>
              <div className='space-y-3 rounded-4xl bg-white p-6 shadow'>
                <img src={R2} width={50} height={50} className='rounded-full' alt='okx_wallet' />
                <h2 className='text-lg font-bold text-gray-800'>R2</h2>
                <p className='text-md exo-2-400 text-gray-600'>
                  The Beaconof DeFi - Secure, Fast, and User-Friendly Decentralized Exchange
                </p>

                <button
                  disabled
                  className='mt-14 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200'
                >
                  Comming Soon
                </button>
              </div>
              <div className='space-y-3 rounded-4xl bg-white p-6 shadow'>
                <img
                  src={Zenith}
                  width={50}
                  height={50}
                  className='rounded-full'
                  alt='okx_wallet'
                />
                <h2 className='text-lg font-bold text-gray-800'>EcoShow Domain</h2>
                <p className='text-md exo-2-400 text-gray-600'>
                  The Beaconof DeFi - Secure, Fast, and User-Friendly Decentralized Exchange
                </p>

                <button disabled className='mt-14 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200'>
                  Comming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ecosystem;
