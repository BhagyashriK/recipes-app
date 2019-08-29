import styled from "styled-components";

export const Bullet = styled.span`
  padding: 5px;
  margin-left: 5px;
  background: ${props => props.theme.BULLET_BG};
  border-radius: ${props => props.theme.BORDER_RADIUS_LG};
  font-size: 0.7rem;
  font-weight: bold;
  color: ${props => props.theme.BULLET_TEXT_COLOR};
`;

Bullet.defaultProps = {
  theme: {
    BORDER_RADIUS_LG: "10px",
    BULLET_BG: "#086FB8",
    BULLET_TEXT_COLOR: "#ffffff"
  }
};
