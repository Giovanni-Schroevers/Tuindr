import { ILoginRecieve, ILoginRequest, ILoginRecieveError } from '../../interfaces'

const reducer = (state = {}, action: ILoginRecieve | ILoginRequest | ILoginRecieveError) => {
    switch(action.type) {
        case 'REQUEST_LOGIN': 
            return {...state, loading: true};
        case 'RECIEVE_LOGIN':
            return {...state, loading: false, token: JSON.parse(action.payload).token}
        case 'RECIEVE_LOGIN_ERROR':
        let error
        switch (JSON.parse(action.payload).status) {
            case 500: error = 'Internal Server Error'; break;
            case 401: error = 'Invalid credentials'; break;
            case 400: error = 'Bad Request'; break;
            default: error = 'Something went wrong';
          }
            return {...state, loading: false, loginError: error}
        default:
        return state;
    }
};

export default reducer;