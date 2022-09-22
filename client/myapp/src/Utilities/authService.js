import axios from 'axios'

const login = (userName, password) => {
    return axios.post("http://localhost:5000/api/auth/login", { userName: userName, password: password })

}

const saveToken = (token) => {
    sessionStorage["token"] = token;
}

const saveUser = (user) => {
    sessionStorage["user"] = JSON.stringify(user);

}

const getToken = () => {
    return sessionStorage["token"]
}


export default { login, saveToken, saveUser, getToken }