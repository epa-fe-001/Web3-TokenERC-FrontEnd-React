import React from 'react';
import './style.css';
const Footer = () => {
  return (
    <footer className='bg-blue-900 px-6 py-10 text-gray-300 md:px-28'>
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4'>
        <div>
          <h3 className='silkscreen-regular mb-4 text-lg text-white'>FAQ</h3>
          <ul className='space-y-2 text-sm'>
            <ul className='flex space-x-4'>
              <li>
                <a
                  href='#'
                  className='exo-2-400 rounded-2xl border border-white px-2 py-1 text-white no-underline'
                >
                  Onboarding
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='exo-2-400 rounded-2xl border border-white px-2 py-1 text-white no-underline'
                >
                  Guidge
                </a>
              </li>
            </ul>
            <li>
              <span className='exo-2-400 mt-6 block text-sm text-white'>
                © 2025. Pharos All rights reserved
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='silkscreen-regular mb-4 text-lg text-white'>Develop</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Documentation
              </a>
            </li>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Ecosystem Grant
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='silkscreen-regular mb-4 text-lg text-white'>Company</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                User Agreement
              </a>
            </li>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='silkscreen-regular mb-4 text-lg text-white'>Socials</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Twitter
              </a>
            </li>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Discord
              </a>
            </li>
            <li>
              <a href='#' className='exo-2-400 text-white no-underline transition'>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
