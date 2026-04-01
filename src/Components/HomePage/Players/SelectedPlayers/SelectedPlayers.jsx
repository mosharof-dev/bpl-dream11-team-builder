import React from 'react';
import SelectedCard from '../../../UI/SelectedCard';
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin, setSelectedButton }) => {

  const handleDeleteSelectedPlayers = (players) => {
    const deletedPlayer = selectedPlayers.filter((player) => player.playerName !== players.playerName);
    setSelectedPlayers(deletedPlayer);
    setCoin(coin + players.price);
    toast.error(`${players.playerName} is removed from your team.`);
  }

  return (
    <div className='space-y-4'>
      {selectedPlayers.length === 0 ? (
        <div className='flex flex-col items-center justify-center text-center mt-16'>
          <div className='w-full p-10 bg-white border border-dashed border-gray-300 rounded-3xl shadow-lg'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-2'>
              Your Squad is Empty!
            </h2>
            <p className='text-xl text-gray-600 max-w-lg mx-auto mb-8'>
              It looks like you haven't picked any players yet. Go back to available players to build your team.
            </p>

           
            <button 
              onClick={() => setSelectedButton("Available")}
              className="btn font-bold bg-[#E7FE29] text-black border-2 border-black ring-1 ring-[#E7FE29] hover:bg-[#d4e924] rounded-xl px-6"
            >
              Add  Player
            </button>
          </div>
        </div>
      ) : (
        selectedPlayers.map((players, index) => (
          <SelectedCard 
            key={index} 
            players={players} 
            handleDeleteSelectedPlayers={handleDeleteSelectedPlayers} 
          />
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;