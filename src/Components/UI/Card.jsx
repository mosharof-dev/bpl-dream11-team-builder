import React, { useState } from 'react';
import { FaFlag, FaUser} from 'react-icons/fa';
import { toast } from 'react-toastify';
const Card = ({players , setCoin , coin, selectedPlayers, setSelectedPlayers}) => {

  const [isSelected, setIsSelected] = useState(false);
// <== Choose Player and price function ====>
  const handleCoshPlayer = () => {
    let newCoin = coin - players.price;
     if(newCoin >= 0){
     setCoin(coin - players.price);
     }else{
     
      toast.error('Not enough coins to purchase this player!', {
      
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
});
return;
}
    toast.success(`${players.playerName} is Selected`,{
      position: "top-center",
      autoClose: 2000,
    })
     setIsSelected(!isSelected);  
    setSelectedPlayers([...selectedPlayers, players])  
  }
return (


      
<div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
  
  {/* Image */}
       <figure><img src={players.playerPhoto} alt=""  /></figure>
     
 

  <div className="card-body ">

    {/* Name */}
    <h2 className="card-title text-lg font-semibold flex items-center gap-2">
      <FaUser className="text-gray-500" />
     {players.playerName}
    </h2>

    {/* Country + Role */}
    <div className="flex justify-between items-center text-sm">
      
      <div className="flex items-center gap-2 text-gray-600">
        <FaFlag />
        <p>{players.playerCountry}</p>
      </div>

      <button className="btn btn-xs rounded-full px-3">
        {players.playerType}
      </button>
    </div>

    {/* Divider */}
    <div className="divider my-1"></div>

    {/* Rating */}
    <p className="font-semibold text-sm">Rating ({players.rating})</p>

    {/* Batting + Bowling */}
    <div className="flex justify-between text-sm text-gray-600">
      <p>{players.battingStyle}</p>
      <p className='text-right'>{players.bowlingStyle}</p>
    </div>

    {/* Bottom */}
    <div className="flex justify-between items-center pt-2">
      <p className="font-medium text-sm">
        $ {players.price}
      </p>

      <button onClick={handleCoshPlayer}
      disabled={isSelected}
       className="btn btn-outline btn-sm">
        { isSelected ? "Selected":"Choose Player"}
      </button>
    </div>

  </div>
</div>
      
        )
    }



export default Card;