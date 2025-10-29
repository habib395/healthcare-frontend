import React from "react";
import whyImageOne from "../../assets/slider/doctor.jpg";
import whyImageTwo from "../../assets/slider/drug.jpg";
import whyImageThree from "../../assets/slider/test.jpg";
import whyImageFour from "../../assets/slider/img-two.jpg";
import { FaVideo } from "react-icons/fa";

const WhyDoc = () => {
  return (
    <div>
      <div>
        <div className="w-2/3 bg-gray-50 rounded-lg">
          <img
            src={whyImageOne}
            alt=""
            className="relative left-20  w-72 h-72 border-2 rounded-lg border-white"
          />
          <img
            src={whyImageTwo}
            alt=""
            className="absolute top-[1565px] left-[420px] w-[600px] h-[600px] border-2 rounded-xl border-white p-10"
          />
          <img
            src={whyImageThree}
            alt=""
            className="absolute border-2 top-[1800px] w-[500px] h-[400px] rounded-xl border-white"
          />
          <img
            src={whyImageFour}
            alt=""
            className="absolute border-2 top-[1960px] left-[500px] w-[200px] h-[200px] rounded-xl border-white"
          />
        </div>
        <div className="w-1/3"></div>
      </div>
      <div>
        <h4 className="mt-80 text-blue-400 text-xl">Why DocTime?</h4>
        <h1 className="text-6xl font-bold py-3">
          Bangladesh’s leading healthcare app for online doctor consultation
        </h1>
        <p className="text-3xl py-2">
          Access any GP or specialist doctor you need at anytime from anywhere.
        </p>
        <p className="text-3xl py-2">
          Access to online prescriptions, medicine delivery, and diagnostic
          tests.
        </p>
        <p className="text-3xl py-2 mb-10">
          Easy subscription packages to protect you and your loved one’s health
          and wellbeing.
        </p>
      </div>
      <div>
        <div>
          <div className="w-1/2 border-b-4 border-l-4 rounded-xl">
            <FaVideo className="absolute text-9xl z-50  bg-white border-2 rounded-full p-4" />
            <img
              src={whyImageOne}
              alt="doctor image"
              className="relative z-0 rounded-full w-[500px] h-[500px]"
            />
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div>
        <h2 className="text-6xl font-bold py-10">
          Access convenient online Healthcare with DocTime
        </h2>
        <p className="text-4xl py-6 text-gray-500">
          DocTime offers you the convenience of accessing care from anywhere,
          saving time, and ensuring you to get the attention you need without
          the hassle of traveling to a clinic. Whether it's for routine
          check-ups, follow-ups, or managing ongoing health conditions, online
          consultations provide a flexible and efficient solution. Embrace the
          future of healthcare by exploring our online consultation options
          today.
        </p>
      </div>
    </div>
  );
};

export default WhyDoc;
