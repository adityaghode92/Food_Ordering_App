import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  //form map method
  const { resData } = props;

  //Destruturing
  const { name, cuisines, avgRating, sla } = resData?.info;

  //return statement
  return (
    //res-card for individual card
    <div className="res-card bg-yellow-200 dark:bg-slate-700 w-[250px]  p-6 m-3  shadow-2xl rounded-lg hover:scale-95 ">
      {/* //image form cloudinaryImageId CDN_LINK */}
      <div className="justify-center flex">
        <img
          className="res-logo w-[230] h-[150] rounded-sm"
          alt="res-logo"
          src={CDN_LINK + resData.info.cloudinaryImageId}
        />
      </div>
      {/* //res Details */}
      <div className="res-details">
        <h4 className="font-bold py-2 text-lg">{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla.slaString}</h5>
      </div>
    </div>
  );
};


export const withPromoted = (restaurant)=>{
  return (props)=>{
      return(
        <div>
          <label className="absolute ml-6 mt-3 bg-black text-yellow-100 p-2  rounded-lg">  Open Now</label>
          <RestaurantCard {...props}/>
        </div>
      )
  }
}

export default RestaurantCard;
