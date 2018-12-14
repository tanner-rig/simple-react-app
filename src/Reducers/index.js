import { combineReducers } from 'redux';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
  reviews: reviewsReducer
});

export default rootReducer;
