import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { profileReducer } from './profileReducer';
import { rootWatcher } from './sagas';

const rootReducer = combineReducers({ profileReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default store;
