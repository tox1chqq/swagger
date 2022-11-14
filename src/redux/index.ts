import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
