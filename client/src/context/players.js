import React, { useState } from 'react';

const PlayersContext = React.createContext();

function PlayersProvider({ children }) {
    const [ players, setPlayers ] = useState([]);

    return (
        <PlayersContext.Provider value = {{ players, setPlayers }}>
            { children }
        </PlayersContext.Provider>
    )
}
export { PlayersContext, PlayersProvider }