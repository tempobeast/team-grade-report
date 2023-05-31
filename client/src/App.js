import { useState, useEffect } from "react";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/players")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Team Grade Report</h1>
    </div>
  );
}

export default App;
