import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-2 p-2">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="bg-red-500 text-white p-2 m-2 rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto my-5 border border-green-300">
        {cartItems.length === 0 && (
          <h1 className="m-20 text-xl">Cart is empty. Add items to cart.</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
