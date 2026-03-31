import React, { use, useState } from 'react';
import AvailablePlayer from './AvailablePlayer';
import SelectedPlayer from './SelectedPlayer';

const Players = ({ playerPromise, setCoin, coin }) => {
    const playerData = use(playerPromise)
    const players = playerData.players;
    // state for toggling
    const [selected, setSelected] = useState("available")

    // state for selected Tab rendering
    const [choosePlayer, setChoosePlayer] = useState([])

    return (
        <div >
            {/* toggle btn */}
            <div className='flex justify-between mt-7'>
                {selected === "available" ? <h1> Available  Players</h1> : <h1> Selected Player ({choosePlayer.length}/{players.length})</h1>}
                <div>
                    <button
                        onClick={() => setSelected("available")}
                        className={`  btn  ${selected === "available" ? "bg-[#E7FE29]" : ""}  rounded-full rounded-r-none`}>Available</button>
                    <button
                        onClick={() => setSelected("selected")}
                        className={`btn  ${selected === "selected" ? "bg-[#E7FE29]" : ""}  rounded-full rounded-l-none`}>Selected({choosePlayer.length})</button>
                </div>
            </div>
            {

                selected === "available" ?
                    <AvailablePlayer choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} setCoin={setCoin} coin={coin} players={players} />
                    : <SelectedPlayer coin={coin} setCoin={setCoin} choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} />
            }

        </div>
    );
};

export default Players;