import { BrowserRouter, Routes, Route } from "react-router-dom";

//NAVBAR
import Navbar from "./components/Navbar";

//PAGES
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import MyPokemon from "./pages/MyPokemon";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:pokemonName" element={<PokemonDetails />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
