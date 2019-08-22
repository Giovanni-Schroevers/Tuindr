import { ILoginRecieve, ILoginRequest, ILoginRecieveError, IResetPasswordEmail, IResetPasswordEmailError, IResetPassword, IResetPasswordError } from '../../../interfaces'

const reducer = (state = {}, action: ILoginRecieve | ILoginRequest | ILoginRecieveError | IResetPasswordEmail | IResetPasswordEmailError | IResetPassword | IResetPasswordError) => {
    switch(action.type) {
        case 'REQUEST_LOGIN': 
            return {...state, loading: true};
        case 'RECIEVE_LOGIN':
            window.location.href = '/';
            return {...state, loading: false, isAuthenticated: true, username: action.payload.sub};
        case 'RECIEVE_LOGIN_ERROR':
            let error
            switch (action.payload.status) {
                case 500: error = 'Internal Server Error'; break;
                case 401: error = 'Invalid credentials'; break;
                case 400: error = 'Bad Request'; break;
                default: error = 'Something went wrong';
            }
            return {...state, loading: false, loginError: error};
        case 'RECIEVE_SEND_NEW_PASSWORD_EMAIL':
            return {...state, emailError: "Email has been send"}
        case 'RECIEVE_SEND_NEW_PASSWORD_EMAIL_ERROR':
            return {...state, emailError: action.payload.message}
        case 'RECIEVE_RESET_PASSWORD':
            window.location.href = '/login'
            return {...state}
        case 'RECIEVE_RESET_PASSWORD_ERROR':
            return {...state, setPasswordError: action.payload.message}
        default:
        return state;
    }
};

export default reducer;