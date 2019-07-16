export interface IFormProps {
    email: string;
    password: string
    remember_me?: boolean;
}

export interface IFormState {
    submitted?: boolean;
}