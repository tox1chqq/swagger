export interface IError {
    code: number;
    message: string;
}

export interface IRegistrationData {
    name: string;
    email: string;
    password: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    email: string;
    name: string;
    role: Role;
}

export interface CustomAction {
    type: string;
    payload?: any;
}

enum Role {
    user = 'user',
    admin = 'admin'
}
