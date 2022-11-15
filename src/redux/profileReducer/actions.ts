import { CREATE_NEW_USER, LOGIN_USER } from '../redux-types';

export const createNewUserAction =  (email:string, name:string, password:string) => {
    return { type: CREATE_NEW_USER, payload: { email, name, password } };
};

export const loginUserAction = (email: string, password: string) => {
    return { type: LOGIN_USER, payload: email, password };
};
