import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap') format('woff');
    font-weight: 400;
    font-style: normal;
}

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

const LAYOUT_BREAK_POINT = {
  MOBILE: 450,
  MIDDLE: 800,
  PAD: 1000,
  MAC: 1440,
};

const createMediaQuery = (mediaPx: number): string => {
  return `@media(max-width: ${mediaPx}px)`;
};

export const mediaQuery = {
  mobile: createMediaQuery(LAYOUT_BREAK_POINT.MOBILE),
  middle: createMediaQuery(LAYOUT_BREAK_POINT.MIDDLE),
  pad: createMediaQuery(LAYOUT_BREAK_POINT.PAD),
  mac: createMediaQuery(LAYOUT_BREAK_POINT.MAC),
};
