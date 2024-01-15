import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { API_LINK } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  //useState variable list of restaurants
  const [listofRes, setlistofRes] = useState([]);

  const [filteredRes, setfilteredRes] = useState([]);

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

    <div className="body-container bg-yellow-200 dark:bg-slate-800 ">
     
      <div className="filters  flex justify-end gap-3 p-2  ">
        <input
          className="Searchbar  border border-solid border-black "
          type="text"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);s
          }}
        ></input>
        <button
          className="Search-btn   px-4 py-2 rounded-lg   bg-blue-300"
          onClick={() => {
            //filter logic for search
            //Search Input
            //filter searched rearch restaurants & Update the UI
            const searchedList = listofRes.filter((x) => {
              return x.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase());
            });
            setfilteredRes(searchedList);
          }}
        >
          Search
        </button>
      
     
      {/* Top Rated Button */}
      <button
        className="toprated-btn  px-4 py-2 rounded-lg   bg-green-500 "
        onClick={() => {
          //filter logic for top rated
          const topratedRes = listofRes.filter((x) => {
            return x.info.avgRating > 4.2;
          });
          //fileter done and stored in (topratedRes)
          //updating USESTATE Variable to (topratedRes)
          setfilteredRes(topratedRes);
        }}
      >
        Top Rated
      </button>

      </div>

      {/* res-contaianer */}
      <div className="res-container flex flex-wrap justify-center">
        {/* sending Data in USESTATE Variable{listofRes} TO RestaurantCard card one by one  */}
        {filteredRes.map((x) => (
          <Link key={x.info.id} to={"/resmenu/" + x.info.id}>
            <RestaurantCard resData={x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
