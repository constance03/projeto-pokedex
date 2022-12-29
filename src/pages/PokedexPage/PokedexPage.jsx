import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { URL_DETAILS } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { DivCards, DivMain, TitlePokedex } from "./pokedexPageStyled";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex } = context;

  return (
    <div>
      <DivMain>
        <Header />
        <TitlePokedex>Meus Pokémons</TitlePokedex>
        <DivCards>
          {/* getting pokedex state from the button on Card and mapping to show the pokemons */}
          {pokedex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                pokemonUrl={`${URL_DETAILS}/${pokemon.name}`}
              />
            );
          })}
        </DivCards>
      </DivMain>
    </div>
  );
};

export default PokedexPage;
