
/* eslint-disable import/no-anonymous-default-export */
import { LOAD_USER, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {}
    
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
        
        case LOGOUT: 
            return {
                ...state,
                user: {},
                isAuthenticated: false
            }
        
        default: 
            return state;
    }
}