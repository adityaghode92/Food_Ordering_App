import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  // console.log(props.data);
  const [SHOWITEMS, setSHOWITEMS] = useState(false);

  const handleEvent = () => {
    setSHOWITEMS(!SHOWITEMS);
  }

  return (
    <div>
      <div className="w-6/12 bg-yellow-100 dark:bg-slate-800 p-4 my-4 mx-auto shadow-lg  ">
        {/* //header Accordian */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleEvent}
        >
          <span className="font-bold text-lg">
            {props.data.title} [{props.data.itemCards.length}]
          </span>
          <span>🔽</span>
        </div>
        {/* //Accordian body */}
        {SHOWITEMS && <ItemList items={props.data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
