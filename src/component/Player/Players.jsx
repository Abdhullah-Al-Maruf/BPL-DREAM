import React, { use } from 'react';
import AvailablePlayer from './AvailablePlayer';

const Players = ({playerPromise}) => {
    const playerData =use(playerPromise)
    const players=playerData.players;


    return (
        <div >
      
      <AvailablePlayer players={players} />
        </div>
    );
};

export default Players;