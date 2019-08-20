import axios from 'axios';
import { IToken } from '../interfaces';

export default function setAuthToken(token: IToken){
    if(token){
       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else {
       delete axios.defaults.headers.common['Authorization'];
    }
}