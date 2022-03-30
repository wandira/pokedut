import "./main.css";

import { useQuery, gql } from "@apollo/client";

import Card from "../components/Card";
import { useContext } from "react";
import { MyPokemonStorage } from "../PageRoutes";

const POKEMON_LIST = gql`
  query pokemonlist {
    pokemons(limit: 30, offset: 0) {
      results {
        id
        name
        url
        image
      }
    }
  }
`;

function PokemonList() {
  const { loading, error, data } = useQuery(POKEMON_LIST);
  const { myPokemons } = useContext(MyPokemonStorage);

  if (loading) return <span>LOADING.......</span>;
  if (error) return <span>ERROR FETCHING POKEMON LIST</span>;

  const list = data.pokemons.results;
  console.log("PokeList context: ", myPokemons, myPokemons.size);
  return (
    <div className="container">
      <p>Total owned: {myPokemons.size}</p>
      <div className="cardsContainer">
        {list.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              id={pokemon.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
