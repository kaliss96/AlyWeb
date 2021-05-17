/* eslint-disable import/no-anonymous-default-export */
import { LOAD_USER, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, AUTH_ERROR,NOTIFICATION } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: {},
	msg: null
    
};

export default function (state = initialState, action){
    switch(action.type){
        case LOAD_USER:
            return{
                ...state,
                isAuthenticated: true,
                userLoading: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.payload,
                isAuthenticated: true,
                userLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
            return {
                ...state,
                user: {},
                isAuthenticated: false

            }
        case LOGOUT: 
            return {
                ...state,
                user: {},
                isAuthenticated: false
            }
			
			case NOTIFICATION: 
            return {
                ...state,
                 isAuthenticated: false,
				 msg:action.payload.msg,
				 isLoading:action.isLoading
            }
        
        default: 
            return state;
    }
}