import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AskGPT from "./pages/AskGPT";
import Chatbot from "./pages/chatbot";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Track the Firebase user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Routes>
        {/* ✅ If logged in, show these routes */}
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/askgpt" element={<AskGPT />} />
            {/* Optional: Add chatbot only when logged in */}
            {/* <Route path="/chatbot" element={<Chatbot />} /> */}
            {/* Redirect logged-in users from /signin or /signup to home */}
            <Route path="/signin" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            {/* ❌ If not logged in, show only SignIn / SignUp */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Redirect any other route to SignIn */}
            <Route path="*" element={<Navigate to="/signin" />} />
          </>
        )}
      </Routes>

      {/* ✅ Only show chatbot if user is logged in */}
      {user && <Chatbot />}
    </div>
  );
}

export default App;
