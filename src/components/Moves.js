/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const gridContainer = css`
  display: grid;
  grid-template: auto auto / auto auto;
  gap: 15px;
`;

const moveDiv = css({
  textAlign: "center",
  border: "1px solid black",
  borderRadius: 20,
  padding: "5px",
  backgroundColor: "floralwhite",
});

function Moves({ moves }) {
  return (
    <div css={gridContainer}>
      {moves.map((move, i) => {
        return (
          <div key={i} css={moveDiv}>
            <span>{move.move.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Moves;
