import React from 'react';
import tetment from '../../assets/images/treatment.png'

const Terms = () => {
    return (
        <div class="hero min-h-screen px-6">
            <div class="hero-content flex-col lg:flex-row">
                <img src={tetment} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='tetmentText px-8'>
                    <h1 class="text-5xl font-bold text-left">Exceptional Dental  <br /> Care, on Your Terms</h1>
                    <p class="py-6 text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn flex justify-start">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Terms;