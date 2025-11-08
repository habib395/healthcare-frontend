import React from 'react';
import bgDoctor from "../../assets/slider/doctor-bg.png"

const BuyOnline = () => {
    return (
        <div className='w-11/12 mx-auto py-20 mb-10 flex gap-20'>
            <div className='w-1/2 p-10'>
            <div className='relative bg-transparent w-[500px] rounded-3xl z-50'>
                <img src={bgDoctor} alt="deliver man image" className='h-[650px]'/>
            </div>
                <p className='absolute bg-blue-200 top-[4600px] w-[500px] h-[400px] rounded-3xl z-40'>
                </p>
                <div className='absolute bg-blue-100 top-[4800px] left-52 w-[600px] h-[600px] rounded-3xl  z-0' />
            </div>
            <div className='pl-56'>
                <h2 className='text-6xl font-bold'>
                Buy Medicines online
                from home
                </h2>
                <p className='text-4xl text-gray-500 py-16'>
                Authentic medicines with discounts & free home delivery
                within Dhaka city
                </p>
                <p className='text-sm py-5 text-gray-500'>
                *Conditions apply
                </p>
                <button className="btn bg-blue-600 text-xl text-white px-14 py-6 font-semibold my-6">Buy Online</button>
            </div>
        </div>
    );
};

export default BuyOnline;