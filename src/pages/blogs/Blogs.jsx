import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { useGetBlogsInfoQuery } from "../provider/home/blogsApiSlice"; 


const Blogs = () => {
  const { 
    data: blogsResponse, 
    isLoading, 
    isError,
    error 
  } = useGetBlogsInfoQuery(); 

  const blogs = blogsResponse?.data || [];
  
  if (isLoading) {
    return (
        <div className="w-5/6 mx-auto py-20 text-center text-3xl font-bold">
            Blogs is loading...
        </div>
    );
  }

  if (isError) {
    console.error("Failed to fetch error:", error);
    return (
        <div className="w-5/6 mx-auto py-20 text-center text-red-600 text-3xl font-bold">
            Error loading blogs
        </div>
    );
  }

  return (
    <div className="w-5/6 mx-auto py-20">
        
        <div className="text-center md:text-left mb-12"> 
            <h2 className="text-blue-600 pt-10 pb-2 text-lg uppercase font-semibold tracking-widest">
                Recent Blogs
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
                Read Our Latest Insights <br className="hidden md:inline"/>
                from Health Experts
            </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4">
            {blogs.map((blog) => (
                <div key={blog._id} 
                     className="card bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden min-w-[350px]">
                    <figure className="relative h-[220px] overflow-hidden">
                        <img
                            src={blog?.imageUrl} 
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                         <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            {blog.category} 
                        </div>
                    </figure>
                    
                    <div className="p-6 space-y-3"> 
                        
                        <div className="flex items-center justify-between text-gray-500 text-sm border-b pb-3">
                            <div className="flex gap-2 items-center font-medium">
                                <span className="text-blue-500"><FaStethoscope /></span>
                                <h2>{blog.author}</h2>
                            </div>
                            <div className="text-gray-400">
                                {new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold leading-snug text-gray-900 hover:text-blue-600 transition duration-300">
                            {blog.title}
                        </h2>
                        <p className="text-base text-gray-600 line-clamp-3">
                            {blog.excerpt}
                        </p>
                        <div className="pt-2">
                            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
                                Read More ({blog.readTime}) 
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Blogs;