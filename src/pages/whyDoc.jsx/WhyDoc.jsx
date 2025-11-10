import React from "react";
import { FaVideo, FaCheckCircle } from "react-icons/fa"; 
import { useGetWHyDocInfoQuery } from "../provider/home/whyDocApiSlice";

const WhyDoc = () => {
  const { data: whyDocInfo, isLoading, isError } = useGetWHyDocInfoQuery();
  
  if (isLoading) {
    return (
      <div className="py-24 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-700">Loading DocTime info...</h2>
      </div>
    );
  }

  if (isError || !whyDocInfo?.data) {
    return (
      <div className="py-24 text-center bg-white">
        <h2 className="text-3xl font-bold text-red-500">
          Error loading data or no information found.
        </h2>
      </div>
    );
  }
  
  const data = whyDocInfo?.data;

  return (
    <section className="py-20 bg-white overflow-hidden" id="why-doctime">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="w-full md:w-1/2 relative min-h-[500px] flex justify-center order-2 md:order-1">
            <div className="w-full max-w-[550px] relative grid grid-cols-2 grid-rows-2 gap-4">
              <img
                src={data.leftImages[0]?.imageUrl || 'placeholder.jpg'}
                alt="Online doctor consultation"
                className="col-span-2 row-span-2 w-full h-full object-cover rounded-3xl shadow-2xl z-10"
              />
              <div className="absolute top-0 left-0 bg-blue-100 w-36 h-36 rounded-tl-3xl z-0 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-3 z-20">
                <FaVideo className="text-3xl text-blue-600" />
                <div>
                  <p className="font-bold text-blue-800 text-lg">Video Call</p>
                  <p className="text-sm text-gray-600">Start now</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="w-full md:w-1/2 pt-10 md:pt-0 order-1 md:order-2">
            <h4 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
              {data.subTitle}
            </h4>
            <h1 className="text-4xl sm:text-5xl font-extrabold py-3 text-gray-900 leading-tight">
              {data.mainTitle}
            </h1>
            <div className="space-y-4 mt-6">
              {data.features.map((feature, index) => (
                <p key={index} className="text-lg md:text-xl flex items-start text-gray-700">
                  <FaCheckCircle className="text-green-500 text-2xl mr-3 mt-1 flex-shrink-0" />
                  <span>{feature.text}</span>
                </p>
              ))}
            </div>
            
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700 transition duration-300">
                Start Consultation Today
            </button>
          </div>
        </div>
        <hr className="my-20 border-t-2 border-gray-200" />
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              Access convenient online Healthcare with DocTime
            </h2>
            <p className="text-xl md:text-2xl py-6 text-gray-600">
              {data.bottomDescription}
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <img
                src={data.bottomRightImageUrl || 'placeholder-2.jpg'}
                alt="Online healthcare convenience"
                className="w-full max-w-[350px] h-auto rounded-3xl shadow-xl border-4 border-blue-300 transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyDoc;