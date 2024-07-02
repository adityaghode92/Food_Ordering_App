import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import Filter from "./Filter.js";
import useResList from "../utils/useResList.js";
import Carousel from "./Carousel.js";

const Body = () => {
  const [
    listofRes,
    filteredRes,
    searchtext,
    setlistofRes,
    setfilteredRes,
    setsearchtext,
    carousel
  ] = useResList();

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    // body container
    <div className="body-container bg-white dark:bg-slate-800 p-4 sm:p-6 md:p-8 lg:p-10">
      <Carousel carousel={carousel} setfilterResList={setfilteredRes} />

      <Filter
        filteredRes={filteredRes}
        searchtext={searchtext}
        listofRes={listofRes}
        setfilteredRes={setfilteredRes}
        setsearchtext={setsearchtext}
        setlistofRes={setlistofRes}
      />

      {/* res-container */}
      <div className="res-container flex flex-wrap justify-center gap-4 mt-6">
        {filteredRes.map((x) => (
          <Link key={x.info.id} to={"/resmenu/" + x.info.id}>
            <RestaurantCard resData={x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
