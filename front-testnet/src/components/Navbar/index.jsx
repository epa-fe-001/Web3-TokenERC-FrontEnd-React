import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems as defaultNavItems } from '@components/NavItems';
import useWallet from '@hooks/useWallet.js';

import './style.css';

export default function Navbar({ navItems = defaultNavItems }) {
  const { account, connectWallet, isOpen, setIsOpen } = useWallet();
  const navRefs = useRef([]);

  return (
    <div className='relative'>
      <nav className='fixed top-0 left-0 z-50 w-full bg-blue-900 text-white'>
        <div className='mx-auto flex w-full flex-wrap items-center justify-between px-4 py-4 sm:px-6 md:px-28'>
          <h1 className='silkscreen-regular text-lg font-bold sm:text-xl'>EcoShow</h1>

          {/* Menu desktop */}
          <div className='relative hidden flex-wrap gap-6 sm:flex'>
            {navItems.map(({ to, label }, index) => (
              <NavLink
                key={to}
                to={to}
                ref={(el) => (navRefs.current[index] = el)}
                className={({ isActive }) =>
                  `exo-2-400 relative py-2 text-sm no-underline transition duration-200 sm:text-base ${
                    isActive ? 'font-semibold text-blue-400' : 'text-white hover:text-blue-400'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Menu mobile */}
          {isOpen && (
            <div className='absolute top-full left-0 z-50 flex w-full flex-col gap-2 bg-blue-900 px-6 py-4 shadow-lg sm:hidden'>
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className='exo-2-400 py-2 text-lg text-white no-underline transition hover:text-blue-400'
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}

          {/* Wallet & toggle */}
          <div className='flex items-center gap-2'>
            {!account ? (
              <button
                onClick={connectWallet}
                className='exo-2-400 rounded border border-white bg-transparent px-2 py-1 text-sm text-white transition-colors duration-200 hover:bg-white hover:text-black sm:mt-0'
              >
                Connect Wallet
              </button>
            ) : (
              <button
                disabled
                className='exo-2-400 min-w-[120px] cursor-default rounded border border-white bg-transparent px-2 py-1 text-sm text-white transition-colors duration-200 sm:mt-0'
              >
                <div className='flex flex-row items-center gap-2'>
                <svg
                  className='h-4 w-4 text-white dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z'
                  />
                </svg>
                <span className='text-sm text-white'>
                  {`${account.slice(0, 6)}...${account.slice(-4)}`}
                </span>
                </div>
              </button>
            )}
            <button
              className='p-2 text-white sm:hidden'
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Toggle menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
