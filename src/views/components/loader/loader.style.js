import styled from "styled-components";

export const StyledLoader = styled.div`
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  color: ${props => props.theme.LOADER_TEXT_COLOR};
  font-size: 1.2rem;
`;

StyledLoader.defaultProps = {
  theme: {
    BASE_BORDER_RADIUS: "3px",
    LOADER_TEXT_COLOR: "#666"
  }
};
