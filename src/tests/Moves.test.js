import React from "react";
import { render } from "@testing-library/react";
import Moves from "../components/Moves";

describe("Moves component should render given moves", () => {
  it("renders moves from props", () => {
    const movesProp = [
      { move: { name: "tackle" } },
      { move: { name: "splash" } },
    ];
    const { getByText } = render(<Moves moves={movesProp} />);
    expect(getByText(movesProp[0].move.name).textContent).toMatch("tackle");
    expect(getByText(movesProp[1].move.name).textContent).toMatch("splash");
  });
});
