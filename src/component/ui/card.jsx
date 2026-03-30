import { User, Flag } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({ player ,setCoin,coin}) => {
  const { name, price, country, battingStyle, bowlingStyle, imageUrl, rating, role } = player;
  const [active, setActive] = useState(false);
const handleEvent =()=>{
    setActive(true)
    setCoin(coin-price)
}
  return (
    <div className='p-5 shadow-md'>
              <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />
 {/* Name */}
        <h2 className="card-title flex items-center gap-2 truncate">
          <User /> {name}
        </h2>

        {/* Country and Role */}
        <div className="flex justify-between mt-1">
          <span className="flex gap-2 font-bold items-center truncate">
            <Flag /> {country}
          </span>
          <span className="btn btn-sm">{role}</span>
        </div>

        <div className="divider my-2"></div>

        {/* Rating */}
        <p className="font-bold">Rating: {rating}</p>

        {/* Batting & Bowling Style */}
        <div className="flex justify-between">
          <span className="font-bold truncate">{battingStyle}</span>
          <span className="text-gray-600 truncate">{bowlingStyle}</span>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-2">
          <h2 className="font-bold">Price: ${price}</h2>
          <button
            onClick={handleEvent}
            className='btn'
            disabled={active}
          >
            {active ? 'Selected' : 'Choose Player'}
          </button>
        </div>



    </div>
  );
};

export default Card;