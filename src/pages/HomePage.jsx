import React from "react";
import SwipeArea from "../components/SwipeArea";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-b from-pink-50 to-orange-50 min-h-screen">
      <Header />
      <SwipeArea />
    </div>
  );
};

export default HomePage;
