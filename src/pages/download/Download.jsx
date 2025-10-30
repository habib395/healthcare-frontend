import React from "react";
import imageDoctor from "../../assets/slider/doctor-two.jpg";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

const Download = () => {
  return (
    <div className="py-20">
      <div className="w-1/2">
        <img
          src={imageDoctor}
          alt="doctor two picture"
          className="rounded-xl"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold pt-6">
          Download and register our App for free <br />& get the privilege
          healthcare services
        </h1>
        <p className="text-2xl text-gray-600 py-6">
          To download the app on your mobile, go to the Play Store or scan the
          QR code
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-white bg-black rounded-lg px-8 py-4">
            <div className="text-5xl">
                <FaGooglePlay />
            </div>
            <div>
              <p className="text-base">Download on the</p>
              <h1 className="text-3xl">Google Play</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white bg-black rounded-lg px-8 py-4">
            <div className="text-6xl">
                <AiFillApple />
            </div>
            <div>
              <p className="text-base">Download on the</p>
              <h1 className="text-3xl">Apple Store</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
