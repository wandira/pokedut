/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { MyPokemonStorage } from "../PageRoutes";

const cardContainer = css`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 44px;
  row-gap: 15px;
  width: 100%;
  background-color: cornsilk;
`;

const onHoverBurlywood = css({
  "&:hover": {
    backgroundColor: "burlywood",
  },
});

const cardDetailsContainer = css`
  display: flex;
  flex-direction: row;
  min-width: 220px;
`;

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
      <div css={[cardContainer, onHoverBurlywood]}>
        <div css={cardDetailsContainer}>
          <div css={css({ flexBasis: 96 })}>
            <img src={image} alt="pokeImg"></img>
          </div>
          {nickname ? (
            <div>
              <p>{nickname}</p>
              <button onClick={onDelete}>release</button>
            </div>
          ) : (
            <div>
              <p>{name}</p>
              <p>#{id}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
