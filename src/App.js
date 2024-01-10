import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js"
import Body from "./Components/Body.js";










const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
