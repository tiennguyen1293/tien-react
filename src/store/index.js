import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './combineReducers';

const exampleInitialState = {};

let enhanceCompose = compose;

const middlewareList = [thunkMiddleware, promiseMiddleware()];

if (process.env.NODE_ENV !== 'production') {
  enhanceCompose = composeWithDevTools;
  middlewareList.push(createLogger({ collapsed: true }));
}

export default (initialState = exampleInitialState) => {
  return createStore(
    rootReducer,
    initialState,
    enhanceCompose(applyMiddleware(...middlewareList))
  );
};
