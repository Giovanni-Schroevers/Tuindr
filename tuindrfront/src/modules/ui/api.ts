import { IUser } from '../../interfaces/index'

export async function login(user: IUser) {
    return await fetch('http://192.168.179.14:8080/api/login',{ 
        method: 'POST',
        headers: {
            'content-type': 'application/json'
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