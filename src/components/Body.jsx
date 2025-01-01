import SearchBar from "./SearchBar";
import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="res-body">
      <SearchBar />
      <button
        onClick={() => {
          setListOfRestaurants(
            listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
          );
        }}
      >
        Filter Restaurants above 4.3 rating
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
