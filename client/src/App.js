import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/players")
      .then((r) => r.json())
      .then((data) => setPlayers(data));
  }, []);

  const displayPlayers = players.map((player) => <li>{`${player.last_name}, ${player.first_name}`}</li>)

  return (
    <div className="App">
      <h1>Team Grade Report</h1>
      <Routes>
        <Route path="/header" element={<h1>Header</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
