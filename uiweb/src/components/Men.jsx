import React, { useState } from "react";
import Accordian from "./Accordian";

const Men = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Men</h1>
      {["Brands", "Men", "Gender", "Kid"].map((title, index) => (
        <Accordian 
        key={index}
         title={title}
         open = {index===open?true:false}
         setOpen={(()=>setOpen(index))}
         />
      ))}
    </div>
  );
};

export default Men;
