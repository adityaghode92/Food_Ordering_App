
const Filter = (props) => {
  return (
    <div className="filters  flex justify-end gap-3 p-2  ">
      <input
        className="Searchbar  border border-solid border-black px-2"
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
        className="Search-btn   px-4 py-2 rounded-lg   bg-blue-300"
        onClick={() => {
          props.setfilteredRes(props.listofRes);
          props.setsearchtext("");
        }}
      >
        ALL
      </button>

      {/* Top Rated Button */}
      <button
        className="toprated-btn  px-4 py-2 rounded-lg   bg-green-500 "
        onClick={() => {
          //filter logic for top rated
          const topratedRes = props.listofRes.filter((x) => {
            return x.info.avgRating > 4.2;
          });
          //fileter done and stored in (topratedRes)
          //updating USESTATE Variable to (topratedRes)
          props.setfilteredRes(topratedRes);
        }}
      >
        Top Rated
      </button>
    </div>
  );
};

export default Filter;
