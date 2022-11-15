import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({profileReducer});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
