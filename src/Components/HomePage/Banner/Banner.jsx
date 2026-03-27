import React from 'react';
import BannerLog from '../../../assets/banner-main.png'

import BannerBg from '../../../assets/bg-shadow.png'

const Banner = () => {
    return (

<div className='container mx-auto mt-4 rounded-2xl bg-cover bg-center bg-no-repeat bg-black'
            style={{ backgroundImage: `url(${BannerBg})` }}>
<div className='py-18 flex flex-col text-center items-center justify-center space-y-4  text-white'>
    <img className='' src={BannerLog} alt={"Banner Logo"} />

    <h1 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p className='font-bold text-2xl'>Beyond Boundaries Beyond Limits</p>
    <button className='banner-btn font-bold'>Claim Free Credit</button>

    

</div>
</div>

       
    );
};

export default Banner;