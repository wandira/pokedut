/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";

const navbarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const navLinkContainer = css({
  display: "flex",
  width: "80%",
  justifyContent: "center",
  alignItems: "center",
  "& > *": {
    flex: 1,
    height: 45,
    "& > *": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      border: "1px solid burlywood",
      backgroundColor: "beige",
      "&:hover": {
        backgroundColor: "burlywood",
      },
    },
  },
});

const active = css({
  backgroundColor: "burlywood",
});

function Navbar() {
  const { pathname } = useLocation();
  const onLandingPage = pathname === "/";
  const onMyPokemonPage = pathname === "/mypokemon";

  return (
    <div css={navbarContainer}>
      <h1>Pokedut</h1>
      <div css={navLinkContainer}>
        <Link to="/">
          <div css={onLandingPage && active}>Pokemon List</div>
        </Link>
        <Link to="/mypokemon">
          <div css={onMyPokemonPage && active}>My Pokemon</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
