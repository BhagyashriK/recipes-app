import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.BASE_BG};
    color: ${props => props.theme.BASE_TEXT_COLOR};
    font-size: 1rem;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
  * {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding-left: 5px;
  }
  p {
    margin: 0.3rem 0;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0.3rem 0;
  }
`;

GlobalStyles.defaultProps = {
  theme: {
    BASE_BG: "#D2D2D2",
    BASE_TEXT_COLOR: "#333333"
  }
};
