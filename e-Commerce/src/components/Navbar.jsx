import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-8">
      <h1 className="text-4xl font font-medium">Logo</h1>
      <div className="relative w-full max-w-[500px]">
        <input
          className="bg-[#f2f2f5] border-none outline-none px-6 py-3 rounded-[30px] w-full pr-10"
          type="text"
          placeholder="Search product"
        />
        <CiSearch
          className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
          size={20}
        />
      </div>

      <div className="flex gap-4">
        <div className="icon__wrapper w-[50px] border border-gray-400 h-[50px] grid place-items-center text-[22px] rounded-full">
          <CiUser />
        </div>
        <div className="flex relative">
          <div className="icon__wrapper w-[50px] border border-gray-400 h-[50px] grid place-items-center text-[22px] rounded-full">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
