import React from 'react';
import Dollar from '../../assets/dollar 1.png'
import LogoNavbar from '../../assets/logo.png'
const Navbar = () => {
    return (
<div >
<div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
    <img src={LogoNavbar} alt=""/>
  </div>
  <div className="flex-none">
    <button className="flex justify-between items-center gap-2 font-bold text-xl ">
        <span>0 Coin</span>
      <img src={Dollar} alt="" />
    </button>
  </div>
</div>
</div>
    );
};

export default Navbar;