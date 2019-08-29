import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container } from "../../components/layout/layout.index";
import { List } from "../../components/list/list.index";
import RecipeTile from "../../components/recipe-tile/recipe-tile.index";
import Loader from "../../components/loader/loader.index";
import EmptyMsg from "../../components/empty-message/empty-message.index";
import Header from "../../components/header/header.index";

import { getRecipes } from "./recipes.action";

const Recipes = ({ getRecipes, recipes, isLoading }) => {
  // Get recipes list on component mount
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const renderList = () => {
    return recipes.map(recipe => <RecipeTile key={recipe.id} item={recipe} />);
  };

  return (
    <>
      {/* Header Section */}
      <Header>
        <h3>Recipes</h3>
      </Header>

      <Container data-testid="recipe-list-wrapper">
        {/* show Loader if request is in progress */}
        {isLoading && <Loader />}

        {/* Recipes List */}
        {recipes.length > 0 && !isLoading && (
          <List data-testid="recipe-list">{renderList()}</List>
        )}

        {/* Show empty message recipes list is empty */}
        {recipes.length === 0 && !isLoading && <EmptyMsg msg={"No Results"} />}
      </Container>
    </>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array,
  isLoading: PropTypes.bool,
  getRecipes: PropTypes.func
};

const mapStateToProps = ({ recipes, loader }) => {
  return {
    recipes: recipes.list,
    isLoading: loader.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(Recipes);
