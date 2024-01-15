import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import Grocery from "./Grocery";

 export const Header = () => {

  const [Login,setLogin] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

    return <>
    <div className="Header bg-yellow-200 flex   justify-between">
      <div className="logo-container   w-36">
        <img className="logo p-2 " src={LOGO_URL}/>
      </div>
      <div className="nav-items   flex items-center" >
        <ul className="flex p-4 m-4">
          <li className="px-4">NETWORK : {onlineStatus?"🟩":"❌"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <button className="login-btn " onClick={()=> (Login === "LOGIN") ? setLogin("LOGOUT") : setLogin("LOGIN")}>{Login}</button>
        </ul>
      </div>
    </div>
    </>

  };

  
  export default Header