import { CDN_LINK } from "../utils/mockData";

const RestaurantCard = (props) => {
  
    const { resData } =props;
     
    const {name, cuisines,avgRating,sla } = resData?.info
   
     return (
       <div className="res-card">
         <img
           className="res-logo"
           alt="res-logo"
           src={ CDN_LINK + resData.info.cloudinaryImageId}
         />
   
         <div className="res-details">
           <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
           <h5>{avgRating}</h5> 
           <h5>{sla.slaString}</h5>
         </div>
       </div>
     );
   };
   

   export default RestaurantCard;