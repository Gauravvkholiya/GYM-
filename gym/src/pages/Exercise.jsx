import React from "react";
import Navbar from "../components/Navbar";

const exercises = [
  {
    id: 1,
    name: "Squats",
    description:
      "Strengthen your legs and glutes with proper squats. Great for overall power.",
    img: "squat.jpg",
  },
  {
    id: 2,
    name: "Deadlifts",
    description:
      "Build core strength and back muscles. Perfect for total body conditioning.",
    img: "deadlift.jpg",
  },
  {
    id: 3,
    name: "Bench Press",
    description:
      "Improve your chest and arm strength with controlled bench press reps.",
    img: "benchpress.jpg",
  },
  {
    id: 4,
    name: "Pull-ups",
    description:
      "Enhance your upper body and grip strength with pull-ups.",
    img: "pullups.jpg",
  },
];

function Exercise() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-amber-100 px-6 py-12 md:px-20">
        {/* Page header */}
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Exercises
          </h1>
          <p className="text-lg text-amber-300 drop-shadow-md">
            Explore these core exercises designed to build strength and endurance.
          </p>
        </header>

        {/* Exercises Grid */}
        <a href="/askgpt">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto">
          {exercises.map(({ id, name, description, img }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border-amber-500 hover:shadow-amber-600 hover:scale-105 transition transform cursor-pointer"
            >
              <img
                src={img}
                alt={name}
                className="w-full h-60 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-400 mb-2">{name}</h2>
                <p className="text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </section>
        </a>
      </div>
    </>
  );
}

export default Exercise;
