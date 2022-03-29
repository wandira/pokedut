import { useParams } from "react-router-dom";
import "./main.css";

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

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
  const { loading, error, data } = useQuery(POKEMON, {
    variables: { name: pokemonName },
  });
  const [success, setSuccess] = useState(false);

  if (loading) return <span>LOADING.......</span>;
  if (error) return <span>ERROR FETCHING POKEMON DETAILS</span>;

  function catchPokemon() {
    setSuccess(Math.random() < 0.5);
  }

  const { id, name, moves, types, sprites } = data.pokemon;
  return (
    <div className="pokemonDetailsContainer">
      <div className="imageContainer">
        <img src={sprites.front_default} className="sprite" alt="sprite"></img>
      </div>
      <div className="detailsContainer">
        <h2>{name}</h2>
        <h5>#{id}</h5>
        <button onClick={catchPokemon}>CATCH!</button>
        {success && <span>SUCCESS</span>}
        <h5>Pokemon Type:</h5>
        <div>
          {/* {types.map((type) => {
            return <span key={type.type.name}>{type.type.name}, </span>;
          })} */}
          {types.map((type) => type.type.name).join(", ")}
        </div>
        <h5>Pokemon Moves:</h5>
        <div>{moves.map((move) => move.move.name).join(", ")}</div>
      </div>
    </div>
  );
}

export default PokemonDetails;
