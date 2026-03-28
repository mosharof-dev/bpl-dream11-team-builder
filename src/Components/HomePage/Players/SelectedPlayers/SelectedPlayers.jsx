import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
console.log(selectedPlayers, "selectedPlayers");

const handleDeleteSelectedPlayers = (players) => {
// console.log(players);
const deletedPlayer = selectedPlayers.filter((player) => player.playerName !== players.playerName);
// console.log(deletedPlayer, "deletedPlayer");
setSelectedPlayers(deletedPlayer)
setCoin(coin + players.price)
}
return (
<div className='space-y-4'>
{selectedPlayers.length === 0 ? 
<div>
   <h2 className='text-5xl text-center'>No Data</h2>
</div> : selectedPlayers.map((players, index) =>{
    return <div key={index} className='flex items-center justify-between gap-4 p-6 rounded-2xl border'>
<div className='flex items-center gap-4'>
        <img className='w-auto h-26 rounded-2xl' src={players.playerPhoto} alt={players.playerName} />

            <div>
                <h1 className='font-bold text-2xl'>{players.playerName}</h1>
                <p>{players.playerType}</p>
            </div>

</div>
        {/* Delete Button */}
        <button onClick={() => handleDeleteSelectedPlayers(players)} className='btn text-3xl  rounded-4xl text-red-500'><MdDeleteForever /></button>
    </div>
 })
}       
</div>
);//return
};

export default SelectedPlayers;