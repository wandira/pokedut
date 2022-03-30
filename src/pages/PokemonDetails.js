import { useParams } from "react-router-dom";
import "./main.css";

import Sound from "react-sound";
import pokedutSong from "../gotcha.mp3";

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

function PokemonDetails() {
  const { pokemonName } = useParams();
  const { setMyPokemons } = useContext(MyPokemonStorage);
  const { loading, error, data } = useQuery(POKEMON, {
    variables: { name: pokemonName },
  });
  const [success, setSuccess] = useState(undefined);
  const [nickname, setNickname] = useState("");

  if (loading) return <span>LOADING.......</span>;
  if (error) return <span>ERROR FETCHING POKEMON DETAILS</span>;

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
    setSuccess((prev) => !prev);
    setMyPokemons((prev) => {
      const mutable = new Map(prev);
      mutable.set(`${nickname}`, pokeDetails);
      return mutable;
    });
    setNickname("");
  }

  return (
    <div className="pokemonDetailsContainer">
      <Sound
        url={pokedutSong}
        playStatus={success ? "PLAYING" : "STOPPED"}
        volume={80}
      />
      <div className="imageContainer">
        <img src={sprites.front_default} className="sprite" alt="sprite"></img>
      </div>
      <div className="detailsContainer">
        <h2>{name}</h2>
        <h5>#{id}</h5>
        {success ? (
          <div>
            <p>pokemon caught</p>
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
