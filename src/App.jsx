import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "./constants/url.js";
import { GlobalContext } from "./contexts/GlobalContext.jsx";
import Router from "./routes/Router.jsx";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  //axios to get the right pokemon list
  const fetchPokemonList = () => {
    axios
      .get(BASE_URL)
      .then((resp) => {
        setPokemonList(resp.data.results);
      })
      .catch((error) => {
        console.log("Erro ao buscar informaçöes de pokemon");
        console.log(error.response);
      });
  };

  //add a pokemon into pokedex
  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  //remove a pokemon from pokedex
  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };


  //remove or add, depending if the pokemon is on the pokedex or not
  const addOrRemovePokedex = (pokemonToAddOrRemove) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.id === pokemonToAddOrRemove
    );

     if (!isAlreadyOnPokedex) {
      console.log("not found");
    } else {
      console.log("found");
    }

    // if (!isAlreadyOnPokedex) {
    //   const newPokedex = [...pokedex, pokemonToAddOrRemove];
    //   setPokedex(newPokedex);
    // } else {
    //   removeFromPokedex(pokemonToAddOrRemove)
    // }
  };

  //pass the states through context to use on other pages
  const context = {
    pokemonList,
    setPokemonList,
    pokedex,
    setPokedex,
    addToPokedex,
    removeFromPokedex,
    addOrRemovePokedex
  };

  return (
    <div>
      {/* global context involving all pages, so all can have acess to the states */}
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
