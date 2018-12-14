import { CLEAR_REVIEWS, SET_REVIEWS, SET_SHOW } from '../actions/types';

const initialState = {
  reviewsList: [],
  show: {
    rating: 0,
    publish_date: '',
    id: '',
    body: '',
    author: ''
  },
  ratingAverage: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_REVIEWS:
      return initialState;
    case SET_SHOW:
      return { ...state, show: action.payload };
    case SET_REVIEWS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
