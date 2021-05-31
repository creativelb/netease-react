import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import app from './app/reducer.js'
import player from './player/reducer.js'

let store = createStore(
    combineReducers({app, player}),
    applyMiddleware(thunk)
);

export default store;
