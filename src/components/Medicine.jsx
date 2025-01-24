import React, { useContext, useState } from "react";
import { ItemsContext } from "../store/ItemContextProvider";

const Medicine = ({ medicine }) => {
  //destrctured medicine
  const { id, name, price } = medicine;
  //get quantity form input
  const [quantity, setQuantity] = useState(0);
  //changing string to number
  const quantityNumber = +quantity;
  //this function is from ItemContextProvider
  const { addMedicine } = useContext(ItemsContext);

  const addToCart = () => {
    addMedicine({ id, name, price, quantity: quantityNumber });
  };

  return (
    <>
      <div className="medicine bg-slate-100 mb-4 border-4 rounded p-4 border-textcolor flex">
        <div className="w-3/4">
          <div className="text-lg">{medicine.name}</div>
          <div className="text-secondary">$ {medicine.price}</div>
          <div className="text-sm text-gray-600">{medicine.description}</div>
        </div>
        <div className="w-1/4 pl-12 pt-2 flex flex-col items-end">
          <input
            type="number"
            placeholder="x 0"
            min={1}
            max={50}
            className="block outline-none border-2 border-textcolor rounded min-w-14 max-w-14 pl-2"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="mt-4 bg-accent hover:bg-blue-300 px-3 py-1 border-2 border-textcolor rounded transition duration-200"
            onClick={addToCart}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Medicine;
