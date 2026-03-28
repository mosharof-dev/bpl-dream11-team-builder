

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
<div className='flex flex-col items-center justify-center text-center mt-16'>
  
  <div className='w-full  p-10 bg-white border border-dashed border-gray-300 rounded-3xl shadow-lg'>
    
    <h2 className='text-3xl font-semibold text-gray-800 mb-2'>
      Your Squad is Empty!
    </h2>
    
    <p className='text-xl text-gray-600 max-w-lg mx-auto'>
      It looks like you haven't picked any players for your dream team yet. Go to the "Available Players" tab to get started.
    </p>

   
  
  </div>
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