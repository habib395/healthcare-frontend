import React from "react";
import Button from '../../shared/Button';
import { useGetMediaInfoQuery } from "../provider/home/mediaApiSlice";


const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    try {
        return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (error) {
        return "Invalid Date";
    }
};

const MassMedia = () => {
    const { data, isLoading, isError } = useGetMediaInfoQuery();

    if (isLoading) {
        return (
            <div className="bg-gray-100 py-20 text-center">
                <h2 className="text-3xl font-bold">Loading media information...</h2>
            </div>
        );
    }

    if (isError || !data?.data || data.data.length === 0) {
        return (
            <div className="bg-gray-100 py-20 text-center">
                <h2 className="text-3xl font-bold text-red-500">
                    Error loading media news or no data found.
                </h2>
            </div>
        );
    }

    const mediaItems = data.data;

    return (
        <div className="bg-gray-100 py-20">
            <div className="w-11/12  mx-auto"> 
                <h2 className="py-12 font-bold text-4xl md:text-6xl text-center md:text-left">
                    DocTime in Mass Media
                </h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    {mediaItems.map((item) => {
                        
                        const publishedDate = formatDate(item.publishedDate);

                        return (
                            <div 
                                key={item._id} 
                                className="card card-compact bg-white w-full  border hover:border-2 hover:border-blue-300 transition duration-300 transform hover:scale-[1.01] mx-auto"
                            >
                                <h2 className="py-4 pl-4 italic font-bold text-2xl text-blue-600">
                                    {item.outletName}
                                </h2>
                                <figure className="p-4">
                                    <img
                                        src={item.imageUrl}
                                        alt={`Cover from ${item.outletName}`}
                                        className="rounded-xl object-cover h-56 w-full" 
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-gray-500 text-base">
                                        {publishedDate}
                                    </h2>
                                    <p className="font-semibold text-xl md:text-2xl text-gray-800">
                                        {item.title}
                                    </p>
                                    <div className="card-actions justify-start mt-4">
                                        <a 
                                            href={item.readMoreUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <button 
                                                className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-none px-2"
                                            >
                                                Read more
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MassMedia;