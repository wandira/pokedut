import { useParams } from "react-router-dom";
import "./main.css";

import { useQuery, gql } from "@apollo/client";

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

  if (loading) return <span>LOADING.......</span>;
  if (error) return <span>ERROR FETCHING POKEMON DETAILS</span>;

  const { id, name, moves, types, sprites } = data.pokemon;
  return (
    <div className="container">
      <h2>{name}</h2>
      <h5>Pokemon Id: {id}</h5>
      <img src={sprites.front_default}></img>
      <h5>Pokemon Type:</h5>
      <div>
        {types.map((type) => {
          return <p key={type.type.name}>{type.type.name}</p>;
        })}
      </div>
      <h5>Pokemon Moves:</h5>
      <div>
        {moves.map((move) => {
          return <p key={move.move.name}>{move.move.name}</p>;
        })}
      </div>
    </div>
  );
}

export default PokemonDetails;
