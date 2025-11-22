import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-r from-pink-50 to-purple-50 border-b-2 border-pink-100 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-3xl">🐾</span>
          <div>
            <h1 className="text-2xl font-bold text-pink-500">Pawdners</h1>
            <p className="text-xs text-gray-500 -mt-1">Find your purrfect match</p>
          </div>
        </div>

        {/* Optional navigation button */}
        <button
          onClick={() => navigate("/profile")}
          className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Header;
