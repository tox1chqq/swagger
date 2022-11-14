export interface IError {
    code: number;
    message: string;
}

export interface IRegistrationData {
    name: string;
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    email: string;
    name: string;
    role: Role;
}

enum Role {
    user = 'user',
    admin = 'admin'
}
