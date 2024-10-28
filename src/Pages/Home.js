import React from "react";
import "./Home.css";

import BrimLogo from "../Assets/Brim.jpg";
import TipsyLogo from "../Assets/tipsy.png";
import DejaLogo from "../Assets/Deja.jpeg";
import BenedictionLogo from "../Assets/Benediction.png";
import eggspectationLogo from "../Assets/eggspectation.jpeg";
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
  {
    id: 3,
    name: "Déjà",
    logo: DejaLogo,
    rating: 4.2,
    price: 3,
    location: "DHA Phase 4, Lahore",
    cuisine: "Cafe & Bakery",
  },
  {
    id: 4,
    name: "Benediction",
    logo: BenedictionLogo,
    rating: 3.9,
    price: 3,
    location: "Gulberg, Lahore",
    cuisine: "Cafe & Bakery",
  },
  {
    id: 5,
    name: "Eggspectation",
    logo: eggspectationLogo,
    rating: 4.5,
    price: 3,
    location: "Gulberg, Lahore",
    cuisine: "Cafe & Bakery",
  },
];

const Home = () => {
  return (
    <>
      <div className="backgrnd-img justify-center items-center flex " />
      <div className="card-container flex flex-col items-start px-40 justify-between my-10">
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
