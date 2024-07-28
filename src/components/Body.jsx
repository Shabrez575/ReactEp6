import RestaurantCard from "./RestaurantCard";
// import restList from "../utils/mockData";
//import restaurantList from "../utils/mockData1";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  // 3rd way - Array Destructuring.
  // State Variable - Super powerful variable
  // const arr = useState(restList);
  // const [restaurantList, setRestaurantList] = arr;

  const [restaurantList, setRestaurantList] = useState([]);

  // useEffect(() => {
  //   setRestaurantList(restList);
  // },[]);

  /*
  useEffect(() => {
    console.log("useEffect Called");
  },[]);
  */

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    // setRestaurantList(json?.data?.cards[1]?.card?.card?.restau);
  };
  // console.log(restaurantList);

  // Conditional rendering - 1st way
  if (restaurantList.length === 0) {
    console.log("Loading");
    // return <h1>Loading....</h1>;
    return <Shimmer />;
  } else {
    console.log("Not Loading....");
  }
  
  // console.log("Body Rendered);
  return (
    <div className="body">
      {/* <div className="Search-bar">Search-bar</div> */}

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filter_restaurantList = restaurantList.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setRestaurantList(filter_restaurantList);
            // console.log(restaurantList);
          }}
        >
          Top Rating Restaurant
        </button>
      </div>
      <div className="res-Container">
        {/*Using Map Function I am trying to iterate each restaurant.
        2nd thing always use key for better performance during rendering card.*/
        /* Not Using Keys (not acceptable it will give you warning, If you don't have id then u can simply use index as well and if you have id then prefferable to use id only.*/}
        {/* {restList.map((restaurant) => (
      <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
        ))} */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
