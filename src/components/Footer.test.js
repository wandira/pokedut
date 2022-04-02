import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer should contain songs copyright and Terms of Use", () => {
  it("renders correct copyright", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(
        "©2006 Pokémon. ©1995-2006 Nintendo/Creatures Inc./GAME FREAK inc."
      ).textContent
    ).toMatch(
      "©2006 Pokémon. ©1995-2006 Nintendo/Creatures Inc./GAME FREAK inc."
    );
  });
  it("renders correct terms of use", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(
        "This content has been created in agreement with the Terms of Use for the Pokémon DP Sound Library."
      ).textContent
    ).toMatch(
      "This content has been created in agreement with the Terms of Use for the Pokémon DP Sound Library."
    );
  });
});
