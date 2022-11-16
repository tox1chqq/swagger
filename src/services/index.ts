import axios, { AxiosError } from 'axios';
import { ILoginData, IRegistrationData } from '../types';

const link = 'https://assignment-reactjs-co.herokuapp.com/v1';
const access = localStorage.getItem('');

class SwaggerAPI {
    getInstance = () => {
        const instance = axios.create({
            baseURL: link,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return instance;
    };

    registerUser = async (registerData: IRegistrationData) => {
        try {
            const response = await this.getInstance().post('/auth/register', JSON.stringify(registerData));
            console.log(response.data);
            return response.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                const { code, message } = e?.response?.data;
                console.log(code, message);
                return { code, message };
            }
        }
    };

    loginUser = async (loginData: ILoginData) => {
        try {
            const response = await this.getInstance().post('/auth/login', JSON.stringify(loginData));
            console.log(response.data);
            return response.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                const { code, message } = e?.response?.data;
                console.log(code, message);
                return { code, message };
            }
        }
    };

    resetPassword = async (email: string) => {
        try {
            const response = await this.getInstance().post('/auth/forgot-password', JSON.stringify(email));
            console.log(response.data);
            return response.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                const { code, message } = e?.response?.data;
                console.log(code, message);
                return { code, message };
            }
        }
    };
}

export default new SwaggerAPI();
