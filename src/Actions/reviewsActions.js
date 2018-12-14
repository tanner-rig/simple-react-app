import axios from 'axios';

import { CLEAR_REVIEWS, SET_REVIEWS, SET_SHOW } from './types';
import * as constants from '../Constants';

// gets all reviews
export function getReviewsIndex() {
  const options = {
    headers: {
      'x-api-key': constants.API_KEY,
      'Content-Type': 'application/json'
    }
  };

  return dispatch => {
    axios.get(constants.API_BASE_URL, options)
      .then(response => {
        const ratingSum = response.data.reduce((sum, value) => sum + +value.rating, 0);
        const ratingAverage = (ratingSum / response.data.length).toFixed(1);
        
        dispatch({
          type: SET_REVIEWS,
          payload: { reviewsList: response.data, ratingAverage }
        });
      })
      .catch(e => {
        console.error('Error getting reviews: ', e);
      });
  };
}

// this is to get a specific review
export function getShow(showId) {
  const options = {
    headers: {
      'x-api-key': constants.API_KEY,
      'Content-Type': 'application/json'
    }
  };

  return dispatch => {
    axios.get(`${constants.API_BASE_URL}/${showId}`, options)
      .then(response => {
        dispatch({ type: SET_SHOW, payload: response.data });
      })
      .catch(e => {
        console.error('Error getting show: ', e);
      });
  };
}

export function clearReviews() {
  return dispatch => {
    dispatch({ type: CLEAR_REVIEWS });
  };
}
