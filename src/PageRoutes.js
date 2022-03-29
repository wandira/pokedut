import { BrowserRouter, Routes, Route } from "react-router-dom";

//NAVBAR
import Navbar from "./components/Navbar";

//PAGES
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import MyPokemon from "./pages/MyPokemon";

//SHARED CONTEXT, PERSIST TO LOCAL STORAGE
import { createContext, useEffect, useMemo, useState } from "react";
export const PokemonStorage = createContext();

const PageRoutes = () => {
  const [greet, setGreet] = useState({ hi: "babibu" }); //context setcontext
  const value = useMemo(() => ({ greet, setGreet }), [greet]);

  useEffect(() => {
    const data = localStorage.getItem("pokedut1");
    if (data) {
      setGreet(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pokedut1", JSON.stringify(greet));
  });

  return (
    <BrowserRouter>
      <Navbar />
      <PokemonStorage.Provider value={value}>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/:pokemonName" element={<PokemonDetails />} />
          <Route path="/mypokemon" element={<MyPokemon />} />
        </Routes>
      </PokemonStorage.Provider>
    </BrowserRouter>
  );
};

export default PageRoutes;
