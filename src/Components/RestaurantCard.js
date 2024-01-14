import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  
  //form map method
    const { resData } = props;
     
  //Destruturing
    const {name, cuisines,avgRating,sla } = resData?.info
  
  //return statement
     return (
      //res-card for individual card
       <div className="res-card">
      {/* //image form cloudinaryImageId CDN_LINK */}
         <img
           className="res-logo"
           alt="res-logo"
           src={ CDN_LINK + resData.info.cloudinaryImageId}
         />
        
        {/* //res Details */}
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