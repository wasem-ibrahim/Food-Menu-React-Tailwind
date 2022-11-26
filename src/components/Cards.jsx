import React from "react";

function Cards() {
  return (
    <div className="grid gap-4 mx-4 my-4 md:grid-cols-3 sm:grid-cols-1 ">
      <div className="relative w-full">
        <img
          className=" hover:brightness-100 duration-100 cursor-pointer w-full h-full object-cover brightness-[.6] rounded-lg"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <div className="absolute text-white top-1 left-2">
          <p className="text-3xl"> Sun's Out</p>
          <p className="text-xs">Through 8/26</p>
        </div>
        <button className="absolute p-1 text-white bg-red-600 rounded-full left-2 bottom-2">
          Order Now
        </button>
      </div>
      <div className="relative w-full">
        <img
          className=" hover:brightness-100 duration-100 cursor-pointer w-full h-full object-cover brightness-[.6] rounded-lg"
          src="https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <div className="absolute text-white top-1 left-2">
          <p className="text-3xl"> Steak Wins </p>
          <p className="text-xs">Through 8/28</p>
        </div>
        <button className="absolute p-1 text-white bg-red-600 rounded-full left-2 bottom-2">
          Order Now
        </button>
      </div>
      <div className="relative w-full">
        <img
          className="hover:brightness-100 duration-100 cursor-pointer w-full h-full object-cover brightness-[.6] rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1667682209935-b6c87cced668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
        <div className="absolute text-white top-1 left-2">
          <p className="text-3xl"> Burger Lovers </p>
          <p className="text-xs">Through 8/29</p>
        </div>
        <button className="absolute p-1 text-white bg-red-600 rounded-full left-2 bottom-2">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Cards;
