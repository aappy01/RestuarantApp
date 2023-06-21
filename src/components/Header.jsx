import React from 'react'
import { MdShoppingBasket } from "react-icons/md";

import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"

const Header = () => {
  return (
  <header className='w-screen fixed z-50 p-5 px-16'>
    {/* Desktop and Tablets */}
    <div className='hidden md:flex w-full h-full justify-between'>
      <div className='flex items-align gap-2'>
        <img src={Logo} alt="logo" className='w-8 object-cover'/>
        <p className='text-headingColor text-xl font-bold'>City</p>
      </div>
      
      <div className='flex items-align gap-8'>
      <ul className='flex items-center gap-8'>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
      </ul>

      <div className='relative flex items-center justify-center'>
        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
        <div className='absolute -top-0.5 -right-0.5 w-4 h-4 bg-cartNumBg rounded-full'>
          <p className='text-xs font-semibold text-white flex items-center justify-center'>2</p>
        </div>
      </div>

      <img src={Avatar} 
      alt="userprofile" 
      className='w-10 min-w-[40px] h-10 min-h-[40px] shadow drop-shadow-xl rounded-full' />

      </div>
    </div>





    {/* Mobile */}
    <div className='flex md:hidden w-full h-full '>

    </div>
  </header>
  );
};

export default Header;