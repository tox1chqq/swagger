import {CREATE_NEW_USER_WATCHER, LOGIN_USER_WATCHER, RESET_PASSWORD_WATCHER} from '../redux-types';
import { takeEvery, call, put } from 'redux-saga/effects';
import SwaggerAPI from '../../services/index';
import { IRegistrationData } from '../../types';
import { setErrorAction, setUserAction } from '../profileReducer/actions';

type registrationParams = { payload: IRegistrationData; type: string };
type loginParams = { payload: IRegistrationData; type: string };
type resetPasswordParams = { payload: string; type: string };

function* registrationWorker({ payload }: registrationParams): Generator {
    const data: any = yield call(() => SwaggerAPI.registerUser(payload));

    if (data.code) {
        const { code, message } = data;

        yield put(setErrorAction(code, message));
        return;
    }

    const { email, name, id } = data;

    put(setUserAction(email, name, id));
}

function* loginWorker({ payload }: loginParams): Generator {
    const data: any = yield call(() => SwaggerAPI.loginUser(payload));

    if (data.code) {
        const { code, message } = data;

        yield put(setErrorAction(code, message));
        return;
    }

    const { email, name, id } = data;

    put(setUserAction(email, name, id));
}

function* resetPassword({ payload }: resetPasswordParams): Generator {
    const data: any = yield call(() => SwaggerAPI.resetPassword(payload));

    if (data.code) {
        const { code, message } = data;

        yield put(setErrorAction(code, message));
        return;
    }

}


export function* authWatcher() {
    yield takeEvery(CREATE_NEW_USER_WATCHER, registrationWorker);
    yield takeEvery(LOGIN_USER_WATCHER, loginWorker);
    yield takeEvery(RESET_PASSWORD_WATCHER, resetPassword);
}
