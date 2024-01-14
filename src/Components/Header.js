import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";

 export const Header = () => {

  const [Login,setLogin] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

    return <>
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>NETWORK : {onlineStatus===true?"🟩":"❌"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button className="login-btn" onClick={()=> (Login === "LOGIN") ? setLogin("LOGOUT") : setLogin("LOGIN")}>{Login}</button>
        </ul>
      </div>
    </div>
    </>

  };

  
  export default Header