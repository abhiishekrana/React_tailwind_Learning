import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);


  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h1 className="font-bold text-xl">Cart - {cartItems.length}</h1>
      {cartItems.map((item, index) => {
        return (  // Add return here and use a key
          <div key={index} className="max-w-5xl mx-auto mt-10">
            <div className="border border-gray-600 rounded-md p-5">
              <img className="w-32" src={item.image} alt={item.title} /> 
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p className="font-bold text-gray-700">Price: {item.price}</p>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
