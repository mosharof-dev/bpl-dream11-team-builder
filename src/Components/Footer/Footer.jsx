import React from 'react';
import FooterLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="mt-60"> 
            <footer className="relative bg-[#06091A] text-white pt-48 pb-10 px-5 z-10">
      
                
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-20">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl">
                        <div className="bg-white text-black rounded-2xl py-16 px-6 text-center shadow-2xl bg-gradient-to-tr from-blue-50 via-white to-orange-50">
                            <h2 className="text-3xl font-bold mb-3">Subscribe to our Newsletter</h2>
                            <p className="text-gray-500 mb-6">Get the latest updates and news right in your inbox!</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="border border-gray-300 rounded-xl px-4 py-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                />
                                <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-black font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Main Footer Content */}
                <div className="max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex justify-center mb-16 pt-10">
                        <img src={FooterLogo} alt="Cricket Logo" className="w-32" />
                    </div>

                    {/* Footer Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
                        {/* About Us */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-white">About Us</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xs">
                                We are a passionate team dedicated to providing the best services to our customers.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
                            <ul className="text-gray-400 space-y-3">
                                <li className="hover:text-white cursor-pointer transition">• Home</li>
                                <li className="hover:text-white cursor-pointer transition">• Services</li>
                                <li className="hover:text-white cursor-pointer transition">• About</li>
                                <li className="hover:text-white cursor-pointer transition">• Contact</li>
                            </ul>
                        </div>

                        {/* Subscribe Section */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-white">Subscribe</h3>
                            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                            <div className="flex h-12">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="bg-white text-black px-4 py-2 w-full focus:outline-none rounded-l-xl"
                                />
                                <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-black font-bold px-4 py-2 rounded-r-xl whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 3. Copyright */}
                    <p className="text-center text-gray-500 mt-8 text-sm">
                        @2026 Your Company All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;