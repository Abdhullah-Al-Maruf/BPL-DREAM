
import React from 'react';
import Card from '../ui/card';
const AvailablePlayer = ({players}) => {

    return (
        <div >
        <div className='grid  gap-3 mt-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ' >
            {
                players.map(player=> <Card key={player.id} player={player}></Card>)
            }
        </div>
        </div>
    );
};

export default AvailablePlayer;