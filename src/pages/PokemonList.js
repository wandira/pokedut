import { Link } from "react-router-dom";
import "./main.css";

import { useQuery, gql } from "@apollo/client";

const POKEMON_LIST = gql`
  query pokemonlist {
    pokemons(limit: 15, offset: 0) {
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

  if (loading) return <span>LOADING.......</span>;
  if (error) return <span>ERROR FETCHING POKEMON LIST</span>;

  const list = data.pokemons.results;

  return (
    <div className="container">
      <p>Pokemon List</p>
      {list.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <Link to={`/${pokemon.name}`}>{`${pokemon.name}`}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonList;
