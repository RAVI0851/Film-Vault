import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">MovieApp</h2>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-lg">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
