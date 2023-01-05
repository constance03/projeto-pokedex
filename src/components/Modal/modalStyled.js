import styled from "styled-components";

export const DivModal = styled.div`
  width: 1440px;
  height: 2455px; 
  position: absolute;
  z-index: 99 !important;
`;

export const DivModalContent = styled.div`
position: fixed;
background: #FFFFFF;
border-radius: 12px;
left: 35vw;
right: 50vw;
bottom: 30vh; 
width: 451px;
height: 222px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ModalTitle = styled.p`
font-weight: 700;
font-size: 48px;
`;

export const DivModalBody = styled.div`
padding: 10px;
border-top: 1px solid white;
border-bottom: 1px solid white;
font-weight: 700;
font-size: 16px;
`;
