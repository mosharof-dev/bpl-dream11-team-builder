import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
   const players = use(playerPromise)
//    console.log(players);
    return (
        <div className='container mx-auto'>
            Player {players.length}
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;