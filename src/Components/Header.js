import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login=btn" onClick={()=> (Login === "LOGIN") ? setLogin("LOGOUT") : setLogin("LOGIN")}>{Login}</button>
        </ul>
      </div>
    </div>
    </>

  };

  
  export default Header