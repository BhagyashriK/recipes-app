import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin: 5px;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  background: ${props => props.theme.LIST_ITEM_BG};
  &:hover {
    background: ${props => props.theme.LIST_ITEM_HOVER_BG};
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    width: 48%;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 32%;
  }
`;

ListItem.defaultProps = {
  theme: {
    LIST_ITEM_BG: "#ffffff",
    LIST_ITEM_HOVER_BG: "#f7f7f7",
    BASE_BORDER_RADIUS: "3px"
  }
};

export const List = styled.ul`
  width: 100%;
  margin: 0 -5px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`;
