import React, { useState } from "react";
import MedicineList from "../components/MedicineList";
import ControlBar from "../components/ControlBar";
import Pagination from "../components/Pagination";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchFun = (search) => {
    setSearchValue(search);
  };

  return (
    <section className="bg-background text-textcolor px-8 py-4 pt-[7vh] min-h-[85vh]">
      <div className="container">
        <ControlBar searchFun={searchFun} />
        <MedicineList searchValue={searchValue} />
        <Pagination />
      </div>
    </section>
  );
};

export default Products;
