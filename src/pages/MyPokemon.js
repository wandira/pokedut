import { useContext } from "react";

import Card from "../components/Card";
import { MyPokemonStorage } from "../PageRoutes";
import "./main.css";

function MyPokemon() {
  const { myPokemons } = useContext(MyPokemonStorage);

  function cardsArray() {
    let arr = [];
    let i = 1;
    myPokemons.forEach((value, key) => {
      arr.push(
        <Card
          key={i}
          nickname={key}
          id={value.id}
          name={value.name}
          image={value.image}
        />
      );
      i++;
    });
    return arr;
  }

  return (
    <div className="container">
      <p>My pokemons</p>
      <div className="cardsContainer">{cardsArray()}</div>
    </div>
  );
}

export default MyPokemon;
