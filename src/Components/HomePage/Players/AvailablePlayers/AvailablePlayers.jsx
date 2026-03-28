
import React from 'react';
import Card from '../../../UI/Card';

const AvailablePlayers = ({players, setCoin, coin, selectedPlayers, setSelectedPlayers, displayLimit, setDisplayLimit}) => {
    
    return (
        <div> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
                
                {players.slice(0, displayLimit).map((player, index) => {
                    return (
                        <Card 
                            players={player} 
                            key={index} 
                            setCoin={setCoin} 
                            coin={coin}
                            selectedPlayers={selectedPlayers}
                            setSelectedPlayers={setSelectedPlayers}
                        ></Card>
                    )
                })}
            </div>

            {/* //* Show More Button logic */}
            {
displayLimit < players.length && (
    <div className="flex justify-center mt-12 mb-10">
        <button 
            onClick={() => setDisplayLimit(players.length)}
            className="bg-[#E7FE29] text-black font-bold py-3 px-10 rounded-xl hover:scale-105 transition-all shadow-md"
        >
            Show More Players
        </button>
    </div>
                )
            }
        </div>
    );
};

export default AvailablePlayers;