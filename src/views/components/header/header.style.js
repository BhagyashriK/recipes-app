import styled from "styled-components";
import { IconButton } from "../button/button.index";

export const Wrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.HEADER_BG};
  color: ${props => props.theme.HEADER_TEXT_COLOR};
  ${IconButton} {
    margin-right: 10px;
  }
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 15px;
    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
      max-width: 540px;
    }
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
      max-width: 720px;
    }
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
      max-width: 960px;
    }
    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }
`;

Wrapper.defaultProps = {
  theme: {
    HEADER_BG: "#086FB8",
    HEADER_TEXT_COLOR: "#ffffff"
  }
};
