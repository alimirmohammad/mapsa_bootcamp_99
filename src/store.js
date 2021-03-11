import { createStore, applyMiddleware, compose } from 'redux';
import counterReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
