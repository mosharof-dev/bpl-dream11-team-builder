import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({playerPromise, setCoin, coin}) => {
   const players = use(playerPromise)
//    console.log(players);

const [selectedButton, setSelectedButton] = useState("Available")

const [selectedPlayers, setSelectedPlayers] = useState([])
// console.log(selectedButton);
    return (
<div className='container mx-auto my-12'>
<div className='flex justify-between items-center  mb-4'>
{ selectedButton === "Available" ? <h2 className='font-bold text-2xl'>Available Players</h2> :
 <h2 className='font-bold text-2xl'>Selected Player ({selectedPlayers.length}/{players.length})</h2>}

<div className='flex'>
<button onClick={() => setSelectedButton("Available")} className={`btn ${selectedButton === "Available" ? "bg-[#E7FE29]" : ""}  rounded-none rounded-l-xl`}>Available</button>
<button onClick={() => setSelectedButton("Selected")} className={` btn rounded-l-none rounded-r-xl  ${selectedButton === "Selected" ? "bg-[#E7FE29]" : ""}`}>Selected <span>({selectedPlayers.length})</span></button>
</div>
</div>
{ selectedButton === "Available" ?<AvailablePlayers players={players} setCoin={setCoin} coin={coin}
 selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}></SelectedPlayers>}
</div>
    );
};

export default Players;