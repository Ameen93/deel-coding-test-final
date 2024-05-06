import React, { useState, useEffect } from "react";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import { fetchGames } from "./api-client";
import wordList from "./assets/wordList.json";

const App: React.FC = () => {
  const [games, setGames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Hook to fetch games using api-client
  useEffect(() => {
    const fetchGameList = async () => {
      setLoading(true);
      try {
        const gameList = await fetchGames("");
        setGames(gameList);
      } catch (error) {
        // Populates games with wordList in case of error
        console.error("Error fetching game list:", error);
        setGames(wordList);
      }
      setLoading(false);
    };

    fetchGameList();
  }, []);

  return (
    <div className="App">
      <h1>Game Search</h1>
      {loading ? <div>Loading...</div> : <AutoComplete suggestions={games} />}
    </div>
  );
};

export default App;
