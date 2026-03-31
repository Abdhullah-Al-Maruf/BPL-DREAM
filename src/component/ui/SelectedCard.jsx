
import { Delete, User } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const SelectedCard = ({player ,choosePlayer,setChoosePlayer,coin,setCoin}) => {
  
    const handleDeleteButton=(Player)=>{
     const filterPlayer=choosePlayer.filter(seclectedPlayer=>seclectedPlayer.name 
        !== Player.name )
          toast.error("player deleted")
        setChoosePlayer(filterPlayer)
        setCoin( coin+Player.price)

    }
    return (
      
  
       <div className='flex justify-between border p-5 rounded-md'>
            <div>
                <img className='w-20 rounded-md' src={player.imageUrl} alt={player.name} />
              <h2 className='flex items-center gap-2 mt-5'><User/>{player.name} </h2>  
            <p>Rating:{player.rating}</p>
            </div>
            <div
            onClick={() =>handleDeleteButton(player)}
            className='btn'><Delete></Delete></div>
        </div>

  

       

       
   
   
   
    );
};

export default SelectedCard;