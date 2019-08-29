import styled from "styled-components";

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.sm ? "30px" : "40px")};
  height: ${props => (props.sm ? "30px" : "40px")};
  cursor: pointer;
  border-radius: ${props => props.theme.ICON_BUTTON_BORDER_RADIUS};
  background: ${props =>
    props.primary
      ? props.theme.ICON_BUTTON_PRIMARY_BG
      : props.theme.ICON_BUTTON_BG};
  border: 1px solid
    ${props =>
      props.primary
        ? props.theme.ICON_BUTTON_PRIMARY_BORDER_COLOR
        : props.theme.ICON_BUTTON_BORDER_COLOR};
  color: ${props =>
    props.primary
      ? props.theme.ICON_BUTTON_PRIMARY_TEXT_COLOR
      : props.theme.ICON_BUTTON_TEXT_COLOR};
  font-size: ${props => (props.sm ? "1.2rem" : "1.5rem")};
  &:hover {
    background: ${props =>
      props.primary
        ? props.theme.ICON_BUTTON_PRIMARY_BG_HOVER
        : props.theme.ICON_BUTTON_BG_HOVER};
    border: 1px solid
      ${props =>
        props.primary
          ? props.theme.ICON_BUTTON_PRIMARY_BORDER_COLOR_HOVER
          : props.theme.ICON_BUTTON_BORDER_COLOR_HOVER};
  }

  &:focus {
    outline: 0;
  }
`;

IconButton.defaultProps = {
  theme: {
    ICON_BUTTON_BORDER_RADIUS: "100%",
    ICON_BUTTON_BG: "#d2d2d2",
    ICON_BUTTON_BORDER_COLOR: "#d2d2d2",
    ICON_BUTTON_PRIMARY_BG: "#329bff",
    ICON_BUTTON_PRIMARY_BORDER_COLOR: "#329bff",
    ICON_BUTTON_TEXT_COLOR: "#333",
    ICON_BUTTON_PRIMARY_TEXT_COLOR: "#fff",
    ICON_BUTTON_BG_HOVER: "#b7b7b7",
    ICON_BUTTON_PRIMARY_BG_HOVER: "#2d8fec",
    ICON_BUTTON_BORDER_COLOR_HOVER: "#b7b7b7",
    ICON_BUTTON_PRIMARY_BORDER_COLOR_HOVER: "#2d8fec"
  }
};
