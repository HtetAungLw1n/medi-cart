import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
  return (
    <>
      <div className="z-10 bg-background absolute top-40 right-[50%] translate-x-[50%] p-5 rounded">
        <h1 className="text-xl">Your Items</h1>
        <div className="max-h-[50vh] overflow-y-auto my-4">
          <CartItem />
        </div>
        <div className="flex text-xl gap-4">
          <p>Total Price : </p>
          <p>94832</p>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2" onClick={props.hideCartHandler}>
            Close
          </button>
          <button className="bg-accent border-2 border-textcolor rounded px-4 py-2">
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CartList;
