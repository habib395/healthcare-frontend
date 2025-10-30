import React from 'react';
import imageOne from "../../assets/slider/doctor.jpg"
import Button from '../../shared/Button';
import { IoIosTimer } from "react-icons/io";
import { GiTransparentTubes } from "react-icons/gi";
import { TbReport } from "react-icons/tb";

const BookTest = () => {
    return (
        <div className='py-16'>
            <div className='w-1/2'>
                <img src={imageOne} alt="diagnostic test" className='relative w-[600px] h-[400px] rounded-2xl' />
                <img src={imageOne} alt="diagnostic test" className='absolute border-2 top-[5460px] left-[315px] w-[400px] h-[300px] rounded-2xl' />
                <img src={imageOne} alt="diagnostic test" className='relative mt-10 w-[170px] h-[170px] rounded-2xl' />
            </div>
            <div>
                <h2 className='text-blue-400 pt-10 pb-4 text-2xl'>Home Diagnostic Service</h2>
                <h1 className='text-6xl font-bold'>Sample collection at your Doorstep</h1>
                <p className='text-3xl text-gray-600 py-6'>Making healthcare easily accessible anytime, anywhere.</p>
                <div className='flex gap-2 items-center py-2'>
                    <span>
                        <IoIosTimer className='w-16 h-16 p-2 bg-gray-100 rounded-xl'/>
                    </span>
                    <p className='text-xl py-2'>Faster and convenient tests booking</p>
                </div>
                <div className='flex gap-2 items-center py-2'>
                    <span>
                        <GiTransparentTubes className='w-16 h-16 p-2 bg-gray-100 rounded-xl'/>
                    </span>
                    <p className='text-xl py-2'>Certified professionals will collect sample from home/office</p>
                </div>
                <div className='flex gap-2 items-center py-2'>
                <span>
                        <TbReport className='w-16 h-16 p-2 bg-gray-100 rounded-xl'/>
                    </span>
                    <p className='text-xl py-2'>Get report at DocTime app within 24 hours</p>
                </div>
                <Button>Book Test</Button>
            </div>
        </div>
    );
};

export default BookTest;