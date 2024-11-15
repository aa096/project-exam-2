import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #5B5149;
        --color-secondary: #F6F4F0;
        --color-tertiary: #D9C7AB;
        font-family: "Montserrat", sans-serif;
        height: 100%;
        margin: 0;
     }
     
     body {
        height: 100%;
        background: var(--color-secondary);
        color: var(--color-primary);
        margin: 0;
     }

    h1, h2, h3 {
        font-family: "SourceSans3", sans-serif;
    }
    
    a {
        font-family: "SourceSans3", sans-serif;
        font-weight: 390;
    }

     main {
         display: flex;
         flex-grow: 1;
     }

     footer {
         margin-top: auto; 
      }

      #root {
        padding: 0;
        max-width: 100%
    }
`;

export default GlobalStyle;
