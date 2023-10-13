import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestoCards, setFilteredRestoCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchDAta();
  }, []);

  const fetchDAta = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestoCards(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline. Please check your internet connection</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex my-3">
        <div className="p-4">
          <input
            data-testid="searchInput"
            type="text"
            className="border border-solid mr-4 px-2 py-1 border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 rounded-lg"
            onClick={() => {
              let filteredRestaurants = listOfRestaurants.filter((resto) =>
                resto.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestoCards(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 flex items-center">
          <button
            className="px-8 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              let filteredList = listOfRestaurants.filter(
                (x) => x.info.avgRating >= 4
              );
              setFilteredRestoCards(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search p-4 flex items-center">
          <label>User Name:</label>
          <input
            className="border border-black px-2 py-1 mx-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestoCards.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
