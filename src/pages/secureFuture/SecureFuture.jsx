import React from 'react';
import imageOne from "../../assets/slider/doctor.jpg"
import Button from '../../shared/Button';

const SecureFuture = () => {
    return (
        <div className='bg-blue-100 py-10'>
            <div className='w-5/6 mx-auto'>
            <div className='w-1/2 py-16'>
                <img src={imageOne} alt="Happy family" className='rounded-2xl w-[500px] h-[500px]' />
            </div>
            <div>
            <h3 className='text-2xl text-blue-600 py-4'>Become a Premium Member</h3>
            <h1 className='text-6xl py-4 font-bold'>A secure future for you <br />
            and your family</h1>
            <p className='text-3xl py-4 text-gray-500'>DocTime is the leading digital healthcare app in the country. DocTime is committed to bringing modern healthcare to people along with 24/7 doctor video consultation. DocTime healthcare package is there for healthcare assurance and your secure healthy future. Choose your favorite packages based on your needs. Anyone can enjoy this service by paying a one-time annual subscription fee.</p>
            <Button>view All Package</Button>
            </div>
            </div>
        </div>
    );
};

export default SecureFuture;