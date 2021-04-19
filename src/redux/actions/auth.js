import { LOAD_USER, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const fxLoadUser = () => (dispatch, getState) => {
    const token = getState().auth.token;
    if(token){
        dispatch({ type: LOAD_USER});
    }else{
        dispatch({ type: AUTH_ERROR });
    }
}

export const fxLogin = credentials => (dispatch) => {
    
}

