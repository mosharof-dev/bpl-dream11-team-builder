// import React from 'react';

// import Card from '../../../UI/Card';

// const AvailablePlayers = ({players , setCoin, coin, selectedPlayers, setSelectedPlayers, displayLimit, setDisplayLimit}) => {
//     // console.log(players);
//     return (
//        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
//         {players.map((players, index ) =>{
//             return  (<Card players={players} key={index} setCoin={setCoin} coin={coin}
//             selectedPlayers={selectedPlayers}
//             setSelectedPlayers={setSelectedPlayers}

//             ></Card>)
//         })}

//         {/* Show More Button logic */}
//             {
//                 displayLimit < players.length && (
//                     <div className="flex justify-center mt-12">
//                         <button 
//                             onClick={() => setDisplayLimit(players.length)}
//                             className="bg-[#E7FE29] text-black font-bold py-3 px-10 rounded-xl hover:scale-105 transition-all shadow-md"
//                         >
//                             Show More
//                         </button>
//                     </div>
//                 )
//             }
       
//        </div>


//     );
// };

// export default AvailablePlayers;

import React from 'react';
import Card from '../../../UI/Card';

const AvailablePlayers = ({players, setCoin, coin, selectedPlayers, setSelectedPlayers, displayLimit, setDisplayLimit}) => {
    
    return (
        <div> {/* Ekta extra div dilam jate grid ar button separate thake */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {/* Main Vul eikhane: map korar agey slice(0, displayLimit) dite hobe */}
                {players.slice(0, displayLimit).map((player, index) => {
                    return (
                        <Card 
                            players={player} // Eikhane 'players' er jaygay 'player' use kora better (singular)
                            key={index} 
                            setCoin={setCoin} 
                            coin={coin}
                            selectedPlayers={selectedPlayers}
                            setSelectedPlayers={setSelectedPlayers}
                        ></Card>
                    )
                })}
            </div>

            {/* Show More Button logic: Eta grid div er baire thakbe */}
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