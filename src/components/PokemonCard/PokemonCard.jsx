import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../routes/coordinator";
import {
  Card,
  ImgCard,
  ImgPokeball,
  PokemonID,
  PokemonName,
  TypesContainer,
  PokemonType,
  ButtonDetails,
  ButtonCapture,
  ButtonDelete,
} from "./pokemonCardStyle";
import pokeball from "../../assets/pokeball.png";
import { getPokemonType } from "../../functions/types";
import { getPokemonColors } from "../../functions/color";
import { GlobalContext } from "../../contexts/GlobalContext";

const PokemonCard = (props) => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pokemon, pokemonUrl } = props;
  const { addToPokedex, removeFromPokedex } = context;
  const [pokemonInfo, setPokemonInfo] = useState([]);
  // hook para saber nosso path atual
  const location = useLocation();

  //use API to get the pokemon details from the pokemons list
  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  const fetchPokemonInfo = () => {
    axios
      .get(pokemonUrl)
      .then((resp) => {
        setPokemonInfo(resp.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar informações de pokemon");
        console.log(error.response);
      });
  };

  return (
    //set the card color following a function, using the .types property from API
    <Card
      color={getPokemonColors(
        pokemonInfo.types && pokemonInfo.types[0].type.name
      )}
    >
      <div>
        <PokemonID>#0{pokemonInfo.id}</PokemonID>
        <PokemonName>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </PokemonName>
        <TypesContainer>
          {/* get the pokemon types and use the function "getPokemonType" to get the icons */}
          {pokemonInfo.types?.map((type) => {
            return (
              <PokemonType
                key={type.type.name}
                src={getPokemonType(type.type.name)}
              />
            );
          })}
        </TypesContainer>
        <ButtonDetails
          onClick={() => {
            goToPokemonDetailPage(navigate, pokemonInfo.id);
          }}
        >
          Detalhes
        </ButtonDetails>
      </div>
      <div>
        <ImgCard
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
        />
        {/* use the location to render conditional button in each page, to delete and add to pokedex (functions on app) */}
        {location.pathname === "/" ? (
          <ButtonCapture
            onClick={() => {
              addToPokedex(pokemonInfo);
            }}
          >
            Capturar!
          </ButtonCapture>
        ) : (
          <ButtonDelete
            onClick={() => {
              removeFromPokedex(pokemonInfo);
            }}
          >
            Excluir
          </ButtonDelete>
        )}
      </div>
      <ImgPokeball src={pokeball} />
    </Card>
  );
};

export default PokemonCard;
