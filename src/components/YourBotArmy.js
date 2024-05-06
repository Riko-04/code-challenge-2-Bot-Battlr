import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ selectedBots, onRelease }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* Display the bots in the army */}
          {selectedBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onRelease={() => onRelease(bot.id)} // Call the onRelease function to remove the bot
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
