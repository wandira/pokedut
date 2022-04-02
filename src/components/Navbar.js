/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const navbarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Navbar() {
  return (
    <div css={navbarContainer}>
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
