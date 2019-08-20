import { ILoginRecieve, ILoginRequest, ILoginRecieveError, IUser, IResetPassword } from '../../../interfaces'

const reducer = (state = {}, action: ILoginRecieve | ILoginRequest | ILoginRecieveError | IResetPassword | IUser) => {
    switch(action.type) {
        case 'REQUEST_LOGIN': 
            return {...state, loading: true};
        case 'RECIEVE_LOGIN':
            window.location.href = '/';
            return {...state, loading: false, isAuthenticated: true ,username: action.payload.sub, }
        case 'RECIEVE_LOGIN_ERROR':
        let error
        switch (action.payload.status) {
            case 500: error = 'Internal Server Error'; break;
            case 401: error = 'Invalid credentials'; break;
            case 400: error = 'Bad Request'; break;
            default: error = 'Something went wrong';
          }
            return {...state, loading: false, loginError: error}
            case 'SEND_NEW_PASSWORD': 
            return {...state }
        default:
        return state;
    }
};

export default reducer;