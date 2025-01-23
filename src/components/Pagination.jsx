import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-end gap-4">
      <button className="hover:text-blue-300 transition duration-200">L</button>
      <div className="bg-accent px-3 border-2 border-textcolor rounded">1</div>
      <button className="hover:text-blue-300 transition duration-200">R</button>
    </div>
  );
};

export default Pagination;
