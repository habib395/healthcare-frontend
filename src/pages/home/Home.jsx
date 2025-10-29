import React from 'react';
import Slider from '../slider/Slider';
import CategoryCard from '../categoryCard/CategoryCard';
import Time from '../time/Time';
import WhyDoc from '../whyDoc.jsx/WhyDoc';
import Clinic from '../clinic/Clinic';

const Home = () => {
    return (
        <div>
        <div className='w-5/6 mx-auto'>
            <hr />
            <Slider />
            <CategoryCard />
        </div>
            <Time />
        <div className='w-5/6 mx-auto'>
            <WhyDoc />
        </div>
            <Clinic />
        </div>
    );
};

export default Home;