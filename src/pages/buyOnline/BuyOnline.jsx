import React from 'react';
// import deliveryMan from "../../assets/slider/doctor.jpg"

const BuyOnline = () => {
    return (
        <div className='w-11/12 mx-auto pt-20 pb-10 flex'>
            <div className='w-1/2 p-10'>
            <div className='relative bg-blue-300 w-[600px] left-32 rounded-3xl z-50'>
                <img src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg" alt="deliver man image" className='h-[650px]'/>
            </div>
                <p className='absolute bg-blue-300 top-[4300px] w-[500px] h-[400px] rounded-3xl z-40'>
                </p>
                <div className='absolute bg-blue-100 top-[4400px] left-72 w-[600px] h-[600px] rounded-3xl  z-0' />
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
                <hr />
            </div>
        </div>
    );
};

export default BuyOnline;