
import React from 'react';
import Card from '../ui/card';
const AvailablePlayer = ({players ,setCoin,coin}) => {

    return (
        <div >
        <div className='grid  gap-3 mt-4 grid-cols-1 md:grid-cols-3  lg:grid-cols-4 ' >
            {
                players.map(player=> <Card setCoin={setCoin } coin={coin} key={player.id} player={player}></Card>)
            }
        </div>
        </div>
    );
};

export default AvailablePlayer;