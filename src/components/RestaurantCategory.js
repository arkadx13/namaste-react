import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, index, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    showItems ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto bg-gray-50 shadow-lg my-4 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>{"🔽"}</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
