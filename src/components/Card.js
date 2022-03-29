import React from "react";
import { Link } from "react-router-dom";

function Card({ image, name, id }) {
  return (
    <Link to={`/${name}`}>
      <div className="cardContainer">
        <img src={image} alt="pokeImg"></img>
        <div>
          <p>{name}</p>
          <p>#{id}</p>
          {/* <p>caught</p> */}
        </div>
      </div>
    </Link>
  );
}

export default Card;
