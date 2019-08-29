import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  > img {
    max-width: 100%;
    height: auto;
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
      max-width: 30rem;
    }
  }
`;

export const Tags = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
`;
