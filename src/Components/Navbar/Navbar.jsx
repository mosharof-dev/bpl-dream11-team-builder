import React from 'react';
import Dollar from '../../assets/dollar 1.png';
import LogoNavbar from '../../assets/logo.png';

const Navbar = ({ coin }) => {
    // Reusable Navigation Links
    const navLinks = (
        <>
            <li className="font-semibold text-gray-600 hover:text-orange-500 transition-colors">
                <a href="#home">Home</a>
            </li>
            <li className="font-semibold text-gray-600 hover:text-orange-500 transition-colors">
                <a href="#fixture">Fixture</a>
            </li>
            <li className="font-semibold text-gray-600 hover:text-orange-500 transition-colors">
                <a href="#teams">Teams</a>
            </li>
            <li className="font-semibold text-gray-600 hover:text-orange-500 transition-colors">
                <a href="#schedules">Schedules</a>
            </li>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="navbar container mx-auto px-2 md:px-8">
                
                {/* 1. Navbar Start: Logo */}
                <div className="navbar-start">
                    <img 
                        src={LogoNavbar} 
                        alt="Cricket Logo" 
                        className="w-10 md:w-16 h-auto object-contain" 
                    />
                </div>

                {/* 2. Navbar Center: Desktop Menu (Hidden on Mobile) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-lg">
                        {navLinks}
                    </ul>
                </div>

                {/* 3. Navbar End: Coin Button & Mobile Menu Icon */}
                <div className="navbar-end gap-1 md:gap-3">
                    
                    {/* Fixed Coin Button: Using whitespace-nowrap to prevent text breaking */}
                    <div className="flex items-center gap-2 font-bold text-sm md:text-lg border-2 border-gray-100 px-3 py-1.5 md:px-5 md:py-2 rounded-xl bg-white shadow-sm min-w-fit shrink-0">
                        <span className="whitespace-nowrap">
                            {coin} Coin
                        </span>
                        <img 
                            src={Dollar} 
                            alt="coin icon" 
                            className="w-5 h-5 md:w-6 md:h-6 shrink-0" 
                        />
                    </div>

                    {/* Mobile Menu Icon (Right Side) */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost px-2 min-h-0 h-10">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M4 6h16M4 12h16m-7 6h7" 
                                />
                            </svg>
                        </label>
                        <ul 
                            tabIndex={0} 
                            className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-2xl bg-base-100 rounded-box w-52 gap-2 border border-gray-100 font-medium"
                        >
                            {navLinks}
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;