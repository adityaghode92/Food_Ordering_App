import { useState } from "react";

const DarkTheme = ()=>{

const [theme,setTheme] = useState("🌙");

    return(
        <div ><button className="cursor-pointer " onClick={()=>{
            document.documentElement.classList.toggle("dark");
            theme==="🌙"?setTheme("☀️"):setTheme("🌙");
        }}><h1 className="text-full">{theme}</h1>
            
            </button></div>
    )
}

export default DarkTheme;