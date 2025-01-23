import React, { useState } from "react";
import Medicine from "./Medicine";
import medicines from "../store/medicines";

const MedicineList = () => {
  const [state, setMedicines] = useState(medicines);
  return (
    <>
      <div className="medicine-list mt-4">
        {state.map((medicine) => (
          <Medicine key={medicine.key} medicine={medicine} />
        ))}
      </div>
    </>
  );
};

export default MedicineList;
