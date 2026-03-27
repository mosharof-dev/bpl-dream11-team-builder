import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({playerPromise}) => {
   const players = use(playerPromise)
//    console.log(players);

const [selectedButton, setSelectedButton] = useState("Available")
// console.log(selectedButton);
    return (
<div className='container mx-auto my-12'>
<div className='flex justify-between items-center  mb-4'>
{ selectedButton === "Available" ? <h2 className='font-bold text-2xl'>Available Players</h2> :
 <h2 className='font-bold text-2xl'>Selected Player (4/6)</h2>}

<div className='flex'>
<button onClick={() => setSelectedButton("Available")} className={`btn ${selectedButton === "Available" ? "bg-[#E7FE29]" : ""}  rounded-none rounded-l-xl`}>Available</button>
<button onClick={() => setSelectedButton("Selected")} className={` btn rounded-l-none rounded-r-xl  ${selectedButton === "Selected" ? "bg-[#E7FE29]" : ""}`}>Selected <span>(0)</span></button>
</div>
</div>
{ selectedButton === "Available" ?<AvailablePlayers players={players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
</div>
    );
};

export default Players;