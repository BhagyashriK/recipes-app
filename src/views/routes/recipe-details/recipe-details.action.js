import axios from "axios";
import qs from "querystring";
import { keyBy, pickBy } from "lodash";

import { showLoader, hideLoader } from "../../components/loader/loader.action";
import {
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_ERROR
} from "./recipe-details.actionTypes";

const CONTENTFUL_SERVICE = process.env.REACT_APP_CONTENTFUL_SERVICE;
const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ENVIOURNMENT_ID = process.env.REACT_APP_ENVIOURNMENT_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

// Helper function for UI consumable data manipulation, ideally should be done on backend
const formatData = ({ id, includes, items }) => {
  const assets = keyBy(includes.Asset, asset => asset.sys.id);
  const entries = keyBy(includes.Entry, entry => entry.sys.id);
  const { fields } = items.find(item => item.sys.id === id);
  return {
    title: fields.title,
    description: fields.description,
    calories: fields.calories,
    imageUrl: assets[fields.photo.sys.id].fields.file.url,
    chef: fields.chef && entries[fields.chef.sys.id].fields.name,
    tags: fields.tags && fields.tags.map(tag => entries[tag.sys.id].fields.name)
  };
};

export const getRecipeDetails = ({ id, chefId, tagId, contentType }) => {
  const queryParams = {
    "fields.chef.sys.id": chefId,
    "fields.tags.sys.id": tagId,
    content_type: contentType,
    access_token: ACCESS_TOKEN
  };
  const cleanQueryParams = pickBy(queryParams, v => v !== "undefined");
  return dispatch => {
    showLoader(dispatch);
    return axios
      .get(
        `${CONTENTFUL_SERVICE}spaces/${SPACE_ID}/environments/${ENVIOURNMENT_ID}/entries/?${qs.stringify(
          cleanQueryParams
        )}`
      )
      .then(
        response => {
          hideLoader(dispatch);
          dispatch({
            type: GET_RECIPE_DETAILS_SUCCESS,
            payload: formatData({ ...response.data, id })
          });
          return response.data;
        },
        error => {
          hideLoader(dispatch);
          dispatch({ type: GET_RECIPE_DETAILS_ERROR, payload: {} });
          return Promise.reject(error);
        }
      )
      .catch(error => error);
  };
};
