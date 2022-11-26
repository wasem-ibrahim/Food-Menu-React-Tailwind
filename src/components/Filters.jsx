import React, { useState } from "react";
import { data } from "../data/data";

function Filters() {
  const [food, setFood] = useState(data);

  const arrayOfCards = food.map((item) => {
    return (
      <div
        key={item.id}
        className="overflow-hidden rounded-lg shadow-lg hover:scale-105 duration-300"
      >
        <img src={item.image} className="object-cover h-[400px] w-full cursor-pointer  "></img>
        <div className="flex items-center justify-between px-2 py-2 font-bold">
          <h1> {item.name}</h1>
          <button className="px-2 text-white bg-red-600 border-2 border-red-600 border-solid rounded-2xl">
            {item.price}
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="w-screen px-2">
        <h1 className="flex justify-center pb-2 text-2xl font-bold text-red-600 md:text-6xl">
          Top Rated Menu Items
        </h1>
        {/* Filter By Type */}
        <h1 className="py-1 text-4xl pb-4"> Fliter By Type:</h1>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white "
            onClick={() => setFood(() => data.filter((item) => item))}
          >
            All
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white"
            onClick={() => setFood(() => data.filter((item) => item.category === "burger"))}
          >
            Burgers
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white"
            onClick={() => setFood(() => data.filter((item) => item.category === "pizza"))}
          >
            Pizza
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white"
            onClick={() => setFood(() => data.filter((item) => item.category === "salad"))}
          >
            Salad
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white"
            onClick={() => setFood(() => data.filter((item) => item.category === "chicken"))}
          >
            Chicekn
          </button>
        </div>

        {/* Filter By Price */}
        <h1 className="text-4xl py-4"> Filter By Price:</h1>

        <div className="grid grid-cols-3 gap-3 md:grid-cols-5 pb-4">
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white "
            onClick={() => setFood(() => data.filter((item) => item))}
          >
            All
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white "
            onClick={() => setFood(() => data.filter((item) => item.price === "$"))}
          >
            $
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white "
            onClick={() => setFood(() => data.filter((item) => item.price === "$$"))}
          >
            $$
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white "
            onClick={() => setFood(() => data.filter((item) => item.price === "$$$"))}
          >
            $$$
          </button>
          <button
            className="p-1 px-4 text-red-600 duration-100 border-2 border-red-700 border-solid rounded-full hover:bg-red-600 hover:text-white "
            onClick={() => setFood(() => data.filter((item) => item.price === "$$$$"))}
          >
            $$$$
          </button>
        </div>

        {/* Filters Cards */}
        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 lg:grid-cols-3">
          {arrayOfCards}
        </div>
      </div>
    </>
  );
}

export default Filters;
