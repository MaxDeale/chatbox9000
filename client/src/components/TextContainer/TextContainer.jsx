import React from "react";
import onlineIcon from "../../icons/online.png";

const TextContainer = ({ users }) => {
  return (
    <div>
      {users ? (
        <div>
          <h1>Currently in room:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
