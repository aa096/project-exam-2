import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     html {
        --color-primary: #5B5149;
        --color-secondary: #F6F4F0;
        --color-tertiary: ##D9C7AB;
        height: 100%;
        margin: 0;
     }
     
     body {
        height: 100%;
        background: var(--color-secondary);
        color: var(--color-primary);
        margin: 0;
     }

     main {
         display: flex;
         flex-grow: 1;
     }

     footer {
         margin-top: auto; 
      }
`;

export default GlobalStyle;
