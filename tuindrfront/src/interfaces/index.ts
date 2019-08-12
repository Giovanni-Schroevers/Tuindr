export interface IFormProps {
    remember_me?: boolean;
}

export interface IFormState {
    email: string;
    password: string
    submitted?: boolean;
}