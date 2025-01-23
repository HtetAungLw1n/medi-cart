import React from "react";
import MedicineList from "../components/MedicineList";
import ControlBar from "../components/ControlBar";
import Pagination from "../components/Pagination";

const Products = () => {
  return (
    <section className="bg-background text-textcolor px-8 py-4">
      <div className="container">
        <ControlBar />
        <MedicineList />
        <Pagination />
      </div>
    </section>
  );
};

export default Products;
