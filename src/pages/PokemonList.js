import "./main.css";

import { useQuery, gql } from "@apollo/client";

import Card from "../components/Card";

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
      <div class="cardsContainer">
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
