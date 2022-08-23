import React from 'react';
import chair from '../../assets/images/chair.png'
import BannerStyle from './BannerStyle.css';

const Banner = () => {
    return (
        <div class="hero min-h-screen p-6">
            <div class="hero-content flex-col lg:flex-row-reverse p-7 bannerImg">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='bannerText '>
                    <h1 class="text-5xl font-bold text-left">Your New Smile Starts <br></br> Here</h1>
                    <p class="py-6 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn flex justify-start">Get Started</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;