import React from "react";
import Slider from "../slider/Slider";
import CategoryCard from "../categoryCard/CategoryCard";
import Time from "../time/Time";
import WhyDoc from "../whyDoc.jsx/WhyDoc";
import Clinic from "../clinic/Clinic";
import BuyOnline from "../buyOnline/BuyOnline";
import BookTest from "../bookTest/BookTest";
import SecureFuture from "../secureFuture/SecureFuture";
import Partner from "../partner/Partner";
import HospitalPartner from "../partner/HospitalPartner";
import MassMedia from "../massMedia/MassMedia";
import Reviews from "../reviews/Reviews";
import Download from "../download/Download";
import Blogs from "../blogs/Blogs";
import Faq from "../faq/Faq";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="w-5/6 mx-auto">
        <hr />
        <Slider />
        <CategoryCard />
      </div>
      <div className="hidden sm:block">
      <Time />
      </div>
      <div className="w-5/6 mx-auto hidden sm:block">
        <WhyDoc />
      </div>
      <div className="hidden sm:block">
        <Clinic />
      </div>
      <div className="border-b-2 hidden sm:block">
        <BuyOnline />
      </div>
      <div className="w-5/6 mx-auto hidden sm:block">
        <BookTest />
      </div>
      <div className="hidden sm:block">
      <SecureFuture />
        </div> 
      <div className="w-5/6 mx-auto hidden sm:block">
        <Partner />
      </div>
      <hr />
      <div className="hidden sm:block">
        <HospitalPartner />
      </div>
      <div className="hidden sm:block">
        <MassMedia />
      </div>
      <div className="hidden sm:block">
        <Reviews />
      </div>
      <div className="w-5/6 mx-auto hidden sm:block">
        <Download />
      </div>
      <hr />
      <div className="hidden sm:block">
        <Blogs />
      </div>
      <div className="hidden sm:block">
        <Faq />
      </div>
      <div className="hidden sm:block">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
