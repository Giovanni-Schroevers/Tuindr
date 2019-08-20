import jwt from 'jsonwebtoken'

export default function handleToken() {
    const storeToken = localStorage.getItem('jwtToken')
    if(storeToken == null){
        window.location.href = 'http://localhost:3000/login';
        return
    }
    let time = new Date();
    const DecodeUnix: any = jwt.decode(storeToken)
    const unix = DecodeUnix.exp
    var dt = new Date(unix*1000);
    if(dt < time) {
      localStorage.removeItem('jwtToken')
      handleToken()
    }
}