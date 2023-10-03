import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo:", resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // Swiggy Changed it's API either randomly or alternating itemsCards and carousel array

  const { itemCards, carousel } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  let dishCards = itemCards === undefined ? carousel : itemCards;

  console.log("dishCards:", dishCards);

  console.log("itemCards:", itemCards);
  console.log("carousel:", carousel);

  return (
    <div>
      <h1>{name}</h1>
      <p>{avgRating}⭐</p>
      <h3>Cuisines:</h3>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <h3>Menu:</h3>
      <ul>
        {dishCards.map((item) => {
          return (
            <li key={item?.card?.info?.id || item?.dish?.info?.id}>
              {item?.card?.info?.name || item?.dish?.info?.name} - Rs.
              {item?.card?.info?.defaultPrice / 100 ||
                item?.dish?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100 ||
                item?.dish?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
