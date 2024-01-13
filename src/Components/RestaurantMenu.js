import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);
  
  const [ResInfo, setResInfo] = useState(null);

  //useEffect is always run after first render or every render
  useEffect(() => {
    fetchData();
  }, []);

  //data fetching
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+params.resId
    );
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  //first render starts from here
  if (ResInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    ResInfo?.cards[0]?.card?.card?.info;
  const { itemCards, title } =
    ResInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="RestaurantMenu">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h1>{name}</h1>
      <h2>{cuisines.join(", ") + " " + costForTwoMessage}</h2>

      <h1>{title}</h1>
      <ul>
        {itemCards.map((x) => {
          return (
            <li key={x.card.info.id}>
              {x.card.info.name}-{x.card.info.price / 100}
            </li>
          );
        })}
        <li>Sanwitch</li>
        <li>Vadapav-Chatni</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
