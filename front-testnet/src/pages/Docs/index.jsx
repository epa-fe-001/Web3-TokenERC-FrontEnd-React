import React, { useState } from 'react';
import Layout from '@components/Layout';
const Docs = () => {
  const tabs = ['Faucet', 'Send', 'Leaderboard'];
  const [activeTab, setActiveTab] = useState('Overview');

  const tabContent = {
    Faucet: (
      <div>
        <h2 className='exo-2-400 mb-2 text-xl font-bold'>Docs Claim Faucet</h2>
        <p className='exo-2-400 text-gray-600'>Cooming Soon</p>
      </div>
    ),
    Send: (
      <div>
        <h2 className='exo-2-400 mb-2 text-xl font-bold'>Docs Send To EcoShow Tokens</h2>
        <p className='exo-2-400 text-gray-600'>Cooming Soon</p>
      </div>
    ),
    Leaderboard: (
      <div>
        <h2 className='exo-2-400 mb-2 text-xl font-bold'>Blockchain Transaction</h2>
        <p className='exo-2-400 text-gray-600'>Cooming Soon</p>
      </div>
    ),
  };
  return (
    <>
      <Layout title='Documentation'>
        <div className='pt-18'>
          <div className='min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6'>
            <div className='px-4 py-6 md:px-28 md:py-8'>
              <h1 className='exo-2-700 text-1xl mb-3 md:text-3xl'>
                Documentation of use of the EcoShow platform
              </h1>
              <p className='exo-2-400 mt-1 text-sm leading-relaxed text-gray-600 md:text-lg'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores facilis ad sequi,
                consequuntur, delectus, quo nostrum eos!
              </p>
            </div>
            <div className='px-4 py-4 md:px-28 md:py-8'>
              <div className='mx-auto w-full'>
                {/* Tab Buttons */}
                <div className='flex space-x-4 border-b border-gray-200'>
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-sm font-medium transition duration-200 ${
                        activeTab === tab
                          ? 'border-b-2 border-blue-600 text-blue-600'
                          : 'text-gray-500 hover:text-blue-500'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className='mt-6 rounded-xl bg-white p-6 shadow'>{tabContent[activeTab]}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Docs;
