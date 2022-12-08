import axios from 'axios'
import { useDispatch } from 'react-redux'



const login = (userName, password) => {
    return axios.post("http://localhost:5000/api/auth/login", { userName: userName, password: password })

}

const saveToken = (token) => {
    sessionStorage["token"] = token;
}

const saveUser = (user) => {
    sessionStorage["user"] = user;

}

const getToken = () => {
    return sessionStorage["token"]
}

const getUser = () => {
    return sessionStorage["user"]
}


export default { login, saveToken, saveUser, getToken ,getUser}