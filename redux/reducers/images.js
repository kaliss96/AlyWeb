/* eslint-disable import/no-anonymous-default-export */
import { SHOWLOGO, HIDELOGO } from "../actions/types";

const initialState = {
    show: false
};

export default function (state = initialState, action){
    switch(action.type){
        case SHOWLOGO:
            return {
                ...state,
                show: action.payload
            }

        case HIDELOGO:
            return {
                ...state,
                show: action.payload
            }
        
        default: 
            return state;
    }
}