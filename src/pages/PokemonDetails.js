/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";

import Sound from "react-sound";
import pokedutSong from "../song/gotcha.mp3";

import { useQuery } from "@apollo/client";
import { Fragment, useState } from "react";

import { useContext } from "react";
import { MyPokemonStorage } from "../PageRoutes";
import Moves from "../components/Moves";
import POKEMON from "../queries/pokemon";

const pokemonDetailsContainer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 5vw",
});

const pokemonDetailsContainerr = css(
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `,
  {
    "@media (min-width: 768px)": {
      flexDirection: "row",
    },
  }
);

const imageContainer = css({
  width: "70vw",
  "@media (min-width: 768px)": {
    flex: "1 1 auto",
    width: "unset",
  },
});

const sprite = css({
  height: "100%",
  width: "100%",
});

const profileContainer = css({
  width: "70vw",
  "@media (min-width: 768px)": {
    flex: "2.5",
  },
});

const detailsContainer = css({
  width: "70vw",
});

const notification = css({
  textAlign: "center",
  margin: 50,
});

const borderRed = css({
  border: "2px solid red",
});

const colorRed = css({
  color: "red",
});

const failStreakStyle = css({
  color: "blue",
});

function PokemonDetails() {
  const { pokemonName } = useParams();
  const { myPokemons, setMyPokemons } = useContext(MyPokemonStorage);
  const { loading, error, data } = useQuery(POKEMON, {
    variables: { name: pokemonName },
  });
  const [success, setSuccess] = useState(false);
  const [failStreak, setFailStreak] = useState(0);
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (loading)
    return (
      <div>
        <p css={notification}>LOADING.......</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p css={[notification, colorRed]}>ERROR FETCHING POKEMON DETAILS</p>
      </div>
    );

  function catchPokemon() {
    if (Math.random() < 0.5) {
      setFailStreak(0);
      setSuccess(true);
    } else {
      setFailStreak((prev) => prev + 1);
      setSuccess(false);
    }
  }
  const { id, name, moves, types, sprites } = data.pokemon;

  function savePokemon() {
    const pokeDetails = {
      id,
      name,
      image: sprites.front_default,
    };
    if (myPokemons.has(`${nickname}`)) {
      setErrorMessage("nickname must be unique!");
    } else if (nickname.length === 0) {
      setErrorMessage("nickname must be filled!");
    } else {
      setSuccess((prev) => !prev);
      setMyPokemons((prev) => {
        const mutable = new Map(prev);
        mutable.set(`${nickname}`, pokeDetails);
        return mutable;
      });
      setNickname("");
      setErrorMessage("");
    }
  }

  const nicknameContainer = css(
    {
      height: 50,
      width: "100%",
      display: "flex",
      "& > *": {
        flex: "1 1 auto",
      },
    },
    errorMessage.length > 0 && borderRed
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      savePokemon();
    }
  };

  return (
    <div css={pokemonDetailsContainer}>
      <Sound
        url={pokedutSong}
        playStatus={success ? "PLAYING" : "STOPPED"}
        volume={80}
      />
      <div css={pokemonDetailsContainerr}>
        <div css={imageContainer}>
          <img
            css={sprite}
            width="200px"
            height="200px"
            src={sprites.front_default}
            alt="sprite"
          ></img>
        </div>
        <div css={profileContainer}>
          <h2>{name}</h2>
          <h3>#{id}</h3>
          {success ? (
            <Fragment>
              <p>{name} caught!</p>
              <div css={nicknameContainer}>
                <input
                  type="text"
                  maxLength={15}
                  placeholder="ucup"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></input>
                <button onClick={savePokemon}>save pokemon</button>
              </div>
              <p css={colorRed}>{errorMessage}</p>
            </Fragment>
          ) : (
            <div css={nicknameContainer}>
              <button onClick={catchPokemon}>CATCH!</button>
            </div>
          )}
          {failStreak > 0 && (
            <p css={failStreakStyle}>
              {name} fled... try again! fail streak: {failStreak}
            </p>
          )}
        </div>
      </div>
      <div css={detailsContainer}>
        <h4>Pokemon Type:</h4>
        <div>
          {types.map((type) => (
            <span className={`type-${type.type.name} t-type`}>
              {type.type.name}
            </span>
          ))}
        </div>
        <h4>Pokemon Moves:</h4>
        {/* <div>{moves.map((move) => move.move.name).join(", ")}</div> */}
        <Moves moves={moves} />
      </div>
    </div>
  );
}

export default PokemonDetails;
