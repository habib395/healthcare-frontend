import React from 'react';
import Slider from '../slider/Slider';
import CategoryCard from '../categoryCard/CategoryCard';
import Time from '../time/Time';
import WhyDoc from '../whyDoc.jsx/WhyDoc';
import Clinic from '../clinic/Clinic';
import BuyOnline from '../buyOnline/BuyOnline';
import BookTest from '../bookTest/BookTest';
import SecureFuture from '../secureFuture/SecureFuture';
import Partner from '../partner/Partner';
import HospitalPartner from '../partner/HospitalPartner';
import MassMedia from '../massMedia/MassMedia';
import Reviews from '../reviews/Reviews';
import Download from '../download/Download';
import Blogs from '../blogs/Blogs';
import Faq from '../faq/Faq';

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
            <div className='border-b-2'>
            <BuyOnline />
            </div>
            <div className="w-5/6 mx-auto">
            <BookTest />
            </div>
            <SecureFuture />
            <div className="w-5/6 mx-auto">
            <Partner />
            </div>
            <hr />
            <HospitalPartner />
            <MassMedia />
            <Reviews />
            <div className="w-5/6 mx-auto">
            <Download />
            </div>
            <hr />
            <Blogs />
            <Faq />
        </div>
    );
};

export default Home;