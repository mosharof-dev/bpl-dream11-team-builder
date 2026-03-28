import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
const SelectedCard = ({players, handleDeleteSelectedPlayers}) => {
    return (
        <div>
            <div  className='flex items-center justify-between gap-4 p-6 rounded-2xl border'>
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
            
        </div>
    );
};

export default SelectedCard;