import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-amber-100 px-6 py-16 md:px-20 flex flex-col  mx-auto">
        {/* Page Title */}
        <h1 className="text-6xl font-extrabold mb-12 text-center md:text-left drop-shadow-xl relative inline-block">
          About <span className="text-amber-400">CultGym</span>
          <span className="absolute left-0 -bottom-3 w-20 h-1 bg-amber-400 rounded-full"></span>
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Content */}
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border-l-8 border-amber-500 hover:shadow-amber-600 transition duration-300">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                CultGym is dedicated to building a supportive community where
                fitness is more than just a hobby — it’s a lifestyle. We empower
                you to reach your goals through tailored programs, expert
                guidance, and motivation.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border-l-8 border-amber-500 hover:shadow-amber-600 transition duration-300">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">
                Our Philosophy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Fitness is about overcoming challenges and unlocking your
                potential. At CultGym, we promote balance, strength, and
                perseverance, ensuring you stay inspired throughout your fitness
                journey.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg border border-amber-600 hover:shadow-amber-500 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80"
              alt="fitness motivation"
              className="w-full object-cover h-full max-h-[480px]"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
