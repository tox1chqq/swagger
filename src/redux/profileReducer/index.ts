import { SET_USER, SET_ERROR } from '../redux-types';
import { CustomAction } from '../../types';

const initialState = {
    id: null,
    email: '',
    name: '',
    role: 'user',
    errorCode: null,
    errorMessage: ''
};

export const profileReducer = (state = initialState, action: CustomAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email
            };
        case SET_ERROR:
            const { code, message } = action.payload;
            return { ...state, errorCode: code, errorMessage: message };
        default:
            return state;
    }
};
