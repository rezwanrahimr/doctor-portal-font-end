import React from 'react';
import { BsFillClockFill } from "react-icons/bs";
import clock from "../../assets/images/clock.svg"
import location from "../../assets/images/marker.svg"
import phone from "../../assets/images/phone.svg"
import LocationCss from './Location.css'


const Location = () => {

    console.log()
    return (
        <div className='flex justify-between  mx-6 flex-col md:flex-row '>

            <div className=' item1 my-2 flex items-center'>

                <div class="grid justify-start flex items-center"><img className='mx-3' width={50} src={clock} alt="" /></div>

                <div class="grid text-left flex items-center text-center clockText">
                    <h1 className='text-left'>Opening Hours</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>


            </div>
            <div className=' item2 my-2 flex items-center'>
                <div class="grid justify-start flex items-center"><img className='mx-3' width={50} src={location} alt="" /></div>

                <div class="grid text-left flex items-center text-center clockText">
                    <h1 className='text-left'>Visit our location</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className=' item3 my-2 flex items-center'>
                <div class="grid justify-start flex items-center"><img className='mx-3' width={50} src={phone} alt="" /></div>

                <div class="grid text-left flex items-center text-center clockText">
                    <h1 className='text-left'>Contact us now</h1>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Location;