import { LOAD_USER, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { decodeToken, encodeToken } from '../../api/crypto'

import api from '../../api/api'
export const RDX_LOADUSER = () => (dispatch) => {
    let secureToken = localStorage.getItem('_tkn')
    let token = decodeToken(secureToken)
    if(token){
        dispatch({ type: LOAD_USER});
    }else{
        dispatch({ type: AUTH_ERROR });
    }
}

export const RDX_LOGIN = credentials => (dispatch) => {
    api.auth.signin(credentials).then(response=> {
        
        if(response?.error && response.error){
            dispatch({
                type: LOGIN_FAIL,
                payload: response.message
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
                fee: response.fee
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

