import React from 'react';

import SelectedCard from '../../../UI/SelectedCard';
import { toast } from 'react-toastify';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
// console.log(selectedPlayers, "selectedPlayers");

const handleDeleteSelectedPlayers = (players) => {
// console.log(players);
const deletedPlayer = selectedPlayers.filter((player) => player.playerName !== players.playerName);
// console.log(deletedPlayer, "deletedPlayer");
setSelectedPlayers(deletedPlayer)
setCoin(coin + players.price)
toast.error(`${players.playerName} is removed from your team.`)
}
return (
<div className='space-y-4'>
{selectedPlayers.length === 0 ? 
<div>
   <h2 className='text-5xl text-center'>No Data</h2>
</div> : selectedPlayers.map((players, index) =>{
    return(
     <SelectedCard key={index} players={players} handleDeleteSelectedPlayers={handleDeleteSelectedPlayers}>

     </SelectedCard>
    ) 
 
 })
}       
</div>
);//return
};

export default SelectedPlayers;