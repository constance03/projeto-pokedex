import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { URL_DETAILS } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ModalCapture } from "../../components/Modal/Modal";
import { DivCards, DivMain, TitleListPage } from "./pokemonsListPageStyled";

const PokemonsListPage = () => {
  const context = useContext(GlobalContext);
  const { pokemonList, pokedex, showMessage, setShowMessage } = context;


  //function to filter the pokemons list from the pokemons that go into the pokedex
  const filteredPokemonList = () =>
    pokemonList.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );        

  return (
    <DivMain>
      <Header />
      <TitleListPage>Todos Pokémons</TitleListPage>
      <ModalCapture onClose={() => setShowMessage(false)} show={showMessage}/>
      <DivCards>
        {filteredPokemonList().map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.url}
              pokemon={pokemon}
              pokemonUrl={`${URL_DETAILS}/${pokemon.name}`}
            />
          );
        })}
      </DivCards>
    </DivMain>
  );
};

export default PokemonsListPage;
