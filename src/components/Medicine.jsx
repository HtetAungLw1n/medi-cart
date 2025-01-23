import React from "react";

const Medicine = ({ medicine }) => {
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
          />
          <button className="mt-4 bg-accent hover:bg-blue-300 px-3 py-1 border-2 border-textcolor rounded transition duration-200">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Medicine;
