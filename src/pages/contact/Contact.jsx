import React, { useState } from "react";
import { usePostContactMutation } from "../provider/home/contactApiSlice";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    concern: "",
    query: "",
  });

  const [postContact, { isLoading, isSuccess, isError, error }] =
    usePostContactMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting to submit form data:", formData); 
    
    const payload = formData;
    try {
      await postContact(payload).unwrap();
      setFormData({ name: "", email: "", concern: "", query: "" });
    } catch (err) {
      console.error("Failed to post contact:", err);
    }
  };

  return (
    <div className="bg-gray-50 py-24 md:py-32">
      <div className="w-11/12 md:w-5/6 lg:w-3/4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4">
            Get in touch with us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Help us to help you. Send your query or question below and provide
            as many details as possible. We aim to reply to your query within 24 hours.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="What is your concern?"
                name="concern" 
                value={formData.concern}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Query..."
                name="query"
                value={formData.query}
                className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 resize-none"
                onChange={handleInputChange}
                required
              />
            </div>
            {(isSuccess || isError) && (
                <div className={`p-4 rounded-lg font-semibold ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {isSuccess ? (
                        <p>✅ Message sent successfully! We will get back to you soon.</p>
                    ) : (
                        <p>❌ Failed to send message. Please check your connection and try again.</p>
                    )}
                </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-xl py-3 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold transition duration-300 shadow-xl hover:shadow-2xl disabled:bg-gray-400 disabled:shadow-none"
              >
                {isLoading ? (
                    <span className="flex items-center justify-center">
                        Sending...
                    </span>
                ) : (
                    "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;