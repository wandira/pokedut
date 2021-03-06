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
    new Map([["charoo", charoDetails]])
  );

  //RUN ONLY ONCE AFTER RENDER, PREFILL FROM LOCALSTORAGE
  useEffect(() => {
    const data = localStorage.getItem("pokedut6");
    if (data) {
      setMyPokemons(new Map(JSON.parse(data)));
    }
  }, []);

  //UPDATES LOCALSTORAGE EVERYTIME myPokemons CHANGES
  useEffect(() => {
    localStorage.setItem("pokedut6", JSON.stringify([...myPokemons]));
  });

  //THE VALUE THAT WILL BE PASSED THROUGH CONTEXT
  const value = useMemo(() => ({ myPokemons, setMyPokemons }), [myPokemons]);

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
