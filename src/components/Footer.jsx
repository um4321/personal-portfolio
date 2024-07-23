import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-8 border-t border-gray-700 pt-8'>
          <div className='flex-1 mb-8 md:mb-0'>
            <h3 className='text-2xl font-bold mb-4'>Usman</h3>
            <p className='text-gray-400'>
              Full-Stack Developer, specializing in building modern and responsive web applications.
            </p>
            <div className='flex space-x-4 mt-4'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <h3 className='text-xl font-semibold mb-4'>Subscribe to our newsletter</h3>
            <form className='flex items-center'>
              <input
                type='email'
                placeholder='Your Email'
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 mr-2'
              />
              <button
                type='submit'
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg transition-transform transform hover:scale-105'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='border-t border-gray-700 pt-4 mt-8'>
          <p className='text-center text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} Usman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
