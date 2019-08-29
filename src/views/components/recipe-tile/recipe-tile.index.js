import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { ListItem } from "../list/list.index";
import { Title, Image } from "./recipe-tile.style";

const RecipeTile = ({ item, history }) => {
  const { id, chefId, tagId, contentType, title, imageUrl } = item;

  const goToRecipeDetails = () => {
    history.push(
      `/recipe-details/?id=${id}&chefId=${chefId}&tagId=${tagId}&contentType=${contentType}`
    );
  };

  return (
    <ListItem key={id} onClick={goToRecipeDetails}>
      <Image src={imageUrl} alt={title}></Image>
      <Title>{title}</Title>
    </ListItem>
  );
};

RecipeTile.propTypes = {
  item: PropTypes.object
};

export default withRouter(RecipeTile);
