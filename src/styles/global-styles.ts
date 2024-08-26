import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Nunito", sans-serif;
    }

    button {
        border: none;
    }
    
    html {
        font-size: 62.5%;
    }
`