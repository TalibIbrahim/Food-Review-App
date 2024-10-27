const RestaurantCard = (props) => {
  return (
    <div className="flex flex-row w-96 my-10 ">
      <div className="w-36 border border-neutral-700">
        <img src={props.logo} alt="restaurant logo" />
      </div>
      <div className="flex flex-col mx-5">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <p>{props.location}</p>
        <div>
          <p>{props.rating}</p>
          <p>{props.price}</p>
        </div>
        <p>{props.cuisine}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
