import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/KMRVLOGO.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black border-b border-gray-800 h-24">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Left - Logo & Title */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <img
              className="h-14 w-auto transition-transform duration-200 group-hover:scale-105"
              src={logo}
              alt="KMRV Logo"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Secure Electronic Health Records (EHR)
            </span>
          </div>

          {/* Right - Navigation Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-all duration-200 hover:bg-gray-800 rounded-lg"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-all duration-200 hover:bg-gray-800 rounded-lg"
              onClick={() => navigate("/AboutPage")}
            >
              About Us
            </button>
            <button
              className="bg-black text-white px-4 py-2 text-lg font-medium rounded-lg w-auto transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20 border border-gray-800 hover:border-gray-300"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              className="bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 text-lg font-medium rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-200 shadow-md hover:shadow-red-900/50"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;