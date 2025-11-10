import React from "react";
import Button from '../../shared/Button';
import { useGetMediaInfoQuery } from "../provider/home/mediaApiSlice";

const MassMedia = () => {
  const { data, isLoading, isError } = useGetMediaInfoQuery();
  return (
    <div className="bg-gray-100 py-20">
      <div className="w-2/3 mx-auto">
        <h2 className="py-12 font-bold text-6xl">DocTime in Mass Media</h2>
      <div className="flex gap-10">
        <div className="card card-compact bg-base-100 w-[500px] shadow-xl">
            <h2 className="py-4 pl-4 italic font-bold text-2xl">The Daily Star</h2>
          <figure className="p-4">
            <img
              src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-500 text-lg">Sunday, 4 April, 2021</h2>
            <p className="font-semibold text-2xl">Healthcare at home with DocTime</p>
            <div className="card-actions justify-start">
              <Button className="btn">Read more</Button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-[500px] shadow-xl">
            <h2 className="py-4 pl-4 italic font-bold text-2xl">The Daily Star</h2>
          <figure className="p-4">
            <img
              src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-500 text-lg">Sunday, 4 April, 2021</h2>
            <p className="font-semibold text-2xl">Healthcare at home with DocTime</p>
            <div className="card-actions justify-start">
              <Button className="btn">Read more</Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MassMedia;
