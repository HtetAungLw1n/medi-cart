import React, { useContext } from "react";
import { ItemsContext } from "../store/ItemContextProvider";

const CartItem = () => {
  const { medicines } = useContext(ItemsContext);
  return (
    <>
      {medicines.map((medicine) => (
        <div className="medicine w-96 bg-slate-100 mb-4 border-4 rounded p-4 border-textcolor flex">
          <div className="w-3/4">
            <div className="text-lg">{medicine.name}</div>
            <div>$ {medicine.price}</div>
            <div className="mt-2 flex items-center gap-4">
              <div className="text-secondary">
                ${medicine.price * medicine.quantity}
              </div>
              <div className=" outline-none border-2 border-textcolor rounded min-w-14 max-w-14 pl-2">
                x {medicine.quantity}
              </div>
            </div>
          </div>
          <div className="w-1/4  flex flex-col items-end">
            <button className="w-20 bg-accent hover:bg-blue-300 px-3 py-1 border-2 border-textcolor rounded transition duration-200">
              Add
            </button>
            <button className="w-20 mt-4 bg-accent hover:bg-blue-300 px-3 py-1 border-2 border-textcolor rounded transition duration-200">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
