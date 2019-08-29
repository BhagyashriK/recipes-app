import React from "react";
import PropTypes from "prop-types";

import { StyledEmptyMsg } from "./empty-message.style";

const EmptyMsg = ({ msg }) => {
  return <StyledEmptyMsg> {msg} </StyledEmptyMsg>;
};

EmptyMsg.propTypes = {
  msg: PropTypes.string
};

export default EmptyMsg;
