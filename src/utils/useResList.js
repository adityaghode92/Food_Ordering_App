import { API_LINK } from "./constant";
import { useState , useEffect } from "react";

const useResList = ()=>{

 //useState variable list of restaurants
 const [listofRes, setlistofRes] = useState([]);

 const [filteredRes, setfilteredRes] = useState([]);

 const [carousel,setCarousel]=useState([]);

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

   setCarousel(json.data?.cards[0]?.card?.card?.imageGridCards?.info);

   setlistofRes(
     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
          (a,b)=>{
            return a.info.sla.deliveryTime-b.info.sla.deliveryTime
          }
        ));

   setfilteredRes(
     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
      (a,b)=>{
        return a.info.sla.deliveryTime-b.info.sla.deliveryTime
      }
    )
   );
 };


 
  return [listofRes,filteredRes,searchtext,setlistofRes,setfilteredRes,setsearchtext,carousel];
}

export default useResList;