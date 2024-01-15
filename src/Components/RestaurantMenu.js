import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  // console.log(params);
  
  const ResInfo = useRestaurantMenu(params.resId);

  //first render starts from here
  if (ResInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = ResInfo?.cards[0]?.card?.card?.info;
  const { itemCards, title } = ResInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="RestaurantMenu">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h1>{name}</h1>
      <h2>{cuisines.join(", ") + " " + costForTwoMessage}</h2>

      <h1>{title}</h1>
      <ul>
        {itemCards.map((x)=> {
          return (
            <li key={x.card.info.id}>
              {x.card.info.name}-{x.card.info.price / 100}
            </li>
          );
        }
        )}

      </ul>
    </div>
  );
};

export default RestaurantMenu;
