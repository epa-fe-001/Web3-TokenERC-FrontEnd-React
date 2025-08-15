import React from 'react';
import send from '@images/send.png';
import './style.css';
import Layout from '@components/Layout';
import useWallet from '@hooks/useWallet.js';
const Task = () => {
    const {
      account,
      balance,
      connectWallet,
      isOpen,
      setIsOpen,
      isSending,
      status_send,
      to,
      amount,
      setTo,
      setAmount,
      sendToken,
      setStatusSend,
    } = useWallet();

  return (
    <Layout title='Send To Friends'>
      <div className='pt-18'>
        <div className='min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6'>
          <div className='px-4 py-6 md:px-28 md:py-8'>
            <h1 className='exo-2-400 text-1xl mb-3 md:text-3xl'>
              <span className='exo-2-700 bg-clip-text font-bold'>Send EcoShow</span> To your friends
              and try to send them to each other.
            </h1>
            <p className='exo-2-400 mt-1 text-sm leading-relaxed text-gray-600 md:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores facilis ad sequi,
              earum eos qui! Doloribus corporis repellat dolorum illo hic eveniet ipsa, deserunt
              velit consequuntur, delectus, quo nostrum eos!
            </p>
          </div>

          <div className='px-4 py-6 md:px-28 md:py-8'>
            <div className='mx-auto flex w-full flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
              <div className='flex-1 md:p-6'>
                <img src={send} alt='Your image' />
              </div>

              <div className='flex-1 p-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col space-y-2'>
                    <h1 className='exo-2-400 text-2xl'>Send To Friends</h1>
                    <h1 className='exo-2-400 text-sm text-gray-600'>
                      Send ECS token to your friends.
                    </h1>
                  </div>
                </div>
                <div className='flex items-center justify-between py-4'>
                  <div className='flex flex-1 flex-col'>
                    <h1 className='exo-2-400 text-lg'>Amount (ECS)</h1>
                  </div>
                  <div className='flex flex-1 flex-col text-right'>
                    <h1 className='exo-2-400 text-sm text-gray-600'>
                      {account && balance && (
                        <span className='text-sm text-gray-600'>
                          {parseFloat(balance).toFixed(4)} ECS
                        </span>
                      )}
                    </h1>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <input
                    type='number'
                    className='w-full rounded-lg'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='0.0001 ECS'
                  />
                </div>
                <div className='flex items-center justify-between py-4'>
                  <div className='flex flex-1 flex-col'>
                    <h1 className='exo-2-400 text-sm'>Recipient Address</h1>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <input
                    type='text'
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className='w-full rounded-lg'
                    placeholder='Enter Address'
                  />
                </div>
                <p className='text-sm'>{status_send}</p>
                <div className='flex items-end justify-end py-4'>
                  <button
                    onClick={() => sendToken(to, amount)}
                    disabled={isSending || !to || !amount}
                    className='rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50'
                  >
                    {isSending ? 'Sending...' : 'Send Token'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Task;
