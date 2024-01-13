import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

 export const Header = () => {

  const [Login,setLogin] = useState("LOGIN");

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=> (Login === "LOGIN") ? setLogin("LOGOUT") : setLogin("LOGIN")}>{Login}</button>
        </ul>
      </div>
    </div>
    </>

  };

  
  export default Header