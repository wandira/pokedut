/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";

import Sound from "react-sound";
import pokedutSong from "../song/gotcha.mp3";

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

import { useContext } from "react";
import { MyPokemonStorage } from "../PageRoutes";

const POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const pokemonDetailsContainer = css(
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `,
  {
    "@media (min-width: 992px)": {
      flexDirection: "row",
      padding: "10px 5vw",
    },
  }
);

const imageContainer = css({
  width: "70vw",
  "@media (min-width: 992px)": {
    flex: "1 1 auto",
    width: "unset",
  },
});

const sprite = css({
  height: "100%",
  width: "100%",
});

const detailsContainer = css({
  "@media (min-width: 992px)": {
    flex: "1.5",
  },
});

const notification = css({
  textAlign: "center",
  margin: 50,
});

function PokemonDetails() {
  const { pokemonName } = useParams();
  const { myPokemons, setMyPokemons } = useContext(MyPokemonStorage);
  const { loading, error, data } = useQuery(POKEMON, {
    variables: { name: pokemonName },
  });
  const [success, setSuccess] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameUniqueness, setNicknameUniqueness] = useState(true);

  if (loading) return <p css={notification}>LOADING.......</p>;
  if (error) return <p css={notification}>ERROR FETCHING POKEMON DETAILS</p>;

  function catchPokemon() {
    if (Math.random() < 0.5) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }
  const { id, name, moves, types, sprites } = data.pokemon;

  function savePokemon() {
    console.log(nickname);
    const pokeDetails = {
      id,
      name,
      image: sprites.front_default,
    };
    if (myPokemons.has(`${nickname}`)) {
      setNicknameUniqueness(false);
    } else {
      setSuccess((prev) => !prev);
      setMyPokemons((prev) => {
        const mutable = new Map(prev);
        mutable.set(`${nickname}`, pokeDetails);
        return mutable;
      });
      setNickname("");
      setNicknameUniqueness(true);
    }
  }

  return (
    <div css={pokemonDetailsContainer}>
      <Sound
        url={pokedutSong}
        playStatus={success ? "PLAYING" : "STOPPED"}
        volume={80}
      />
      <div css={imageContainer}>
        <img
          css={sprite}
          width="200px"
          height="200px"
          src={sprites.front_default}
          alt="sprite"
        ></img>
      </div>
      <div css={detailsContainer}>
        <h2>{name}</h2>
        <h5>#{id}</h5>
        {success ? (
          <div>
            <p>pokemon caught</p>
            {!nicknameUniqueness && (
              <p>nickname already exist. pick another nickname</p>
            )}
            <input
              type="text"
              maxLength={15}
              placeholder="enter nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            ></input>
            <button onClick={savePokemon}>Save pokemon</button>
          </div>
        ) : (
          <button onClick={catchPokemon}>CATCH!</button>
        )}
        <h5>Pokemon Type:</h5>
        <div>{types.map((type) => type.type.name).join(", ")}</div>
        <h5>Pokemon Moves:</h5>
        <div>{moves.map((move) => move.move.name).join(", ")}</div>
      </div>
    </div>
  );
}

export default PokemonDetails;
