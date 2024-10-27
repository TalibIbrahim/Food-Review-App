import ReactStars from 'react-stars'
import React from 'react'

const PriceSymbol={
  1:"$",
  2:"$$",
  3:"$$$",
}


const RestaurantCard = (props) => {
  return (
    <div className="flex flex-row w-full my-10 ">
      <div className="border border-neutral-200">
        <img className="w-48 h-48 object-cover" src={props.logo} alt="restaurant logo" />
      </div>
      <div className="flex flex-col mx-5">
        <h1 className="text-3xl font-bold pb-1">{props.name}</h1>
        <p className="text-lg text-neutral-600">{props.location}</p>
        
          <ReactStars  count={5} size={24} value={props.rating} edit={false} half={true} color2={'#ffd700'} />
        <p>{props.cuisine}</p>
        <p className='text-neutral-500'>{PriceSymbol[props.price]}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
