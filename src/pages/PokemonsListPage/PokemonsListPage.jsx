import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { URL_DETAILS } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { DivCards, DivMain, TitleListPage } from "./pokemonsListPageStyled";

const PokemonsListPage = () => {
  const context = useContext(GlobalContext);
  const { pokemonList, pokedex } = context;

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
