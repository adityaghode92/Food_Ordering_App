// import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import Contact from "./Components/Contact.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore.js";
import Cart from "./Components/Cart.js";


// import Grocery from "./Components/Grocery.js";

// lazy loading
// const About = lazy(() => import("./Components/About.js"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{UserLoggedIn: "Default User"}}>
    <div className="App dark:bg-slate-800 dark:text-yellow-300 pb-18">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/resmenu/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense>
      //       <Grocery />
      //     </Suspense>
      //   ),
      //   errorElement: <Error />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
