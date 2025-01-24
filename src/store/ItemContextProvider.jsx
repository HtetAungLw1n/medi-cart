import { createContext, useReducer } from "react";

export const ItemsContext = createContext();

const reducer = (state, action) => {
  if (action.type === "ADD_MEDICINE") {
    const updateTotalPrice =
      state.totalPrice + action.medicine.price * action.medicine.quantity;

    let updatedMedicines;

    const existMedicineIndex = state.medicines.findIndex(
      (item) => item.id === action.medicine.id
    );

    const existMedicine = state.medicines[existMedicineIndex];

    if (existMedicine) {
      const updateMedcine = {
        ...existMedicine,
        quantity: existMedicine.quantity + action.medicine.quantity,
      };

      updatedMedicines = [...state.medicines];
      updatedMedicines[existMedicineIndex] = updateMedcine;
    } else {
      updatedMedicines = state.medicines.concat(action.medicine);
    }

    return {
      medicines: updatedMedicines,
      totalPrice: updateTotalPrice,
    };
  }
  if (action.type === "REMOVE_MEDICINE") {
    const existMedicineIndex = state.medicines.findIndex(
      (item) => item.id === action.id
    );

    const existMedicine = state.medicines[existMedicineIndex];

    const updateTotalPrice = state.totalPrice - existMedicine.price;

    let updatedMedicines;

    if (existMedicine.quantity === 1) {
      updatedMedicines = state.medicines.filter(
        (item) => item.id !== action.id
      );
    } else {
      const updatedMedicine = {
        ...existMedicine,
        quantity: existMedicine.quantity - 1,
      };
      updatedMedicines = [...state.medicines];
      updatedMedicines[existMedicineIndex] = updatedMedicine;
    }

    return {
      medicines: updatedMedicines,
      totalPrice: updateTotalPrice,
    };
  }
};

const ItemContextProvider = (props) => {
  const [medicineState, dispatchMedicine] = useReducer(reducer, {
    medicines: [],
    totalPrice: 0,
  });

  const addMedicineHandler = (medicine) => {
    dispatchMedicine({ type: "ADD_MEDICINE", medicine });
  };
  const removeMedicineHandler = (id) => {
    dispatchMedicine({ type: "REMOVE_MEDICINE", id });
  };

  const values = {
    medicines: medicineState.medicines,
    totalPrice: medicineState.totalPrice,
    addMedicine: addMedicineHandler,
    removeMedicine: removeMedicineHandler,
  };

  return (
    <>
      <ItemsContext.Provider value={values}>
        {props.children}
      </ItemsContext.Provider>
    </>
  );
};

export default ItemContextProvider;
