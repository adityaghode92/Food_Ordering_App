import { useDispatch, useSelector } from "react-redux";
import CartitemList from "./CartitemList";
import { clearItems } from "../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  
  const handleFormat = () => {
    dispatch(clearItems());
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 py-8">
      <h1 className="font-bold text-3xl text-center text-gray-900 dark:text-white mb-6">
        Cart
      </h1>

      <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg">
            Your cart is empty.
          </p>
        ) : (
          <>
            <CartitemList items={cartItems} />
            <button
              className="clearcart-btn mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              onClick={handleFormat}
            >
              Remove Items
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
