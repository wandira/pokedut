/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const gridContainer = css`
  display: grid;
  grid-template: auto auto / auto auto;
  gap: 15px;
`;

function Moves({ moves }) {
  return (
    <div css={gridContainer}>
      {moves.map((move, i) => {
        return <span key={i}>{move.move.name}</span>;
      })}
    </div>
  );
}

export default Moves;
