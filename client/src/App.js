import { useEffect, useContext } from "react";
import { Routes, Route } from 'react-router-dom'
import { PlayersContext } from "./context/players";
import PlayersList from './components/PlayersList'
import LoginPage from "./components/LoginPage";

function App() {
  const { setPlayers } = useContext(PlayersContext);

  useEffect(() => {
    fetch("/players")
      .then((r) => r.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="App">
      <h1>Team Grade Report</h1>
        <Routes>
          <Route path="/header" element={<h1>Header</h1>}/>
          <Route path="Login" element={<LoginPage/>} />
          <Route path="/players-list" element={<PlayersList />} />
        </Routes>
    </div>
  );
}

export default App;
