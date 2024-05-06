export const fetchGames = async (query: string): Promise<string[]> => {
    try {
      const apiKey = 'f43431888ae7427f9136c680aebc3d07';
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${query}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const gameNames = data.results.map((game: any) => game.name);
      return gameNames;
    } catch (error) {
      console.error('Error fetching game data:', error);
      throw error;
    }
  };
  