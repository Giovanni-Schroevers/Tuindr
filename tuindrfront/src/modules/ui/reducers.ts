import { ILoginRecieve, ILoginRequest, ILoginRecieveError } from '../../interfaces'

const reducer = (state = {}, action: ILoginRecieve | ILoginRequest | ILoginRecieveError) => {
    switch(action.type) {
        case 'REQUEST_LOGIN': 
            return {...state, loading: true};
        case 'RECIEVE_LOGIN':
            return {...state, loading: false, token: action.payload}
        case 'RECIEVE_LOGIN_ERROR':
            return {...state, loading: false, loginError: true}
        default:
        return state;
    }
};

export default reducer;