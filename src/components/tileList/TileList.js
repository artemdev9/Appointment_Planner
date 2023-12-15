import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = (props) => {
  const array = props.array;
  return (
    <div>
      {array.map(({ name, ...rest }, index) => (
        // Destructure the name property and use rest syntax for the description
        <Tile key={index} name={name} description={rest} />
      ))}
    </div>
  );
};
