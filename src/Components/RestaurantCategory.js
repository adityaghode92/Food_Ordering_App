import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, SHOWITEMS, setexpandIndex }) => {
  // console.log(data);

  const [flag, setflag] = useState(true);

  const handleEvent = () => {
    SHOWITEMS && setflag(!flag);
    setexpandIndex();
    console.log("clicked");
  };

  // const closeit =()=>{
  //  setflag(false);
  // }

  return (
    <div>
      <div className="w-6/12 bg-yellow-100 dark:bg-slate-800 p-4 my-4 mx-auto shadow-lg  ">
        {/* //header Accordian */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleEvent}
        >
          <span className="font-bold text-lg">
            {data.title} [{data.itemCards.length}]
          </span>
          <span
          // onClick={closeit}
          >
            🔽
          </span>
        </div>
        {/* //Accordian body */}
        {SHOWITEMS && flag && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
