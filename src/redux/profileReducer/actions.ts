import {CREATE_NEW_USER_WATCHER, LOGIN_USER_WATCHER, RESET_PASSWORD_WATCHER, SET_ERROR, SET_USER} from '../redux-types';

export const setErrorAction = (code: number, message: string) => {
    return { type: SET_ERROR, payload: { code, message } };
};

export const setUserAction = (email: string, name: string, id: string) => {
    return { type: SET_USER, payload: { email, name, id } };
};

export const createNewUserWatcher = (email: string, name: string, password: string) => {
    return {
        type: CREATE_NEW_USER_WATCHER,
        payload: { email, name, password }
    };
};

export const loginUserWatcher = (email: string, password: string) => {
    return { type: LOGIN_USER_WATCHER, payload: { email, password } };
};

export const resetPasswordWatcher = (email: string) => {
    return {type: RESET_PASSWORD_WATCHER, payload: {email}}
}
