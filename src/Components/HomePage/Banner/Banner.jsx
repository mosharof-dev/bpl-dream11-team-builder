import React, { useState } from 'react';
import BannerLog from '../../../assets/banner-main.png'

import BannerBg from '../../../assets/bg-shadow.png'
import { toast } from 'react-toastify';

const Banner = ({coin, setCoin}) => {
const [isClaimed, setIsClaimed] = useState(false)
const claimFreeCredit = () =>{
 if(isClaimed === false){
    setCoin( coin + 1000);
    setIsClaimed(true)
    toast.success('Congrats! 1000 Free Credit Added.')
 }else{
    toast.error("You've already claimed your free credit.");
 }
}
    return (

<div className='container mx-auto mt-6 rounded-2xl bg-cover bg-center bg-no-repeat bg-black px-4 md:px-0'
     style={{ backgroundImage: `url(${BannerBg})` }}>
  
  <div className='py-12 md:py-20 flex flex-col text-center items-center justify-center space-y-6 text-white'>
    
    {/* Banner Logo: Mobile-e ektu choto korlam */}
    <img className='w-40 md:w-auto' src={BannerLog} alt="Banner Logo" />

    {/* Title: Mobile-e text-2xl, Desktop-e text-4xl/5xl */}
    <h1 className='font-bold text-2xl md:text-5xl max-w-4xl leading-tight'>
      Assemble Your Ultimate Dream 11 Cricket Team
    </h1>

    {/* Subtitle: Mobile-e text-lg, Desktop-e text-2xl */}
    <p className='font-medium text-lg md:text-2xl opacity-80'>
      Beyond Boundaries Beyond Limits
    </p>

    {/* Your Button: Shob device-ei thik thakbe */}
    <button 
      onClick={claimFreeCredit} 
      className='bg-[#E7FE29] font-bold text-black py-3 px-6 outline-offset-4 rounded-xl border border-black outline outline-[#E7FE29] hover:outline-offset-2 transition-all duration-200 active:scale-95'
    >
      Claim Free Credit
    </button>

  </div>
</div>
</div>
       
    );
};

export default Banner;