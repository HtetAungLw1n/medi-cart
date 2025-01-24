import React from "react";

const CartItem = () => {
  return (
    <>
      <div className="medicine w-96 bg-slate-100 mb-4 border-4 rounded p-4 border-textcolor flex">
        <div className="w-3/4">
          <div className="text-lg">sdf</div>
          <div className="text-secondary">$ 456</div>
          <div className="mt-2 outline-none border-2 border-textcolor rounded min-w-14 max-w-14 pl-2">
            x 90
          </div>
        </div>
        <div className="w-1/4 pl-12 pt-2 flex flex-col items-end">
          <button className="w-20  bg-accent hover:bg-blue-300 px-3 py-1 border-2 border-textcolor rounded transition duration-200">
            Add
          </button>
          <button className="w-20 mt-4 bg-accent hover:bg-blue-300 px-3 py-1 border-2 border-textcolor rounded transition duration-200">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
