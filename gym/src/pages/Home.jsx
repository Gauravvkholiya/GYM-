import React from "react";
import Navbar from "../components/Navbar";
import heroImage from "../assets/heroImage.jpg";
import Footer from "./Footer";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin"); // redirect to signin page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="font-sans bg-gray-900 text-amber-100 min-h-screen flex flex-col relative">
      
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-screen px-6 text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl flex flex-col items-center space-y-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">We are Pulse</h1>
          <p className="text-xl drop-shadow-md">
            A fitness movement that is worth breaking a sweat for. Join us to
            transform your body and mind.
          </p>
          <a href="/Exercise"><button className="rounded-lg bg-amber-600 hover:bg-amber-700 px-6 py-3 text-xl font-semibold shadow-lg transition"
          >
            Explore Exercises
          </button></a>
          <blockquote className="italic text-amber-300 mt-6 drop-shadow-md max-w-md">
            "Push yourself because no one else is going to do it for you."
          </blockquote>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800/80 py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Strength",
              desc: "Build muscle, improve endurance, and feel stronger every day.",
            },
            {
              title: "Motivation",
              desc: "Stay motivated with our community and reach goals faster together.",
            },
            {
              title: "Consistency",
              desc: "Train regularly with simple routines that are easy to follow.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              <h2 className="text-2xl font-bold mb-2 text-amber-400">{title}</h2>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-12 text-center px-6">
        <p className="text-lg italic text-amber-300 max-w-2xl mx-auto">
          "Fitness is not about being better than someone else. It's about being
          better than you used to be."
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
