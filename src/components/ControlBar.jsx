import React from "react";
import Fliter from "../components/Fliter";
import Pagination from "./Pagination";

const ControlBar = () => {
  return (
    <>
      <div className="flex justify-between items-start py-4">
        <Fliter />
        <div>
          <Pagination />
          <input
            type="text"
            placeholder="search"
            className="block outline-none border-2 border-textcolor rounded pl-2"
          />
        </div>
      </div>
    </>
  );
};

export default ControlBar;
