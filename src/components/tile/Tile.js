import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {Object.values(props.description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
