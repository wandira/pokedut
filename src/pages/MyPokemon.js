import { useContext } from "react";
import { PokemonStorage } from "../PageRoutes";
import "./main.css";

function MyPokemon() {
  const pokemonStorage = useContext(PokemonStorage);
  return (
    <div className="container">
      <p>My pokemon</p>
      <p>{pokemonStorage.greet.hi}</p>
      <input
        type="text"
        value={pokemonStorage.greet.hi}
        onChange={(e) => pokemonStorage.setGreet({ hi: e.target.value })}
      ></input>
    </div>
  );
}

export default MyPokemon;
