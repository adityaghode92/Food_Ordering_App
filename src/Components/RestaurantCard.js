import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  // Destructuring
  const { resData } = props;
  const { name, cuisines, avgRating, sla } = resData?.info;

  return (
    // Restaurant card for individual restaurant
    <div className="res-card bg-white dark:bg-slate-700 w-[250px] h-[400px] p-4 m-3 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      {/* Image from Cloudinary CDN_LINK */}
      <div className="flex justify-center mb-4">
        <img
          className="res-logo w-full h-[150px] object-cover rounded-md"
          alt="Restaurant logo"
          src={CDN_LINK + resData.info.cloudinaryImageId}
        />
      </div>
      {/* Restaurant Details */}
      <div className="res-details">
        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{name}</h4>
        <h5 className="text-gray-600 dark:text-gray-300 mb-1">{cuisines.slice(0, 5).join(", ")}</h5>
        <h5 className="text-yellow-500 font-semibold mb-1">⭐ {avgRating}</h5>
        <h5 className="text-gray-600 dark:text-gray-300">{sla.slaString}</h5>
      </div>
    </div>
  );
};


export default RestaurantCard;
