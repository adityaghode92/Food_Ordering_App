import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  //form map method
  const { resData } = props;

  //Destruturing
  const { name, cuisines, avgRating, sla } = resData?.info;

  //return statement
  return (
    //res-card for individual card
    <div className="res-card  w-[250px]  p-6 m-3 border border-solid border-black shadow-lg rounded-lg hover:scale-95 ">
      {/* //image form cloudinaryImageId CDN_LINK */}
      <div className="justify-center flex">
        <img
          className="res-logo w-[230] h-[150] rounded-lg "
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

export default RestaurantCard;
