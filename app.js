import React from "react";
import ReactDOM from "react-dom";

//React Core Method  
//createReactElement ==> js Object==> HTMLAllCollection={(render)}
/* const Heading = React.createElement("h1",
 {id:"Head"},
 "Hey BeTaaL is Here"); */

//React JSX Method
//JSX ==> createReactElement ==> js Object==> HTMLAllCollection={(render)}
//Bable is doing it

const Head = <h1 id="Head" className="normal">Hey BeTaaL is Here</h1>



//functional component
//both cases are equal
//case 1
const HeadingComp = ()=>{
    return <h1>Hey there from Heading 1</h1>
};

//casev 2
const Headingcomp2 =  ()=> (<h1 className="normal">
    {Head}
    {HeadingComp()}
    <HeadingComp></HeadingComp>
    <HeadingComp/>
    from  Heading 2
    </h1>);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomp2/>);
