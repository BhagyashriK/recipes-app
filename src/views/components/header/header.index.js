import React from "react";
import { Wrapper } from "./header.style";

const Header = ({ children }) => {
  // Return header wrapped in style
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Header;
