import React from 'react';
import serviceStyle from './ServiceStyle.css'
import img1 from '../../assets/images/fluoride.png'
import img2 from '../../assets/images/cavity.png'
import img3 from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div className='service mt-6'>
            <h1>OUR SERVICES</h1>
            <h2>Services We Provide</h2>
           <div className='flex justify-between grid md:grid-cols-3 '>
           <div class="card w-96 bg-base-100 shadow-xl m-3 ">
                <figure class="px-10 pt-10">
                    <img src={img1} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h3 class="card-title">Fluoride Treatment</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl m-3">
                <figure class="px-10 pt-10">
                    <img src={img2} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h3 class="card-title">Cavity Filling</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl m-3">
                <figure class="px-10 pt-10">
                    <img src={img3} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h3 class="card-title">Teeth Whitening</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    
                </div>
            </div>
           </div>
        </div>
    );
};

export default Service;