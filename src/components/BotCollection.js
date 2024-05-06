import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots, onEnlist }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Ensure each BotCard gets the correct onEnlist function */}
        {allBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={onEnlist} // Pass the onEnlist function
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
