import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  
  const handleFormat = ()=>{
    dispatch(clearItems());
  }

  return (
    <div>
      <h1 className="font-bold text-xl text-center m-4 p-4">Cart</h1>

      <div className="w-6/12 m-auto border border-solid border-black rounded p-4">
        <ItemList items={cartItems} />
        <button className="clearcart-btn bg-red-500 rounded-lg py-2 px-4 font-bold text-white" onClick={handleFormat}>
            FORMAT        </button>
      </div>
    </div>
  );
};

export default Cart;
