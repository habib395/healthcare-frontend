import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { useGetDownloadInfoQuery } from "../provider/home/downloadApiSlice";

const Download = () => {
  const { data, isLoading, isError } = useGetDownloadInfoQuery();

  if (isLoading) {
    return (
      <div className="text-center py-20 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700">Loading download information...</h2>
      </div>
    );
  }

  if (isError || !data || !data.data) {
    return (
      <div className="text-center py-20 bg-gray-50">
        <h2 className="text-2xl font-bold text-red-600">
          Error loading download details.
        </h2>
      </div>
    );
  }

  const { title, subtitle, googlePlayUrl, appStoreUrl, mainImageUrl } = data.data;

  return (
    <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16 sm:py-40">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mt-4 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href={googlePlayUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white bg-black hover:bg-gray-800 transition duration-300 rounded-xl px-6 py-3 w-full sm:w-auto shadow-xl transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl">
                  <FaGooglePlay />
                </div>
                <div>
                  <p className="text-sm font-light">Get it on</p>
                  <h1 className="text-xl sm:text-2xl font-semibold">Google Play</h1>
                </div>
              </a>
              <a 
                href={appStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white bg-black hover:bg-gray-800 transition duration-300 rounded-xl px-6 py-3 w-full sm:w-auto shadow-xl transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl">
                  <AiFillApple />
                </div>
                <div>
                  <p className="text-sm font-light">Download on the</p>
                  <h1 className="text-xl sm:text-2xl font-semibold">App Store</h1>
                </div>
              </a>
            </div>
            
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <img
              src={mainImageUrl}
              alt="App Phone Mockup"
              className="max-w-full h-auto w-72 md:w-96 shadow-2xl rounded-3xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Download;