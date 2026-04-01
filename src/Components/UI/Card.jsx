
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  const isSelected = selectedPlayers.some(player => player.playerName === players.playerName)

  const handleCoshPlayer = () => {
    // Check if already selected
    if (isSelected) {
      toast.warn('Player already selected!');
      return;
    }

    if (coin < players.price) {
      toast.error('Not enough coins!', { theme: "light" });
      return;
    }

    // Success logic
    setCoin(coin - players.price);
    
    setSelectedPlayers([...selectedPlayers, players]);
    
    toast.success(`${players.playerName} is Selected`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    /* 1. Added Hover Animation classes here */
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
      
      <figure className="px-4 pt-4">
        <img src={players.playerPhoto} alt={players.playerName} className="rounded-xl h-48 w-full object-cover" />
      </figure>

      <div className="card-body p-5">
        <h2 className="card-title text-lg font-bold flex items-center gap-2">
          <FaUser className="text-gray-500" />
          {players.playerName}
        </h2>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaFlag />
            <p>{players.playerCountry}</p>
          </div>
          <button className="btn btn-xs bg-gray-100 rounded-lg px-3 border-none">
            {players.playerType}
          </button>
        </div>

        <div className="divider my-1"></div>

        <p className="font-semibold text-sm">Rating ({players.rating})</p>

        <div className="flex justify-between text-sm font-medium mb-2">
          <p className="text-black">{players.battingStyle}</p>
          <p className="text-gray-500">{players.bowlingStyle}</p>
        </div>

        <div className="flex justify-between items-center pt-2">
          <p className="font-bold text-sm">Price: ${players.price}</p>

          {/* 2. Dynamic Button Color Logic */}
        {/* Button with Neon Yellow logic */}
<button 
  onClick={handleCoshPlayer}
  className={`btn btn-sm font-bold transition-all duration-300 rounded-xl ${
   isSelected
    ? "bg-gray-400 text-white border-none cursor-not-allowed" 
    : "bg-[#E7FE29] text-black border-2 border-black ring-1 ring-[#E7FE29] hover:bg-[#d4e924]" 
  }`}
  disabled={isSelected}
>
  {isSelected ? "Selected" : "Choose Player"}
</button>
        </div>
      </div>
    </div>
  );
};

export default Card;