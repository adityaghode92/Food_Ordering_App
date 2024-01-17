import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkTheme from "./DarkTheme";
// import Grocery from "./Grocery";

 export const Header = () => {

  const [Login,setLogin] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

    return <>
    <div className="Header  flex items-center bg-yellow-400 dark:bg-slate-800 justify-between">
      <div className="logo-container rounded-lg  w-36">
        <img className="logo p-2  rounded-3xl" src={LOGO_URL}/>
      </div>

      <div className="nav-items   flex items-center" >
        <ul className="flex p-4 m-4 items-center">
          <li><DarkTheme/></li>
          <li className="px-4">NETWORK : {onlineStatus?"🟩":"❌"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <button className="login-btn bg-blue-500 rounded-lg  px-4 font-bold text-white" onClick={()=> (Login === "LOGIN") ? setLogin("LOGOUT") : setLogin("LOGIN")}>{Login}</button>
        </ul>
      </div>
    </div>
    </>

  };

  
  export default Header