import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkTheme from "./DarkTheme";
import { useSelector } from "react-redux";

// import Grocery from "./Grocery";

export const Header = () => {
  const [Login, setLogin] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

  //subscribing store to the Header using useSelector
  const cartItems = useSelector((Store) => Store.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="Header  flex items-center bg-yellow-400 dark:bg-slate-800 justify-between  top-0 sticky z-50">
        <div className="logo-container rounded-lg  w-36">
          <img className="logo p-2  rounded-3xl" src={LOGO_URL} />
        </div>

        <div className="nav-items   flex items-center">
          <ul className="flex p-4 m-4 items-center">
            <li className="bg-orange-600 dark:bg-black rounded-full p-2">
              <DarkTheme />
            </li>
            <li className="px-4">NETWORK : {onlineStatus ? "🟩" : "❌"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <button
              className="login-btn bg-blue-500 rounded-lg py-2 px-4 font-bold text-white"
              onClick={() =>
                Login === "LOGIN" ? setLogin("LOGOUT") : setLogin("LOGIN")
              }
            >
              {Login}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
