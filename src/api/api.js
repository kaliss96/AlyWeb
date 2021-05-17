import http from './http'
import {getAuth} from './verifyToken'

export const auth = {
    signin: credentials =>
        http.post('/login',  credentials ).then(res => res.data),
    signup: data =>
        http.post('/register', data ).then(res => res.data),
}

export const wallets = {
    getWallets: () => 
        http.get('/wallets', {headers: { ...getAuth()} }).then(res => res.data),
    
    details: id => 
        http.get(`/wallets/details/${id}`, { headers: { ...getAuth()} }).then(res => res.data),
		
	verifyWallet: id => 
        http.get(`/wallets/verify/${id}`, { headers: { ...getAuth()} }).then(res => res.data)
}