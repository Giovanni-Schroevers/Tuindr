export async function login(user) {
    return await fetch('192.168.179.14',{ 
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            username: user.username,
            password: user.password
        }
    })
    .then(function(response) {
        return response.json();
    }).then(function(data){
        return JSON.stringify(data);
    })
}