import React from "react";
import MedicineList from "../components/MedicineList";

const Products = () => {
  return (
    <section className="bg-background text-textcolor px-4">
      <p className="text-2xl">Medicine</p>
      <MedicineList />
    </section>
  );
};

export default Products;
