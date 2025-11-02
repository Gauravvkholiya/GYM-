import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-900 text-amber-100 flex flex-col items-center justify-center px-6 py-16 md:px-20">
        <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-amber-300 max-w-xl mb-10 text-center drop-shadow-md">
          Got questions or want to join our fitness movement? Reach out to us!
        </p>

        <form className="w-full max-w-lg bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-gray-900 font-bold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
