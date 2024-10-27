import React from "react";
import "./Home.css";

import BrimLogo from "../Assets/Brim.jpg";
import TipsyLogo from "../Assets/tipsy.png";
import RestaurantCard from "../Components/RestaurantCard";

const RESTAURANT_DUMMY_DATA = [
  {
    id: 1,
    name: "Brim Burgers",
    logo: BrimLogo,
    rating: 4.0,
    price: 2,
    location: "Gulberg, Lahore",
    cuisine: "Fast Food",
  },
  {
    id: 2,
    name: "The Tipsy Co",
    logo: TipsyLogo,
    rating: 4.5,
    price: 2,
    location: "DHA Phase 6, Lahore",
    cuisine: "Fast Food",
  },
];

const Home = () => {
  return (
    <>
      <div className="backgrnd-img justify-center items-center flex " />
      <div className="card-container flex flex-col items-center justify-between my-10">
        {RESTAURANT_DUMMY_DATA.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            logo={restaurant.logo}
            rating={restaurant.rating}
            price={restaurant.price}
            location={restaurant.location}
            cuisine={restaurant.cuisine}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
