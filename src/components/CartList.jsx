import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ItemsContext } from "../store/ItemContextProvider";

const CartList = (props) => {
  const { medicines, totalPrice } = useContext(ItemsContext);
  return (
    <>
      <div className="z-10 bg-background absolute top-40 right-[50%] translate-x-[50%] p-5 rounded">
        {medicines.length === 0 ? (
          <h1 className="text-xl">You have no order</h1>
        ) : (
          <>
            <h1 className="text-xl">Your Orders ({medicines.length})</h1>
            <div className="max-h-[50vh] overflow-y-auto my-4">
              <CartItem />
              <div className="flex text-xl gap-4">
                <p>Total Price : </p>
                <p>$ {totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-end">
          <button className="pl-4 py-2" onClick={props.hideCartHandler}>
            Close
          </button>
          {medicines.length !== 0 && (
            <button className="bg-accent border-2 border-textcolor rounded px-4 py-2 ml-4">
              Order
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;
