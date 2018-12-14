import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducers';

// Create and export Redux Store
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export const getState = () => {
  return store.getState();
};
