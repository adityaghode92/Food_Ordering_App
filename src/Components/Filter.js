
const Filter = (props) => {
  return (
    <div className="filters  flex justify-center gap-3 p-6  ">
      <input
        className="Searchbar  border border-solid border-black px-2  dark:text-black"
        placeholder="Search here "
        type="text"
        value={props.searchtext}
        onChange={(e) => {
          props.setsearchtext(e.target.value);

          const searchedList = props.listofRes.filter((x) => {
            return x.info.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });

          props.setfilteredRes(searchedList);
        }}
      ></input>
      <button
        className="Search-btn  dark:text-black px-4 py-2 rounded-lg  font-bold bg-blue-300"
        onClick={() => {
          props.setfilteredRes(props.listofRes);
          props.setsearchtext("");
        }}
      >
        All
      </button>

      {/* Top Rated Button */}
      <button
        className="toprated-btn  px-4 py-2 rounded-lg dark:text-black  bg-green-500 font-bold "
        onClick={() => {
          //filter logic for top rated
          const topratedRes = props.listofRes.filter((x) => {
            return x.info.avgRating > 4.2;
          });
          //fileter done and stored in (topratedRes)
          //updating USESTATE Variable to (topratedRes)
          props.setfilteredRes(topratedRes);
        }}
      >Top Rated</button>
    </div>
  );
};

export default Filter;
