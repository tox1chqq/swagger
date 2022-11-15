import {CREATE_NEW_USER, LOGIN_USER} from "../redux-types";
import {takeEvery,call} from 'redux-saga/effects'
import PhotoGalleryApi from '../../services/index'
import {IRegistrationData} from "../../types";


type  Params = { payload: IRegistrationData, type: string }

function* loginWorker() {

}

function* registrationWorker({payload}: Params):Generator {
    const data =  yield call( () => PhotoGalleryApi.registerUser(payload))

    console.log(data)
}




export function* authWatcher(){
   yield takeEvery(CREATE_NEW_USER, registrationWorker)
    yield takeEvery(LOGIN_USER, loginWorker)
}