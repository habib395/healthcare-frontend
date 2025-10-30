import React from "react";
import Button from "../../shared/Button"; // Assuming this is your reusable Button component

const Contact = () => {
  return (
    // Section background and responsive padding
    <div className="bg-blue-50 py-24 md:py-32">
      <div className="w-11/12 md:w-5/6 lg:w-3/4 max-w-5xl mx-auto">
        
        {/* 1. Heading Section */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-4">
            Get in touch with us
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Help us to help you. Send your query or question below and provide us with as many details as possible. We aim to reply to your query within 24 hours.
          </p>
        </div>
        
        {/* 2. Form Container (Card) */}
        <div className="bg-white rounded-2xl border-2 p-6 md:p-12 border-gray-100">
          
          <form className="space-y-6">
            
            {/* First Row: Name and Email (Side-by-side on desktop) */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-lg w-full border-2 px-2" // Added focus style
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-lg w-full border-2 px-2"
                required
              />
            </div>

            {/* Second Row: Subject */}
            <div>
              <input
                type="text"
                placeholder="What is your concern?"
                className="input input-bordered input-lg w-full border-2 px-2"
                required
              />
            </div>

            {/* Third Row: Message Box (Textarea for detailed messages) */}
            <div>
              <textarea
                placeholder="Your Query..."
                className="textarea textarea-bordered textarea-lg w-full h-48 border-2 px-2" 
                required
              />
            </div>
            
            {/* Button Section */}
            <div className="pt-4">
              {/* Using your reusable Button component with submission type and full width */}
              <Button 
                type="submit" 
                className="w-full text-lg py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </Button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;