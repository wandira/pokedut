/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import globalStyles from "./globalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//NAVBAR
import Navbar from "./components/Navbar";

//PAGES
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import MyPokemon from "./pages/MyPokemon";

//SHARED CONTEXT, PERSIST TO LOCAL STORAGE
import { createContext, useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
export const MyPokemonStorage = createContext();

const charoDetails = {
  name: "charmander",
  id: 4,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
};

const PageRoutes = () => {
  const [myPokemons, setMyPokemons] = useState(
    new Map([["my starter", charoDetails]])
  );
  const [caughtPokemonIds, setCaughtPokemonIds] = useState(new Set([4]));

  //RUN ONLY ONCE AFTER RENDER, PREFILL FROM LOCALSTORAGE
  useEffect(() => {
    const data = localStorage.getItem("pokedut6");
    const data2 = localStorage.getItem("pokedut6-set");
    if (data) {
      setMyPokemons(new Map(JSON.parse(data)));
      setCaughtPokemonIds(new Set(JSON.parse(data2)));
    }
  }, []);

  //UPDATES LOCALSTORAGE EVERYTIME myPokemons CHANGES
  useEffect(() => {
    localStorage.setItem("pokedut6", JSON.stringify([...myPokemons]));
    localStorage.setItem("pokedut6-set", JSON.stringify([...caughtPokemonIds]));
  });

  //THE VALUE THAT WILL BE PASSED THROUGH CONTEXT
  const value = useMemo(
    () => ({
      myPokemons,
      setMyPokemons,
      caughtPokemonIds,
      setCaughtPokemonIds,
    }),
    [myPokemons]
  );

  return (
    <BrowserRouter>
      <Navbar />
      <MyPokemonStorage.Provider value={value}>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/:pokemonName" element={<PokemonDetails />} />
          <Route path="/mypokemon" element={<MyPokemon />} />
        </Routes>
      </MyPokemonStorage.Provider>
      <Footer />
      <Global styles={css(globalStyles)} />
    </BrowserRouter>
  );
};

export default PageRoutes;
