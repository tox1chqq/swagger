import { CREATE_NEW_USER } from '../redux-types';
import { Action } from 'redux';

const initialState = {};

export const profileReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return state;
        default:
            return state;
    }
};
