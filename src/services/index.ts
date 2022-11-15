import axios, {AxiosError} from "axios";
import {ILoginData, IRegistrationData} from "../types";

const link = 'https://assignment-reactjs-co.herokuapp.com/v1'

class PhotoGalleryApi {
    getInstance = () => {
        const instance = axios.create({
            baseURL: link,
            headers: {
            "Content-Type": "application/json",
        },
        })
        return instance;
    }

    registerUser = async (registerData:IRegistrationData) => {
        try {
            const response = await this.getInstance().post('/auth/register', JSON.stringify(registerData))
            console.log(response.data)
            return  response.data
        }catch (e){
            if (e instanceof AxiosError){
                const {code, message} = e?.response?.data
                console.log(code,message)
                return {code, message}
            }
        }
    }

    loginUser = async (registerData:ILoginData) => {
        try {
            const response = await this.getInstance().post('/auth/login', JSON.stringify(registerData))
            console.log(response.data)
            return  response.data
        }catch (e){
            if (e instanceof AxiosError){
                const {code, message} = e?.response?.data
                console.log(code,message)
                return {code, message}
            }
        }
    }
}


export default new PhotoGalleryApi();