import RestaurantCard from "./RestaurantCard";
import resList from "../utils/constant";
import { useState } from "react";


const Body = () => {


const [listofRes,setlistofRes] = useState(resList);




    return (
      <div className="body-container">

            
            <button className="filter-btn" onClick={()=>{
                
                //filter logic
                console.log("working");
                const filteredRes = resList.filter((x)=>{ return x.info.avgRating > 4.5});
                console.log(filteredRes)
                setlistofRes(filteredRes);
            }}>FILTER-BTN</button>

        <div className="res-container">
        
        
         {listofRes.map((x)=>(
                <RestaurantCard key={x.info.id} resData={x} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;