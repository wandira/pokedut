import "./main.css";
import Sound from "react-sound";
import pokedutSong from "../pokesong.mp3";
import { useQuery, gql } from "@apollo/client";

import Card from "../components/Card";
import { useState, useContext } from "react";
import { MyPokemonStorage } from "../PageRoutes";

const POKEMON_LIST = gql`
  query pokemonlist($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
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
  const [queryVariable, setQueryVariable] = useState({
    offset: 0,
    limit: 30,
  });
  const { loading, error, data } = useQuery(POKEMON_LIST, {
    variables: queryVariable,
  });
  const { myPokemons } = useContext(MyPokemonStorage);

  if (loading) return <span>LOADING.......</span>;
  if (error) return <span>ERROR FETCHING POKEMON LIST</span>;

  function onPrev() {
    setQueryVariable((prev) => {
      return {
        ...prev,
        offset: prev.offset - 30,
      };
    });
  }

  function onNext() {
    setQueryVariable((prev) => {
      return {
        ...prev,
        offset: prev.offset + 30,
      };
    });
  }

  const list = data.pokemons.results;
  console.log("PokeList context: ", myPokemons, myPokemons.size);
  return (
    <div className="container">
      <p>Total owned: {myPokemons.size}</p>
      <button disabled={queryVariable.offset == 0} onClick={onPrev}>
        prev
      </button>
      <button disabled={queryVariable.offset > 869} onClick={onNext}>
        next
      </button>
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
      <Sound url={pokedutSong} playStatus={"PLAYING"} loop={true} volume={50} />
    </div>
  );
}

export default PokemonList;
