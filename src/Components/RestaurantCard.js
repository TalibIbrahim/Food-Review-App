import ReactStars from "react-stars";
import React from "react";
import "./RestaurantCard.css";

const PriceSymbol = {
  1: "$",
  2: "$$",
  3: "$$$",
};

const RestaurantCard = (props) => {
  return (
    <div className="flex flex-row justify-between items-center w-4/5 my-10 custom-card-bg shadow-lg p-10 rounded-2xl ">
      <div className="flex flex-row ">
        <div className="border border-neutral-200">
          <img
            className="w-48 h-48 object-cover"
            src={props.logo}
            alt="restaurant logo"
          />
        </div>
        <div className="flex flex-col mx-5">
          <h1 className="text-3xl font-bold pb-1">{props.name}</h1>
          <p className="text-lg text-neutral-600">{props.location}</p>

          <ReactStars
            count={5}
            size={24}
            value={props.rating}
            edit={false}
            half={true}
            color2={"#ffd700"}
          />
          <p>{props.cuisine}</p>
          <p className="text-neutral-500">{PriceSymbol[props.price]}</p>
        </div>
      </div>
      <div>
        <button className="text-lg custom-button-bg text-white p-3 px-5 rounded-xl mt-32 hover:shadow-lg">
          View
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
