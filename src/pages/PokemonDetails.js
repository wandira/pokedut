import { useParams } from "react-router-dom";
import "./main.css";

function PokemonDetails() {
  const { pokemonId } = useParams();
  return (
    <div className="container">
      <p>Details</p>
      <p>Pokemon Id: {pokemonId}</p>
    </div>
  );
}

export default PokemonDetails;
