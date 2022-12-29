import React from "react";
import PokemonsListPage from "../pages/PokemonsListPage/PokemonsListPage.jsx";
import PokedexPage from "../pages/PokedexPage/PokedexPage.jsx";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        {/* use the :id to specify the pokemon id on the page address when clicked on pokemon */}
        <Route path="/details/:id" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
