import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} ⭐</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
