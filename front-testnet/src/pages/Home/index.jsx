import React from 'react';
import Crypt from '@images/cryp.png';
import Layout from '@components/Layout';
import useFaucet from '@hooks/useFaucet';
import useWallet from '@hooks/useWallet';

const Home = () => {
  const { account } = useWallet();
  const { isClaiming, status, claimFaucet, canClaim, timeRemaining } = useFaucet(account);
  return (
    <Layout title='Home'>
      <div className='pt-18 md:pt-8'>
        <div className='relative h-auto w-full overflow-hidden bg-blue-900 px-6 py-10 md:px-60'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{ backgroundImage: "url('/your-banner.jpg')" }}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent'></div>
          </div>

          <div className='relative z-10 flex flex-col-reverse items-center justify-between gap-8 text-white md:h-full md:flex-row'>
            <div className='max-w-xl text-center md:text-left'>
              <span className='silkscreen-regular mb-4 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-black shadow'>
                Activity
              </span>

              <h2 className='exo-2-700 mb-3 text-3xl leading-snug font-extrabold sm:text-4xl'>
                Testnet Live EcoShow
              </h2>

              <p className='exo-2-400 mt-4 text-base text-blue-200 sm:text-lg'>
                Ecoshow testnet is available now, join this now to get great prizes.
              </p>

              <p className='exo-2-400 text-sm text-blue-200'>
                Claim the faucet to try some tests using Ecoshow, send EcoShow Tokens to your
                friends or fellow users and you will get points.
              </p>

              <button
                onClick={claimFaucet}
                className='exo-2-400 mt-6 rounded-lg border-2 px-6 py-2 text-sm font-semibold shadow transition'
              >
                {isClaiming
                  ? 'Claiming...'
                  : !canClaim && timeRemaining
                    ? timeRemaining
                    : 'Claim Faucet'}
              </button>

              {status && <p className='mt-4 text-sm'>{status}</p>}
            </div>

            <img
              src={Crypt}
              alt='Crypto Logo'
              className='h-auto w-48 object-contain sm:w-64 md:h-120 md:w-80'
            />
          </div>

          <div className='flex flex-col items-center justify-center px-4 py-6 text-center md:px-28 md:py-8'>
            <h1 className='exo-2-700 text-1xl mb-3 font-bold text-white md:text-3xl'>
              <span className='exo-2-700 font-bold text-white'>Explore</span> The Ecoshow Ecosystem
            </h1>

            <p className='exo-2-400 mt-1 max-w-2xl text-sm leading-relaxed text-white md:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores facilis ad sequi,
              earum eos qui! Doloribus corporis repellat dolorum illo hic eveniet ipsa, deserunt
              velit consequuntur, delectus, quo nostrum eos!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
