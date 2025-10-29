import React from "react";
import { IoMdTimer } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

const Clinic = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-8 items-center justify-center rounded-lg">
          <div>
            <h2 className="text-blue-400 text-2xl">Available specialties</h2>
            <h2 className="font-bold text-4xl">
              Explore Doctors from 36+ clinical areas
            </h2>
          </div>
          <div className="bg-white text-center p-10 flex flex-col items-center">
            <span className="text-7xl text-blue-600 mb-2">
              <IoMdTimer />
            </span>
            <h2 className="text-xl font-semibold">General Physician</h2>
            <p className="text-gray-600">
              Cold, Flu, fever, vomiting, infections, headaches or any others...
            </p>
          </div>
          <div className="bg-white text-center p-10 flex flex-col items-center">
            <span className="text-7xl text-blue-600 mb-2">
              <IoMdTimer />
            </span>
            <h2 className="text-xl font-semibold">General Physician</h2>
            <p className="text-gray-600">
              Cold, Flu, fever, vomiting, infections, headaches or any others...
            </p>
          </div>
          <div className="bg-white text-center p-10 flex flex-col items-center">
            <span className="text-7xl text-blue-600 mb-2">
              <IoMdTimer />
            </span>
            <h2 className="text-xl font-semibold">General Physician</h2>
            <p className="text-gray-600">
              Cold, Flu, fever, vomiting, infections, headaches or any others...
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center py-10">
        <div className="bg-white text-center p-10 flex flex-col items-center">
            <span className="text-7xl text-blue-600 mb-2">
              <IoMdTimer />
            </span>
            <h2 className="text-xl font-semibold">General Physician</h2>
            <p className="text-gray-600">
              Cold, Flu, fever, vomiting, infections, headaches or any others...
            </p>
          </div>
        <div className="bg-white text-center p-10 flex flex-col items-center">
            <span className="text-7xl text-blue-600 mb-2">
              <IoMdTimer />
            </span>
            <h2 className="text-xl font-semibold">General Physician</h2>
            <p className="text-gray-600">
              Cold, Flu, fever, vomiting, infections, headaches or any others...
            </p>
          </div>
        <div className="bg-white text-center p-10 flex flex-col items-center">
            <span className="text-7xl text-blue-600 mb-2">
              <IoMdTimer />
            </span>
            <h2 className="text-xl font-semibold">General Physician</h2>
            <p className="text-gray-600">
              Cold, Flu, fever, vomiting, infections, headaches or any others...
            </p>
          </div>
        <div className="bg-white text-center p-10 flex flex-col items-center">
            <span className="text-7xl text-blue-600 mb-2">
              <HiDotsHorizontal />
            </span>
            <h2 className="text-xl font-semibold">More</h2>
            <p className="text-gray-600">
              Explore many many
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
