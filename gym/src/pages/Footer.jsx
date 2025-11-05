import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-amber-300 py-6 px-6 md:px-20 text-center space-y-4 md:text-left flex flex-col md:flex-col justify-between items-center shadow-inner">
      <div className="mb-4 md:mb-0 font-semibold">
        &copy; {new Date().getFullYear()} Pulse. All rights reserved.
      </div>

      <div className="flex space-x-6  text-amber-400 cursor-pointer">
        {/* Replace with actual social icons if needed */}
        <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-amber-600 transition">
          FB
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-amber-600 transition">
          TW
        </a>
        <a href="https://www.instagram.com"  aria-label="Instagram" className="hover:text-amber-600 transition">
          IG
        </a>
      </div>

      <div className="mt-4 md:mt-0 italic text-sm max-w-md">
        “Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.”
      </div>
    </footer>
  );
}

export default Footer;
