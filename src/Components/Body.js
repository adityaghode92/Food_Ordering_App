import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_LINK } from "../utils/constant";
import { useState, useEffect } from "react";

const Body = () => {
  //useState variable list of restaurants
  const [listofRes, setlistofRes] = useState([]);

  const [filteredRes, setfilteredRes] = useState([]);

  //usestate variable for SearchText
  const [searchtext,setsearchtext] = useState("");
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
    <div className="body-container">
      
      <div className="Searching">
      <input id="Searchbar" type="text" value={searchtext} onChange={ (e)=>{setsearchtext(e.target.value);   }
            }  ></input>
      <button className="Search-btn" onClick={()=> {
        //filter logic for search 
        //Search Input
        //filter searched rearch restaurants & Update the UI
        const searchedList = listofRes.filter((x)=>{
          return x.info.name.toLowerCase().includes(searchtext.toLowerCase());
          });
        setfilteredRes(searchedList); 
        }} 
        >Search</button>
        </div>


      {/* Top Rated Button */}
      <button
        className="toprated-btn"
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

      {/* res-contaianer */}
      <div className="res-container">
        {/* sending Data in USESTATE Variable{listofRes} TO RestaurantCard card one by one  */}
        {filteredRes.map((x) => (
          <RestaurantCard key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
