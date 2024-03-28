import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/Inter-Medium.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('./fonts/Inter-Regular.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('./fonts/Inter-SemiBold.ttf') format('ttf'); 
  }

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  font-family: ${theme.fonts.mainFont};
  color:${theme.colors.primary};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol,
dl {
  margin: 0;
  padding: 0;
}

li, 
dt {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

figure {
  margin: 0;
}

button {
  cursor: pointer;
  padding: 0;
  border: none;
  font: inherit;
}
`;

export default GlobalStyle;
