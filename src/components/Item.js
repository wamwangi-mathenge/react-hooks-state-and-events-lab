import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState("Add to Cart");

  const handleClick = () => {
    setCart("Remove From Cart")
  }




  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{ cart }</button>
    </li>
  );
}

export default Item;
