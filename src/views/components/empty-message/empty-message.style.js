import styled from "styled-components";

export const StyledEmptyMsg = styled.div`
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  border-radius: ${props => props.theme.EMPTY_MSG_RADIUS};
  color: ${props => props.theme.EMPTY_MSG_TEXT_COLOR};
  font-size: 1.2rem;
`;

StyledEmptyMsg.defaultProps = {
  theme: {
    EMPTY_MSG_RADIUS: "3px",
    EMPTY_MSG_TEXT_COLOR: "#666"
  }
};
