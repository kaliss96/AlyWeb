import http from './http'
const axios = http.getHtpp()
const sesion = http.getSesion()

export default {
    auth: {
        signin: credentials =>
            sesion.post('/login',  credentials ).then(res => res.data),
        signup: data =>
            axios.post('/register', { data }).then(res => res.data),
       
    },
}