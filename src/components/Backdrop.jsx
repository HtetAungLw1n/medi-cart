import React from "react";
import CartList from "./CartList";

const Backdrop = (props) => {
  return (
    <>
      {props.isShow && (
        <>
          <div
            className="bg-black opacity-50 absolute top-0 right-0 h-full w-full"
            onClick={props.hideCartHandler}
          ></div>
          <CartList hideCartHandler={props.hideCartHandler} />
        </>
      )}
    </>
  );
};

export default Backdrop;
