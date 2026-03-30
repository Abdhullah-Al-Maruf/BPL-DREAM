import { User ,Flag, DollarSign } from 'lucide-react';
import React from 'react';

const Card = ({player}) => {
const {name, price, country,battingStyle,bowlingStyle , imageUrl,rating,role}=player;    

    return (
        <div>
       <div className="card bg-base-100  h-96 shadow-sm">

                    <img 
        
                        src={imageUrl} 
                        alt={name}
                    />
             
  <div className="card-body">
    <h2 className="card-title"><User  /> {name} </h2>
   <div className='flex justify-between'>
    <span className='flex gap-2 font-bold '><Flag/>{country}</span>
    <span className='btn f'>{role} </span>
   </div>
     <div className="divider"></div>
<p  className='font-bold'>Rating : {rating}</p>
<div className='flex justify-between'>
    <span  className='font-bold'>{battingStyle}</span>
    <span className='text-gray-600'>{bowlingStyle}</span>
</div>

<div className='flex justify-between'>
<h2 className='font-bold'>Price:{price}$</h2>
<button className='btn'>Choose Player</button>

</div>
  </div>

</div>
        </div>
    );
};

export default Card;