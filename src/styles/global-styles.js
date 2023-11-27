import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
:root {
    --color-primary: #6c63ff;
    --color-success: #00bf8e;
    --color-warning: #f7c94b;
    --color-danger: #f75842;
    --color-danger-variant: rgba(247, 88, 66, 0.4);
    --color-white: #fff;
    --color-light: rgba(255, 255, 255, 0.7);
    --color-black: #000;
    --color-bg: #000000;
    --color-bg1: #be321d;
    --color-bg2: #424890;
    --container-width-1g: 80%;
    --container-width-md: 90%;
    --container-width-sm: 94%;
    --transition: all 400ms ease;
  }

  html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background: var(--color-black);
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;
