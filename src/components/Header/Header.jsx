import React, { useContext } from "react";
import {
  ButtonAddtoPokedex,
  ButtonDeleteFromPokedex,
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
import { ModalCapture, ModalDelete } from "../Modal/Modal";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); //see the address of the page we are in (location.pathname)
  const context = useContext(GlobalContext)
  const {pokedex, pokemonDetails, addToPokedex, removeFromPokedex, showMessage, setShowMessage} = context

  function renderButton () {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonDetails.name
    );
  
    if (!isAlreadyOnPokedex) {
      return (
        <>
          <ModalDelete onClose={() => setShowMessage(false)} show={showMessage}/> 
          <ButtonAddtoPokedex onClick={() => addToPokedex(pokemonDetails)}>Adicionar na Pokedex</ButtonAddtoPokedex>
        </>
      )
    } else {
      return (
        <>
          <ModalCapture onClose={() => setShowMessage(false)} show={showMessage}/> 
          <ButtonDeleteFromPokedex onClick={() => removeFromPokedex(pokemonDetails)}>Excluir da Pokedex</ButtonDeleteFromPokedex>
        </>
      )
    }
  }

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
              {renderButton()}
              <ImgLogo src={logo} />
              <ImgArrow src={arrow} />
              <ButtonPokemonsList onClick={() => goToPokemonsListPage(navigate)}>
                Voltar para Pokemons
              </ButtonPokemonsList>
          </>
          )
    }
  };

  return <DivHeader>{renderHeader()}</DivHeader>;
};

export default Header;
