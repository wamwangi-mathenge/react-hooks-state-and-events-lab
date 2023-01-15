import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState("");

  function HandleClickEvent(e) {
    cart ? setCart("") : setCart("in-cart")
  }




  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={HandleClickEvent} className="add">{ cart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
