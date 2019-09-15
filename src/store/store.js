import {applyMiddleware,createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import rootReducer from '../reducer/index'
const middlewares = [thunk];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);