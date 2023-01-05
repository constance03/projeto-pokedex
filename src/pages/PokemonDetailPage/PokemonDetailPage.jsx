import React, { useContext, useEffect } from "react";
import {
  BarStats,
  BoxBaseStats,
  BoxMoves,
  Card,
  Container,
  ContainerImg,
  ContainerStats,
  DivBar,
  DivMoveTypes,
  DivStat,
  HrStats,
  ImgCard,
  ImgPixel,
  ImgPokeball,
  NumberStats,
  NumberTotalStats,
  PokemonID,
  PokemonName,
  PokemonType,
  SecondDiv,
  TextMoveType,
  TextStats,
  TextTotalStats,
  TitleBaseStatsMoves,
  TitleDetails,
  TypesContainer,
} from "./pokemonDetailPageStyled";
import pokeball from "../../assets/pokeball.png";
import { URL_DETAILS } from "../../constants/url";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getPokemonType } from "../../functions/types";
import { getPokemonColors } from "../../functions/color";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";

const PokemonDetailPage = () => {
  const params = useParams();
  const context = useContext(GlobalContext)
  const {pokemonDetails, setPokemonDetails} = context

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  //axios to get the api details using params to look at the pokemon id on the page address
  const fetchPokemonDetails = () => {
    axios
      .get(`${URL_DETAILS}/${params.id}`)
      .then((resp) => {
        setPokemonDetails(resp.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar informações de pokemon");
        console.log(error.response);
      });
  };

  //function to change the bar stats color according to the number it shows
  const barColor = (statNumber) => {
    if (statNumber <= 50) {
      return "#ff7c2d";
    } else {
      return "#ffdd6a";
    }
  };

  //add the 6 stats to come with the total points
  const totalStats = (stat) => {
    return (
      stat[0].base_stat +
      stat[1].base_stat +
      stat[2].base_stat +
      stat[3].base_stat +
      stat[4].base_stat +
      stat[5].base_stat
    );
  };


  return (
    <div>
      <Header/>
      <Container>
        <TitleDetails>Detalhes</TitleDetails>
        {/* send the color from the function using props to the styled and change the card color */}
        <Card
          color={getPokemonColors(
            pokemonDetails.types && pokemonDetails.types[0].type.name
          )}
        >
          <ImgPokeball src={pokeball} />
          <ContainerImg>
            <ImgPixel src={pokemonDetails.sprites?.front_default} />
            <ImgPixel src={pokemonDetails.sprites?.back_default} />
          </ContainerImg>

          <BoxBaseStats>
            <TitleBaseStatsMoves>Base stats</TitleBaseStatsMoves>

            <ContainerStats>
              <HrStats></HrStats>
              {/* get the stats from .stats property and mapping it to show on the details page */}
              {pokemonDetails.stats?.map((stat) => {
                return (
                  <>
                    <DivStat key={stat.stat.name}>
                      <TextStats>
                        {stat.stat.name.charAt(0).toUpperCase() +
                          stat.stat.name.slice(1)}
                      </TextStats>
                      <NumberStats>{stat.base_stat}</NumberStats>
                      <DivBar>
                        <BarStats
                          color={barColor(stat.base_stat)}
                          size={stat.base_stat}
                        ></BarStats>
                      </DivBar>
                    </DivStat>

                    <HrStats></HrStats>
                  </>
                );
              })}
              <DivStat>
                <TextTotalStats>Total</TextTotalStats>
                {/* using logical operator to wait for .stats to exist before using it */}
                <NumberTotalStats>
                  {pokemonDetails.stats && totalStats(pokemonDetails.stats)}
                </NumberTotalStats>
                <DivBar>
                  {/* use this invisible bar to continue with the right formatting */}
                  <BarStats color={"none"} size={100}></BarStats>
                </DivBar>
              </DivStat>
              <HrStats></HrStats>
            </ContainerStats>
          </BoxBaseStats>

          <SecondDiv>
            <PokemonID>#0{pokemonDetails.id}</PokemonID>
            <PokemonName>
              {pokemonDetails.name?.charAt(0).toUpperCase() +
                pokemonDetails.name?.slice(1)}
            </PokemonName>
            <TypesContainer>
              {pokemonDetails.types?.map((type) => {
                return (
                  <PokemonType
                    key={type.type.name}
                    src={getPokemonType(type.type.name)}
                  />
                );
              })}
            </TypesContainer>

            <BoxMoves>
              <TitleBaseStatsMoves>Moves:</TitleBaseStatsMoves>

              {/* select the right quantity of moves to show on page */}
              <DivMoveTypes>
                <TextMoveType>
                  {pokemonDetails.moves &&
                    pokemonDetails.moves[0].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[0].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {pokemonDetails.moves &&
                    pokemonDetails.moves[1].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[1].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {pokemonDetails.moves &&
                    pokemonDetails.moves[2].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[2].move.name?.slice(1)}
                </TextMoveType>
                <TextMoveType>
                  {pokemonDetails.moves &&
                    pokemonDetails.moves[3].move.name.charAt(0).toUpperCase() +
                      pokemonDetails.moves[3].move.name?.slice(1)}
                </TextMoveType>
              </DivMoveTypes>
            </BoxMoves>
          </SecondDiv>

          <ImgCard
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
          />
        </Card>
      </Container>
    </div>
  );
};

export default PokemonDetailPage;
