import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-end gap-4 mb-5">
      <button className="hover:text-blue-300 transition duration-200 px-3">
        L
      </button>
      <div className="bg-accent px-3 border-2 border-textcolor">1</div>
      <button className="hover:text-blue-300 transition duration-200 px-3">
        R
      </button>
    </div>
  );
};

export default Pagination;
