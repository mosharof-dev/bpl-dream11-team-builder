import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({playerPromise, setCoin, coin}) => {
  const players = use(playerPromise);

  const [selectedButton, setSelectedButton] = useState("Available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(12);

  return (
    <div className='container mx-auto mt-6 px-4 md:px-0 mb-16 md:mb-24'>
      <div className='flex justify-between items-center mb-8'>
        { selectedButton === "Available" ? 
          <h2 className='font-bold text-2xl'>Available Players</h2> :
          <h2 className='font-bold text-xl md:text-2xl'>Selected Player ({selectedPlayers.length}/6)</h2> 
        }

        <div className='flex'>
          <button 
            onClick={() => setSelectedButton("Available")} 
            className={`btn ${selectedButton === "Available" ? "bg-[#E7FE29]" : ""} rounded-none rounded-l-xl border-gray-300`}
          >
            Available
          </button>
          <button 
            onClick={() => setSelectedButton("Selected")} 
            className={`btn rounded-l-none rounded-r-xl ${selectedButton === "Selected" ? "bg-[#E7FE29]" : ""} border-gray-300`}
          >
            Selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>

      { selectedButton === "Available" ? (
        <AvailablePlayers 
          players={players} 
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers} 
          setSelectedPlayers={setSelectedPlayers}
          displayLimit={displayLimit}
          setDisplayLimit={setDisplayLimit}
        />
      ) : (
        <SelectedPlayers 
          selectedPlayers={selectedPlayers} 
          setSelectedPlayers={setSelectedPlayers} 
          setCoin={setCoin} 
          coin={coin}
         
          setSelectedButton={setSelectedButton} 
        />
      )}
    </div>
  );
};

export default Players;