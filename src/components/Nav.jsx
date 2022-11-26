import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill, BsSearch } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

function Nav() {
  const [show, setShow] = useState(false);
  function showDrawer() {
    setShow((prev) => !prev);
  }
  return (
    <div className="pt-2 mx-4">
      <div className="flex justify-between w-full sm:w-full">
        {/* left navbard area */}
        <div className="flex items-center gap-2 ">
          <AiOutlineMenu size={30} onClick={showDrawer} />
          <div className="text-2xl text-black sm:text-3xl lg:text-4xl">
            <span>Best</span> <span className="font-bold"> Food </span>
          </div>
          <div className="items-center hidden gap-1 p-1 text-black bg-gray-200 lg:flex rounded-3xl">
            <span className="p-1 text-white bg-black rounded-2xl">Delivery</span>
            <span> Pickup</span>
          </div>
        </div>
        {/* Search area */}
        <div className="flex items-center p-2 mr-2 bg-gray-200 w-28 rounded-3xl sm:w-40 md:w-96 lg:w-[24rem] ">
          <BsSearch size={20} className="mr-2" />
          <input
            placeholder="Search Food"
            className="w-20 text-sm bg-transparent focus:outline-none md:text-lg sm:w-40 md:w-96 lg:w-[24rem] "
          ></input>
        </div>
        {/* Cart area */}
        <div className="flex items-center p-2 text-white bg-black rounded-full cursor-pointer ">
          <BsFillCartFill />
          <button className="ml-1 text-sm text-white">Cart</button>
        </div>
        {/* Mobile Menu */}
        {/* Overlay */}
        {show && (
          <div className="fixed top-0 left-0 z-10 w-full h-full duration-300 bg-black/80"> </div>
        )}
        {/* show or hide the drawer */}
        <div
          className={
            show
              ? "bg-white fixed w-[300px] h-full z-10 top-0 left-0 duration-300"
              : "bg-white fixed w-[300px] h-full z-10 top-0 left-[-100%] duration-300"
          }
        >
          <div className="flex justify-between m-4 text-black">
            <h1 className="text-3xl">
              Best <span className="font-bold">Eats </span>
            </h1>
            <AiOutlineClose onClick={showDrawer} size={30} className="cursor-pointer" />
          </div>
          <div className="flex items-center ml-2 text-red-black">
            <TbTruckDelivery size={30} />
            <h1 className="p-4 text-red-black "> Orders </h1>
          </div>
          <div className="flex items-center ml-2 text-red-black">
            <MdFavorite size={30} />
            <h1 className="p-4 text-red-black"> Liked </h1>
          </div>
          <div className="flex items-center ml-2 text-red-black">
            <FaWallet size={30} />
            <h1 className="p-4 "> Wallet </h1>
          </div>
          <div className="flex items-center ml-2 text-red-black">
            <MdHelp size={30} />
            <h1 className="p-4"> About </h1>
          </div>
          <div className="flex items-center ml-2 text-red-black">
            <AiFillTag size={30} />
            <h1 className="p-4"> Prices </h1>
          </div>
          <div className="flex items-center ml-2 text-red-black">
            <BsFillSaveFill size={30} />
            <h1 className="p-4"> Delivery </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
