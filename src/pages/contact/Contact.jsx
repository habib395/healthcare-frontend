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
    console.log(formData);
    const payload = formData;
    try {
      await postContact(payload).unwrap();
      setFormData({ name: "", email: "", concern: "", query: "" });
    } catch (err) {
      console.error("Failed to post contact:", err);
    }
  };

  return (
    <div className="bg-blue-50 py-24 md:py-32">
      <div className="w-11/12 md:w-5/6 lg:w-3/4 max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-4">
            Get in touch with us
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Help us to help you. Send your query or question below and provide
            us with as many details as possible. We aim to reply to your query
            within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl border-2 p-6 md:p-12 border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name} 
                className="input input-bordered input-lg w-full border-2 px-2"
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email} 
                className="input input-bordered input-lg w-full border-2 px-2"
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
                className="input input-bordered input-lg w-full border-2 px-2"
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Query..."
                name="query"
                value={formData.query} //
                className="textarea textarea-bordered textarea-lg w-full h-48 border-2 px-2"
                onChange={handleInputChange}
                required
              />
            </div>

            {isSuccess && (
              <p className="text-green-600 font-bold mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {isError && (
              <p className="text-red-600 font-bold mt-2">
                ❌ Failed to send message.
              </p>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-lg py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition duration-300 shadow-md hover:shadow-lg"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
