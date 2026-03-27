import React from 'react';
import Dollar from '../../assets/dollar 1.png'
import LogoNavbar from '../../assets/logo.png'
import { BsCoin } from 'react-icons/bs';
const Navbar = ({coin}) => {
    return (
<nav className="sticky top-0 z-10 bg-base-100">
<div className="navbar    container mx-auto">
  <div className="flex-1">
    <img src={LogoNavbar} alt=""/>
  </div>
  <div className="flex-none">
    <button className="flex justify-between items-center gap-2 font-bold text-xl border p-2 rounded-xl ">
        <span className='flex items-center gap-1'> <BsCoin/> {coin} Coin</span>
      <img src={Dollar} alt="" />
    </button>
  </div>
</div>
</nav>
    );
};

export default Navbar;