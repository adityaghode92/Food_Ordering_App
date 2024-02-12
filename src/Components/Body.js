import RestaurantCard, { withPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter.js";
import useResList from "../utils/useResList.js";
import Carousel from "./Carousel.js";


const Body = () => {

  const[listofRes,filteredRes,searchtext,setlistofRes,setfilteredRes,setsearchtext,carousel] = useResList();


    //for promoted restaurants
    //Higher order Component
    const Promotedrestaurant = withPromoted(RestaurantCard);
    
  //return
  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (

    //body container
    <div className="body-container bg-yellow-400 dark:bg-slate-800 ">
      

    <Carousel carousel={carousel} setfilterResList={setfilteredRes}/>

          
      <Filter
        filteredRes={filteredRes}
        searchtext={searchtext}
        listofRes={listofRes}
        setfilteredRes={setfilteredRes}
        setsearchtext={setsearchtext}
        setlistofRes={setlistofRes}
      />

      {/* res-contaianer */}
      <div className="res-container flex flex-wrap justify-center">
        {/* sending Data in USESTATE Variable{listofRes} TO RestaurantCard card one by one  */}
        {filteredRes.map((x) => (
          <Link key={x.info.id} to={"/resmenu/" + x.info.id}>
            {x.info.isOpen ? (
              <Promotedrestaurant resData={x} />
            ) : (
              <RestaurantCard resData={x} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;