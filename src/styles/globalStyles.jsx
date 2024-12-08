import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #5B5149;
        --color-secondary: #F6F4F0;
        --color-tertiary: #D9C7AB;
        font-family: "Montserrat", sans-serif;
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
        font-weight: 400;
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: var(--color-tertiary)
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

    .react-calendar {
        background-color: #F7F4F0;
        border: none;
    }

    .react-calendar__tile--active {
    background-color: #d9c7ab ;
    }

    .react-calendar__tile:disabled {
    background-color: #E7E0D8;
    color: #BCA99A;
    cursor: not-allowed;
    }
`;

export default GlobalStyle;
