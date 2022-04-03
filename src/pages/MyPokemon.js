/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import Sound from "react-sound";
import pokedutSong from "../song/chill.mp3";

import Card from "../components/Card";
import { MyPokemonStorage } from "../PageRoutes";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cardsContainer = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 15,
  width: "80%",
  marginTop: 30,
  "@media(min-width: 768px)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 10,
  },
});

function MyPokemon() {
  const { myPokemons } = useContext(MyPokemonStorage);

  function cardsArray() {
    let arr = [];
    let i = 1;
    myPokemons.forEach((value, key) => {
      arr.push(
        <Card
          key={i}
          nickname={key}
          id={value.id}
          name={value.name}
          image={value.image}
        />
      );
      i++;
    });
    return arr;
  }

  return (
    <div css={container}>
      {myPokemons.size ? (
        <div css={cardsContainer}>{cardsArray()}</div>
      ) : (
        <p>You have no pokemon. Go catch some!</p>
      )}
      <Sound url={pokedutSong} playStatus={"PLAYING"} loop={true} volume={50} />
    </div>
  );
}

export default MyPokemon;
