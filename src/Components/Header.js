import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkTheme from "./DarkTheme";
import { useSelector } from "react-redux";

export const Header = () => {
  const [Login, setLogin] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((Store) => Store.cart.items);

  return (
    <>
      <div className="Header flex items-center bg-white dark:bg-slate-800 justify-between top-0 sticky z-50 shadow-md py-4 px-8">
        <div className="logo-container rounded-lg w-36">
          <img className="logo p-2 rounded-3xl object-center" src={LOGO_URL} alt="Logo" />
        </div>

        <div className="nav-items flex items-center relative">
          <ul className="flex p-4 m-0 items-center space-x-4">
            {Login === "LOGOUT" && (
              <li className="cursor-pointer text-gray-700 dark:text-white font-semibold bg-yellow-300 dark:bg-yellow-600 px-4 py-2 rounded-lg shadow-lg">
                User : Aditya
              </li>
            )}
            <li className="font-extrabold text-xl bg-gray-200 dark:bg-black rounded-full p-2 ml-4">
              <DarkTheme />
            </li>
            <li className="px-4">
              <Link className="text-gray-700 dark:text-white hover:text-blue-500" to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link className="text-gray-700 dark:text-white hover:text-blue-500" to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link className="text-gray-700 dark:text-white hover:text-blue-500" to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link className="text-gray-700 dark:text-white hover:text-blue-500" to="/cart">Cart : {cartItems.length}</Link>
            </li>
            <li className="px-4">
              <Link className="text-gray-700 dark:text-white hover:text-blue-500" to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">
              <button
                className="login-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={() => setLogin(Login === "LOGIN" ? "LOGOUT" : "LOGIN")}
              >
                {Login}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
