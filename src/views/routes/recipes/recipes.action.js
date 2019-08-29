import axios from "axios";
import { GET_RECIPES_SUCCESS, GET_RECIPES_ERROR } from "./recipes.actionTypes";
import { showLoader, hideLoader } from "../../components/loader/loader.action";
import { keyBy } from "lodash";
const CONTENTFUL_SERVICE = process.env.REACT_APP_CONTENTFUL_SERVICE;
const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ENVIOURNMENT_ID = process.env.REACT_APP_ENVIOURNMENT_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const formatData = ({ includes, items }) => {
  const assets = keyBy(includes.Asset, asset => asset.sys.id);
  const recipes = items
    .filter(recipe => recipe.fields.title)
    .map(({ fields, sys }) => {
      const image = assets[fields.photo.sys.id].fields;
      return {
        title: fields.title,
        id: sys.id,
        imageUrl: image.file.url,
        chefId: fields.chef && fields.chef.sys.id,
        tagId: fields.tags && fields.tags[0].sys.id,
        contentType: sys.contentType.sys.id
      };
    });
  return { items: recipes };
};

export const getRecipes = () => {
  return dispatch => {
    showLoader(dispatch);
    return axios
      .get(
        `${CONTENTFUL_SERVICE}spaces/${SPACE_ID}/environments/${ENVIOURNMENT_ID}/entries/?access_token=${ACCESS_TOKEN}`
      )
      .then(
        response => {
          hideLoader(dispatch);
          dispatch({
            type: GET_RECIPES_SUCCESS,
            payload: formatData(response.data)
          });
          return response.data;
        },
        error => {
          hideLoader(dispatch);
          dispatch({ type: GET_RECIPES_ERROR, payload: { items: [] } });
          return Promise.reject(error);
        }
      )
      .catch(error => error);
  };
};
