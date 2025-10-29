import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdStarRate } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

const Time = () => {
  return (
    <div className="bg-blue-50 py-20 my-10">
      <div className="flex mx-auto w-5/6 gap-10 items-center justify-center">
        <div className="flex flex-col items-center p-4 text-center">
          <div className="bg-white p-6 rounded-full mb-3 text-blue-400">
            <FaUserDoctor className="w-20 h-20" />
          </div>
          <h2 className="text-2xl font-bold">1700+</h2>
          <p className="text-gray-600">BMDC verified doctors</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center">
        <div className="bg-white p-6 rounded-full mb-3 text-blue-400">
            <IoMdTimer className="w-20 h-20" />
          </div>
          <h2 className="text-2xl font-bold">10 Minutes</h2>
          <p className="text-gray-600">Average waiting time</p>
        </div>

        <div className="flex flex-col items-center p-4 text-center">
        <div className="bg-white p-6 rounded-full mb-3 text-blue-400">
            <VscWorkspaceTrusted className="w-20 h-20" />
          </div>
          <h2 className="text-2xl font-bold">700K+</h2>
          <p className="text-gray-600">People have trusted.</p>
        </div>

        <div className="flex flex-col items-center p-4 text-center">
          <div className="bg-white p-6 rounded-full mb-3 text-blue-400">
            <MdStarRate  className="w-20 h-20"/>
          </div>
          <h2 className="text-2xl font-bold">95%</h2>
          <p className="text-gray-600">Users gave 5 star rating</p>
        </div>

        <div className="flex flex-col items-center p-4 text-center">
          <div className="bg-white p-6 rounded-full mb-3 text-blue-400">
            <FaDownload className="w-20 h-20"/>
          </div>
          <h2 className="text-2xl font-bold">1+ Million</h2>
          <p className="text-gray-600">App Download on playStore</p>
        </div>
      </div>
    </div>
  );
};

export default Time;
