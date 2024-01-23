// import UserClass from "./UserClass.js";

import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  //  accesing userContext
  
    const { UserLoggedIn } = useContext(UserContext);

  

  return (
    <>
      <h2>Hey there this is About us page</h2>
      {console.log("check")}
     
      <h1 className="font-bold">User: {UserLoggedIn} </h1>
      {/* <UserClass name={"sanket"}/> */}
    </>
  );
};

export default About;
