import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItem"
          key={item?.card?.info?.id}
          className="flex justify-between p-2 border-b-2 m-2"
        >
          <div className="w-9/12 text-left">
            <div className="font-bold py-2">{item?.card?.info?.name}</div>
            <div>
              - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </div>
            <p className="text-xs py-2">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 m-4">
            <button
              className="absolute shadow-xl bg-slate-800 mx-6 px-2 py-1 text-white rounded-md"
              onClick={() => handleAdd(item)}
            >
              add +
            </button>
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
