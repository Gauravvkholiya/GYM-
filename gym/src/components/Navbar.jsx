import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Track login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin"); // redirect after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="gym logo.jpg" // replace with your actual logo
          alt="Pulse"
          className="w-10 h-10 object-contain rounded-full border-2 border-amber-500"
        />
        <h1 className="text-amber-400 text-2xl font-extrabold tracking-wide select-none">
          Pulse
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-amber-200 font-semibold items-center">
        {[
          
          { path: "/exercise", label: "Exercise" },
          { path: "/askgpt", label: "Ask" },
          { path: "/about", label: "About" },
          { path: "/contact", label: "Contact" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `relative px-2 py-1 transition ${
                isActive
                  ? "text-amber-400 font-bold"
                  : "text-amber-200 hover:text-amber-400"
              }`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* ✅ Logout button only if user is signed in */}
        {user && (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition-colors shadow-md"
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile nav (optional) */}
      <div className="md:hidden text-amber-400 font-bold cursor-pointer select-none">
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
