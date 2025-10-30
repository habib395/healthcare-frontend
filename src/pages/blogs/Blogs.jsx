import React from "react";
import Button from "../../shared/Button";
import imageOne from "../../assets/slider/doctor-two.jpg"
import { FaStethoscope } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="w-5/6 mx-auto py-20">
        <div>
      <h2 className="text-blue-600 pt-10 pb-4 text-2xl">Recent Blogs</h2>
      <p className="text-6xl font-bold py-6">
        Read our latest blogs from <br />
        Health Experts
      </p>
        </div>

        <div className="flex gap-10">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="p-4">
            <img
              src={imageOne}
              alt="Shoes"
              className="rounded-xl w-[400px] h-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">10 Best Female Skin Specialists <br />
            (Dermatologist) in Dhaka
            </h2>
            <div className="flex items-center justify-between text-gray-500 text-lg">
                <div className="flex gap-2 items-center">
                    <span>
                        <FaStethoscope />
                    </span>
                    <h2>DocTime</h2>
                </div>
                <div>
                    6 months ago
                </div>
            </div>
            <p className="text-xl text-gray-500">Get treatment from the top 10 best <br />
            female skin specialists in Dhaka.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="p-4">
            <img
              src={imageOne}
              alt="Shoes"
              className="rounded-xl w-[400px] h-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">10 Best Female Skin Specialists <br />
            (Dermatologist) in Dhaka
            </h2>
            <div className="flex items-center justify-between text-gray-500 text-lg">
                <div className="flex gap-2 items-center">
                    <span>
                        <FaStethoscope />
                    </span>
                    <h2>DocTime</h2>
                </div>
                <div>
                    6 months ago
                </div>
            </div>
            <p className="text-xl text-gray-500">Get treatment from the top 10 best <br />
            female skin specialists in Dhaka.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="p-4">
            <img
              src={imageOne}
              alt="Shoes"
              className="rounded-xl w-[400px] h-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">10 Best Female Skin Specialists <br />
            (Dermatologist) in Dhaka
            </h2>
            <div className="flex items-center justify-between text-gray-500 text-lg">
                <div className="flex gap-2 items-center">
                    <span>
                        <FaStethoscope />
                    </span>
                    <h2>DocTime</h2>
                </div>
                <div>
                    6 months ago
                </div>
            </div>
            <p className="text-xl text-gray-500">Get treatment from the top 10 best <br />
            female skin specialists in Dhaka.
            </p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Blogs;
