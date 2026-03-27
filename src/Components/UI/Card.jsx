import React from 'react';
import { FaFlag, FaUser} from 'react-icons/fa';
const Card = ({players}) => {
    return (
        <div>
            <div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {
        players.map((player, index) => {
          return <div key={index} className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
  
  {/* Image */}
       <figure><img src={player.playerPhoto} alt="" /></figure>
     
 

  <div className="card-body ">

    {/* Name */}
    <h2 className="card-title text-lg font-semibold flex items-center gap-2">
      <FaUser className="text-gray-500" />
     {player.playerName}
    </h2>

    {/* Country + Role */}
    <div className="flex justify-between items-center text-sm">
      
      <div className="flex items-center gap-2 text-gray-600">
        <FaFlag />
        <p>{player.playerCountry}</p>
      </div>

      <button className="btn btn-xs rounded-full px-3">
        {player.playerType}
      </button>
    </div>

    {/* Divider */}
    <div className="divider my-1"></div>

    {/* Rating */}
    <p className="font-semibold text-sm">Rating ({player.rating})</p>

    {/* Batting + Bowling */}
    <div className="flex justify-between text-sm text-gray-600">
      <p>{player.battingStyle}</p>
      <p className='text-right'>{player.bowlingStyle}</p>
    </div>

    {/* Bottom */}
    <div className="flex justify-between items-center pt-2">
      <p className="font-medium text-sm">
        $ {player.price}
      </p>

      <button className="btn btn-outline btn-sm">
        Choose Player
      </button>
    </div>

  </div>
</div>
      
        })
    }
  </div>

</div>
            
        </div>
    );
};

export default Card;