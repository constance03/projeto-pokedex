import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  // applying props on the color of the card
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 30px;
  color: #ffffff;
`;

export const PokemonID = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;

export const ImgPokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonCapture = styled.button`
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const ButtonDelete = styled.button`
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ff6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #ffffff;
`;

export const ImgCard = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`;

export const ButtonDetails = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 74px;
  height: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ffffff;
`;
