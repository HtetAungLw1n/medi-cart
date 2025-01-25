import React, { useState } from "react";
import Medicine from "./Medicine";
import medicines from "../store/medicines";

const MedicineList = (props) => {
  const [state, setMedicines] = useState(medicines);

  const filterdMedicines = state.filter((medicine) => {
    return medicine.name
      .toLowerCase()
      .includes(props.searchValue.toLowerCase());
  });
  return (
    <>
      <div className="medicine-list mt-4">
        {filterdMedicines.length > 0 ? (
          filterdMedicines.map((medicine) => (
            <Medicine key={medicine.id} medicine={medicine} />
          ))
        ) : (
          <h1>The medicine that you are looking for is not exist</h1>
        )}
      </div>
    </>
  );
};

export default MedicineList;
