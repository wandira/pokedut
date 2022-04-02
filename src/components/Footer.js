/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: antiquewhite;
  margin-top: 50px;
`;

function Footer() {
  return (
    <div css={footerContainer}>
      <p>©2006 Pokémon. ©1995-2006 Nintendo/Creatures Inc./GAME FREAK inc.</p>
      <p>
        This content has been created in agreement with the Terms of Use for the
        Pokémon DP Sound Library.
      </p>
    </div>
  );
}

export default Footer;
