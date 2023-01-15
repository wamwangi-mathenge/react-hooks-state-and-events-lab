import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectCategory, setSelectCategory] = useState("All");
  function HandleClickEvent(e) {
    setSelectCategory(e.target.value)
  }


  const itemDisplayAfterFilter = items.filter((item) => {
    if (selectCategory === "All") {
      return true
    } else {
      return item.category === selectCategory
    }
  })





  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={HandleClickEvent}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplayAfterFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
