export interface IFormProps {
    remember_me?: boolean;
    requestLogin: Function;
}

export interface IFormState {
    username: string;
    password: string
    submitted?: boolean;
}