import React, { Component } from "react";
import qs from "querystring";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container } from "../../components/layout/layout.index";
import {
  Card,
  CardSection,
  CardContent
} from "../../components/card/card.index";
import { IconButton } from "../../components/button/button.index";
import { Bullet } from "../../components/bullet/bullet.index";
import Header from "../../components/header/header.index";
import { getRecipeDetails } from "./recipe-details.action";
import Loader from "../../components/loader/loader.index";
import { ImageWrapper, Tags } from "./recipe-details.style";

class RecipeDetails extends Component {
  // Get recipe details
  componentDidMount() {
    const { id, chefId, tagId, contentType } = qs.parse(
      this.props.location.search.replace("?", "")
    );
    this.props.getRecipeDetails({ id, chefId, tagId, contentType });
  }
  // Goto Recipe Details
  gotoRecipes = () => {
    this.props.history.push("/recipes");
  };
  render() {
    const {
      title,
      imageUrl,
      calories,
      tags = [],
      description,
      chef
    } = this.props.recipeDetails;
    return (
      <>
        {/* Header Section */}
        <Header>
          <IconButton primary onClick={this.gotoRecipes}>
            &#8592;
          </IconButton>
          <h3>Recipe Details</h3>
        </Header>

        {!this.props.isLoading && (
          <Container data-testid="recipe-details-wrapper">
            <Card>
              <ImageWrapper>
                <img data-testid="recipe-image" src={imageUrl} alt={title} />
                <Tags>
                  {tags.length
                    ? tags.map(tag => <Bullet key={tag}>{tag}</Bullet>)
                    : "-"}
                </Tags>
              </ImageWrapper>
              <CardContent>
                {/* Recipe Title  */}
                <CardSection>
                  <p>
                    <b>Title: </b> {title}
                  </p>
                </CardSection>

                {/* Description */}
                <CardSection>
                  <p>
                    <b>Description: </b> {description}
                  </p>
                </CardSection>

                {/* Calories */}
                {calories && (
                  <CardSection>
                    <p>
                      <b>Calories: </b> {calories}
                    </p>
                  </CardSection>
                )}

                {/* Recipe By  */}
                {chef && (
                  <CardSection>
                    <p>
                      <b>Recipe By:</b> {chef}
                    </p>
                  </CardSection>
                )}
              </CardContent>
            </Card>
          </Container>
        )}
        {/* show Loader if isLoading true */}
        {this.props.isLoading && <Loader />}
      </>
    );
  }
}

RecipeDetails.propTypes = {
  recipeDetails: PropTypes.object,
  isLoading: PropTypes.bool,
  getRecipeDetails: PropTypes.func
};

const mapStateToProps = ({ recipeDetails, loader }) => {
  return {
    recipeDetails,
    isLoading: loader.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getRecipeDetails }
)(RecipeDetails);
