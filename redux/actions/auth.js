import { LOAD_USER, AUTH_ERROR, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, NOTIFICATION } from "./types";
import { encodeToken } from '../../api/crypto'
import {getAuthToken} from '../../api/verifyToken'

import { auth } from '../../api/api'

export const loadUser = () => (dispatch) => {
    
    let token = getAuthToken()

    if(token){
        dispatch({ type: LOAD_USER});
    }else{
        dispatch({ type: AUTH_ERROR });
    }
}

export const redux_login = credentials => (dispatch) => {
    auth.signin(credentials).then(response=> {
        
        if(response?.error && response.error){
			console.log("test login ",{
                type: NOTIFICATION,
                payload: {
                    msg: response.message,
                    type: 'warning',
                    time: 2500
                }
            })
			
			
            dispatch({
                type: NOTIFICATION,
                payload: {
                    msg: response.message,
                    type: 'warning',
                    time: 2500
                },
				isLoading:false
            })
        }else {
            
            localStorage.setItem("_tkn", encodeToken(response.token))
            const user={
                id: response.id,
                username: response.username,
                email: response.email,
                first_name: response.first_name,
                last_name: response.last_name,
                birthday: response.birthday,
                executive: response.executive,
                fee: response.fee,
            }

            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            })
        }

    }).catch(error=>{
        console.log(error)
    })
}

export const redux_regiter = data => (dispatch) => {
    auth.signup(data).then(response => {
        console.log(response)
        if(!response.error){
            dispatch({
                type: REGISTER_SUCCESS,
            })
        }else {
            dispatch({
                type: REGISTER_FAIL
            })
        }
        
    })
}

export const loadSpin =(flag)=> (dispatch) => {

 
        dispatch({
                type: NOTIFICATION,
                payload: {msg:null},
				isLoading:flag
            })
   
}
