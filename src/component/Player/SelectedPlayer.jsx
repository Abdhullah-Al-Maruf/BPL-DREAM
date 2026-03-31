import { Delete } from 'lucide-react';
import React from 'react';
import SelectedCard from '../ui/SelectedCard';

const SelectedPlayer = ({choosePlayer,setChoosePlayer ,coin,setCoin}) => {

    return (
        <div className='text-center mt-5 space-y-6'>
            {
              choosePlayer.length ===0? (<div> <h1>No player 
                selected </h1>
                <p>Seclect a player from the tab</p></div>) :              
             ( choosePlayer.map(player =>
                
                <SelectedCard coin={coin } setCoin={setCoin} choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} key={player.id} player={player}></SelectedCard> )
              )       }
        </div>
    );
};

export default SelectedPlayer;