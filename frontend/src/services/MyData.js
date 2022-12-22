import axios from 'axios'
const apiURL = 'http://localhost:800/api/v1/';

const postLogin=(data)=>{
    return axios.post(`${apiURL}auth`,data)
}

const postRegister=(data)=>{
    return axios.post(`${apiURL}users`,data)
}

export {postLogin,postRegister}