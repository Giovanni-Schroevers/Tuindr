import { IUser, IUserReset } from '../../interfaces/index'

export async function login(user: IUser) {
    return await fetch('http://localhost:8080/api/login',{ 
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    })
    .then(function(response) {
        return response.json();
    }).then(function(data){
        return JSON.stringify(data);
    })
}

export async function sendResetMail(user: IUser) {
    return await fetch('http://localhost:8080/api/reset-password', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            username: user.username
        })
    })
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        return JSON.stringify(data);
    })
}

export async function resetPassword(user: IUserReset) {
    return await fetch(`http://localhost:8080/api/reset-password/${user.token}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            password: user.password
        })
    })
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        return JSON.stringify(data);
    })
}
