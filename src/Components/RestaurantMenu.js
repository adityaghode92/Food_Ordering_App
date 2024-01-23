import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();
  // console.log(params);

  const ResInfo = useRestaurantMenu(params.resId);

  const [expandIndex, setexpandIndex] = useState(null);

  //first render starts from here
  if (ResInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    ResInfo?.cards[0]?.card?.card?.info;

  // console.log( ResInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    ResInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (categories) => {
        return (
          categories?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories)
  return (
    <div className="RestaurantMenu  dark:bg-slate-700">
      <img
        className="mx-[44%] w-[200px] pt-5"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <div className="text-center ">
        <h1 className="font-bold text-xl">{name}</h1>
        <h2>{cuisines.join(", ") + " " + costForTwoMessage}</h2>

        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}

            //main logic of accordian is here
            SHOWITEMS={index === expandIndex ? true : false}
            setexpandIndex = {()=>setexpandIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
