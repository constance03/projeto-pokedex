import React, { useContext } from "react";
import {
  ButtonAddOrDelete,
  ButtonPokedex,
  ButtonPokemonsList,
  DivHeader,
  ImgArrow,
  ImgLogo,
} from "./headerStyle";
import {
  goToPokedexPage,
  goToPokemonsListPage,
} from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png"
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); //see the address of the page we are in (location.pathname)
  const context = useContext(GlobalContext);
  const { addOrRemovePokedex } = context;


  console.log(location.pathname.slice(9,));
  //function to conditionally render header on each page
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <ButtonPokedex onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </ButtonPokedex>
            <ImgLogo src={logo} />
          </>
        );
      case "/pokedex":
        return (
          <>
            <ImgLogo src={logo} />
            <ImgArrow src={arrow} />
            <ButtonPokemonsList onClick={() => goToPokemonsListPage(navigate)}>
              Voltar para Pokemons
            </ButtonPokemonsList>
          </>
        );
      default:
        return (
          <>
            <ButtonAddOrDelete onClick={() => addOrRemovePokedex(Number(location.pathname.slice(9,)))}>
              Adicionar/Excluir da Pokedex
            </ButtonAddOrDelete>
            <ImgLogo src={logo} />
            <ImgArrow src={arrow} />
            <ButtonPokemonsList onClick={() => goToPokemonsListPage(navigate)}>
              Voltar para Pokemons
            </ButtonPokemonsList>
          </>
        );
    }
  };

  return <DivHeader>{renderHeader()}</DivHeader>;
};

export default Header;
