const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'REQUEST_LOGIN': 
        return {...state, loading: true};
        case 'RECIEVE_LOGIN':
        return {...state, user: action.payload, loading: false}
        default:
        return state;
    }
};

export default reducer;