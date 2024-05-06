import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [allBots, setAllBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots") // Fetch the bots
      .then((response) => response.json())
      .then((data) => setAllBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const enlistBot = (bot) => {
    // Add to selectedBots if not already in it
    if (!selectedBots.some((b) => b.id === bot.id)) {
      setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    // Remove the bot from selectedBots
    setSelectedBots((prevSelectedBots) =>
      prevSelectedBots.filter((bot) => bot.id !== botId)
    );
  };

  return (
    <div>
      <YourBotArmy
        selectedBots={selectedBots}
        onRelease={releaseBot}
      />
      <BotCollection
        allBots={allBots}
        onEnlist={enlistBot}
      />
    </div>
  );
}

export default BotsPage;
