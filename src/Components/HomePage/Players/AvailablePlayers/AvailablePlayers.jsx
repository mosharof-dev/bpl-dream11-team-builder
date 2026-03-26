import React from 'react';
import { FaFlag, FaUser} from 'react-icons/fa';
import Card from '../../../UI/Card';

const AvailablePlayers = ({players}) => {
    console.log(players);
    return (
<Card players={players}></Card>
    );
};

export default AvailablePlayers;