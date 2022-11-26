import React from "react";

function Hero() {
  return (
    <div className="px-4 py-4">
      {/* Main photo */}
      <div className="relative w-full">
        <img
          className="object-cover h-[600px] w-full brightness-50 hover:brightness-100 duration-100 cursor-pointer"
          src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600"
        ></img>
        <div className="absolute ml-2 text-6xl text-white top-32 w-96">
          The
          <span className="font-bold text-red-600 "> Best Food </span>
          Delivers
        </div>
      </div>
      {/* small cards: */}
    </div>
  );
}

export default Hero;
