import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();
  const ResInfo = useRestaurantMenu(params.resId);
  const [expandIndex, setExpandIndex] = useState(null);

  if (ResInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    ResInfo?.cards[2]?.card?.card?.info;

  const categories =
    ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="RestaurantMenu bg-white dark:bg-slate-800 min-h-screen py-8 px-4 lg:px-8">
      <div className="header-container mb-8 text-center">
        <img
          className="mx-auto w-40 lg:w-48 h-auto rounded-lg shadow-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <h1 className="text-2xl lg:text-3xl font-bold mt-4 text-gray-900 dark:text-white">{name}</h1>
        <h2 className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-2">
          {cuisines.join(", ")} | {costForTwoMessage}
        </h2>
      </div>

      <div className="categories-container space-y-6">
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            SHOWITEMS={index === expandIndex ? true : false}
            setexpandIndex={() => setExpandIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
