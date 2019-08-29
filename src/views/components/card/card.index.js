import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: ${props => props.theme.CARD_BG};
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  ${CardSection} + ${CardSection} {
    border-top: 1px solid ${props => props.theme.CARD_BORDER};
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

Card.defaultProps = {
  theme: {
    CARD_BG: "#fff",
    CARD_BORDER: "#d4d4d4",
    BASE_BORDER_RADIUS: "3px"
  }
};

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
