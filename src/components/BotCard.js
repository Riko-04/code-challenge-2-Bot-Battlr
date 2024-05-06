import React, { useState } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onEnlist, onRelease }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const enlist = () => {
    if (onEnlist) {
      onEnlist(bot); // Call the enlist function
      closeModal(); // Close the modal after enlisting
    }
  };

  const release = () => {
    if (onRelease) {
      onRelease(bot.id); // Call the release function
      closeModal(); // Close the modal after releasing
    }
  };

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id}>
        {/* Click to open the modal */}
        <div className="image" onClick={openModal}>
          <img alt="bot avatar" src={bot.avatar_url} />
        </div>
        <div className="content" onClick={openModal}>
          <div className="header">
            {bot.name}
            {/* Add the corresponding icon */}
            <i className={botTypeClasses[bot.bot_class]} style={{ marginLeft: '10px' }} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>

        {/* Modal for additional details and enlistment */}
        {isModalOpen && (
          <div
            className="ui dimmer modals page visible active"
            onClick={closeModal}
          >
            <div
              className="ui standard modal visible active"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="header">{bot.name}</div>
              <div className="content">
                {/* Display the bot's stats */}
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
              </div>
              <div className="actions">
                <button className="ui mini green button" onClick={enlist}>Enlist</button>
                <button className="ui mini red button" onClick={release}>Release</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BotCard;
