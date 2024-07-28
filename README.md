NOTES :- 

Monolith and Microservice Architecture - 

Monolith Architecture - 

Microservice Architecture - 

How web apps and UI application fetch the data from backend?

Two approaches are followed:-
1 - As soon as our page load we make an api call wait for data to come and then 
we render the UI.
Load -> API -> Render UI.

2 - As soon as the page load we will quickly render the UI Now I am going to 
call API.
Load -> Render UI -> API -> Re-Render the data on to the web page.
-> 2nd is better approach.
-> It will be give u better UX Option.
-> React render so fast.

-> To implement 2nd approach in react we use useEffect.

-> If u have something after rendering the component you have to write it into useEffect.

-> First Body will render then useEffect will render.

Loading fake screen/dummy card which show during loading the actual api call.
-> Shimmer UI.

---------------------------------------------------------
// Conditional rendering - 1st way
  /*
  if (restaurantList.length === 0) {
    console.log("Loading");
    // return <h1>Loading....</h1>;
    return <Shimmer />;
  } else {
    console.log("Not Loading....");
  }
  */

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
-------------------------------------------------------------




