import React from 'react';
import Banner from './Banner';
import Location from './Location';
import Service from './Service';
import Terms from './Terms';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Location ></Location>
            <Service></Service>
            <Terms></Terms>
        </div>
    );
};

export default Home;