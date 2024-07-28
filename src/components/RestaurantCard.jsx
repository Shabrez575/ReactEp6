// This is the way to import named export f
import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
  // using destructure
   const {resData} = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-food"
        alt="food-img"
       src={
         CDN_URL +
          cloudinaryImageId
        } 

      />

      <h3>{name}</h3>
      <p>
        <b>{cuisines.join(",")}</b>
      </p>
      <span>
        <b>avgrating:{avgRating}</b>
      </span>
      <span className="card-btm">
        <b>{totalRatingsString}</b>
      </span>
      <p>
        <b>{costForTwo}</b>
      </p> 
    </div>
  );
};

export default RestaurantCard;