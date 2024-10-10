import React, { useState } from "react";
import ListItems from "./ListItems";

const Accordian = ({title,open,setOpen}) => {
  const toogleAccordian=()=>{
    // setOpen(!open)
    setOpen()
  }
  return (
    <div className="my-1 shadow-md border border-gray-200 p-2 rounded-md  w-64">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button onClick={toogleAccordian} className="bg-black text-white px-2 rounded-md">show</button>
      </div>
      {
        open&&<ListItems/>
      }
      
    </div>
  );
};

export default Accordian;
