import React, { use, useState } from 'react';
import AvailablePlayer from './AvailablePlayer';

const Players = ({playerPromise}) => {
    const playerData =use(playerPromise)
    const players=playerData.players;
// state for toggling
const [btnActive ,setActive]=useState("available")

    return (
        <div >
      {/* toggle btn */}
        <div className='flex justify-between mt-7'>
        <h1> Available Players</h1>
        <div>
            <button
            onClick={()=>setActive("available")}
            className={`  btn  ${btnActive ==="available" ?"bg-[#E7FE29]": ""}  rounded-full rounded-r-none`}>Available</button>
            <button 
            onClick={()=>setActive("selected")}
            className={`btn  ${btnActive ==="selected" ?"bg-[#E7FE29]": ""}  rounded-full rounded-l-none`}>Selected</button>
        </div>
        </div>



      <AvailablePlayer players={players} />
        </div>
    );
};

export default Players;