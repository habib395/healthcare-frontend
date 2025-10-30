import React from "react";
import imageOne from "../../assets/slider/doctor.jpg"

const HospitalPartner = () => {
  return (
    <div className="w-2/3 mx-auto py-20">
      <h2 className="text-6xl font-bold text-center py-20">
        Our Hospital Partners
      </h2>
      <div className="flex gap-10 items-center justify-center">
        <div>
          <img src={imageOne} alt="" className="w-32 h-20"/>
        </div> |
        <div>
        <img src={imageOne} alt="" className="w-32 h-20"/>  
        </div> |
        <div>
        <img src={imageOne} alt="" className="w-32 h-20"/>
        </div> |
        <div>
        <img src={imageOne} alt="" className="w-32 h-20"/>  
        </div> |
        <div>
        <img src={imageOne} alt="" className="w-32 h-20"/>        
        </div>
      </div>
    </div>
  );
};

export default HospitalPartner;
