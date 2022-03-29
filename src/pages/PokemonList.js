import { Link } from "react-router-dom";
import "./main.css";

function PokemonList() {
  return (
    <div className="container">
      <p>Pokemon List</p>
      <div>
        <Link to="/1">ke-1</Link>
      </div>
    </div>
  );
}

export default PokemonList;
