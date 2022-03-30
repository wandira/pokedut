import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { MyPokemonStorage } from "../PageRoutes";

function Card({ image, name, id, nickname = null }) {
  const { setMyPokemons } = useContext(MyPokemonStorage);

  function onDelete(e) {
    e.preventDefault();
    console.log("masuk delete ", nickname);
    setMyPokemons((prev) => {
      const mutablemap = new Map(prev);
      mutablemap.delete(nickname);
      return mutablemap;
    });
  }

  return (
    <Link to={`/${name}`}>
      <div className="cardContainer">
        <div className="cardDetailsContainer">
          <img src={image} alt="pokeImg"></img>
          <div>
            {nickname ? (
              <div className="cardActionContainer">
                <p>{nickname}</p>
                <button onClick={onDelete}>release</button>
              </div>
            ) : (
              <Fragment>
                <p>{name}</p>
                <p>#{id}</p>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
