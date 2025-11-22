import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full mt-20">
      <div className="animate-bounce text-4xl mb-4">🐾</div>
      <p className="text-gray-500">Loading...</p>
    </div>
  );
};

export default Loader;
