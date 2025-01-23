import React from "react";

const Nav = () => {
  return (
    <div className="bg-primary text-background px-8 h-14">
      <div className="container flex justify-between items-center h-full">
        <div>
          <h1 className="text-2xl">MediCart</h1>
        </div>
        <div className="flex gap-4">
          <p>
            <a href="">About</a>
          </p>

          <p className="hover:text-emerald-200 transition duration-200">
            <a href="">
              Carts <span>( 0 )</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
