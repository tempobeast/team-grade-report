import {  useContext } from "react";
import { PlayersContext } from "../context/players";
import { PlayersProvider } from "../context/players";

function App() {
  const { players } = useContext(PlayersContext);

  const displayPlayers = players.map((player) => <li key={player.id}>{`${player.last_name}, ${player.first_name}`}</li>)

  return (
     <div className="players-list">
        <ol>
            {displayPlayers}
        </ol>
    </div>
  );
}

export default App;
