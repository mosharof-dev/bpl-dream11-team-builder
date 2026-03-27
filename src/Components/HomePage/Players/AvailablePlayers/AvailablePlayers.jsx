import React from 'react';

import Card from '../../../UI/Card';

const AvailablePlayers = ({players}) => {
    // console.log(players);
    return (
<Card players={players}></Card>
    );
};

export default AvailablePlayers;