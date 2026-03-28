// import React from 'react';
// import Dollar from '../../assets/dollar 1.png'
// import LogoNavbar from '../../assets/logo.png'
// import { BsCoin } from 'react-icons/bs';
// const Navbar = ({coin}) => {
//     return (
// <nav className="sticky top-0 z-10 bg-base-100">
// <div className="navbar    container mx-auto">
//   <div className="flex-1">
//     <img src={LogoNavbar} alt=""/>
//   </div>
//   <div className="flex-none">
//     <button className="flex justify-between items-center gap-2 font-bold text-xl border p-2 rounded-xl ">
//         <span className='flex items-center gap-1'> <BsCoin/> {coin} Coin</span>
//       <img src={Dollar} alt="" />
//     </button>
//   </div>
// </div>
// </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import Dollar from '../../assets/dollar 1.png';
import LogoNavbar from '../../assets/logo.png';
import { BsCoin } from 'react-icons/bs';

const Navbar = ({ coin }) => {
   
    const navLinks = (
        <>
            <li className="hover:text-orange-500 transition-colors"><a href="#home">Home</a></li>
            <li className="hover:text-orange-500 transition-colors"><a href="#fixture">Fixture</a></li>
            <li className="hover:text-orange-500 transition-colors"><a href="#teams">Teams</a></li>
            <li className="hover:text-orange-500 transition-colors"><a href="#schedules">Schedules</a></li>
        </>
    );

    return (
        <nav className="sticky top-0 z-10 bg-white">
            <div className="navbar container mx-auto px-4 md:px-8">
                
                {/* 1. Mobile & Logo Section */}
                <div className="navbar-start flex items-center">
                    {/* Mobile Dropdown (Visible only on small screens) */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 font-medium text-gray-600 gap-2">
                            {navLinks}
                        </ul>
                    </div>
                    {/* Logo */}
                    <img src={LogoNavbar} alt="Logo" className="w-12 md:w-16" />
                </div>

                {/* 2. Desktop Menu (Hidden on mobile) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-gray-600 gap-8">
                        {navLinks}
                    </ul>
                </div>

                {/* 3. Coin Section (Always Visible) */}
                <div className="navbar-end">
                    <div className="flex items-center gap-2 font-bold text-sm md:text-lg border border-gray-200 px-4 py-2 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                        <span className="flex items-center gap-1.5">
                            {coin} Coin
                        </span>
                        <img src={Dollar} alt="coin icon" className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;