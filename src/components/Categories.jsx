import React from "react";
import { useState } from "react";
import { categories } from "../data/data";

function Categories() {
  const categoriesArray = categories.map((item) => {
    return (
      <div key={item.id} className="border-2 grid place-items-center cursor-pointer ">
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
      </div>
    );
  });
  return (
    <>
      <div className="mx-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
        {categoriesArray}
      </div>
    </>
  );
}

export default Categories;
