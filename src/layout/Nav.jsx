import React from "react";

const Nav = () => {
  return (
    <div className="bg-primary text-background flex justify-between items-center px-8 h-14">
      <div>
        <h1 className="text-2xl">MediCart</h1>
      </div>
      <div className="flex gap-4">
        <p>
          <a href="">About</a>
        </p>
        <p>
          <a href="">Products</a>
        </p>
        <p>
          <a href="">
            Carts <span className="text-accent">1</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Nav;
