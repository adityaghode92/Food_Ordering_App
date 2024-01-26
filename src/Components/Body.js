import RestaurantCard, { withPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { API_LINK } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";Filter
import Filter from "./Filter.js";

const Body = () => {
  //useState variable list of restaurants
  const [listofRes, setlistofRes] = useState([]);

  const [filteredRes, setfilteredRes] = useState([]);

  //for promoted restaurants
  const Promotedrestaurant = withPromoted(RestaurantCard);

  //usestate variable for SearchText
  const [searchtext, setsearchtext] = useState("");

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  //API fectch
  const fetchData = async () => {
    const data = await fetch(API_LINK);

    const json = await data.json();
    //data fetching done
    //giving data to useState (list of restaurnats)
    setlistofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //return
  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    //body container

    <div className="body-container bg-yellow-400 dark:bg-slate-800 ">
      
      <Filter filteredRes={filteredRes}  searchtext={searchtext} listofRes={listofRes}
               setfilteredRes={setfilteredRes} setsearchtext={setsearchtext} setlistofRes={setlistofRes}/>

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
