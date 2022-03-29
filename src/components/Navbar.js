import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Pokedut</h1>
      <Link to="/">
        <button>Pokemon List</button>
      </Link>
      <Link to="/mypokemon">
        <button>My Pokemon</button>
      </Link>
    </div>
  );
}

export default Navbar;
