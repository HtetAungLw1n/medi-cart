import React from "react";
import Fliter from "../components/Fliter";
import Pagination from "./Pagination";

const ControlBar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <div>
          <p className="text-2xl mb-4">Common Dose</p>
          <Fliter />
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            className="block outline-none border-2 border-textcolor rounded pl-2 mb-4"
          />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default ControlBar;
