import { createGlobalStyle } from "styled-components";

//reseting all formatting before use a custom one
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins'
    }
`;
