/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { MyPokemonStorage } from "../PageRoutes";

const cardContainer = css(
  `
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 44px;
  row-gap: 15px;
  width: 100%;
  background-color: cornsilk;
  justify-content: space-between;
  align-items: center;
`,
  {
    "& > *": {
      flex: "1",
    },
  }
);

const onHoverBurlywood = css({
  "&:hover": {
    backgroundColor: "burlywood",
  },
});

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
        <div>
          <img width="96px" height="96px" src={image} alt="pokeImg"></img>
        </div>
        {nickname ? (
          <Fragment>
            <div>
              <p>{nickname}</p>
            </div>
            <div>
              <button onClick={onDelete}>release</button>
            </div>
          </Fragment>
        ) : (
          <div>
            <p>{name}</p>
            <p>#{id}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default Card;
