import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Usman</div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 space-y-4 md:space-y-0 ${isOpen ? 'flex' : 'hidden'}`}>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
