import React from "react";
import Fliter from "../components/Fliter";
import Pagination from "./Pagination";

const ControlBar = (props) => {
  return (
    <>
      <div className="flex justify-between items-start py-4">
        <Fliter />
        <div>
          <Pagination />
          <input
            type="text"
            placeholder="search"
            className="block outline-none border-2 border-textcolor pl-2 py-1"
            onChange={(e) => {
              props.searchFun(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ControlBar;
