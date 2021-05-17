/* eslint-disable import/no-anonymous-default-export */
import { GET_WALLETS, GET_STATE_COMP, DETAILS_WALLETS,GET_SEARCH_TEXT,VERIFY_WALLET} from "../actions/types";

const initialState = {
    wallets: [],
    history: [],
    currentWallet: null,
	statecomp:false,
	searchtext:"",
	wallet_verify:{}
};

export default function (state = initialState, action){
    switch(action.type){
        case GET_WALLETS:
            return {
                ...state,
                wallets: action.payload,
                currentWallet: 51
            } 
		case GET_STATE_COMP:
			return {
                ...state,
                statecomp: action.payload
            }
		case DETAILS_WALLETS:
            return {
                ...state,
                history: action.payload.history,
                currentWallet: action.payload.idwallet
            }	
		case GET_SEARCH_TEXT:
			console.log("imprimimos GET_SEARCH_TEXT  ",{
                ...state,
                searchtext:action.searchtext
            });
        return {
                ...state,
                searchtext:action.searchtext
            }
			
		case VERIFY_WALLET:
			console.log("VERIFY_WALLET ",{
                ...state,
                wallet_verify:action.wallet_verifi
            });
        return {
                ...state,
                wallet_verify:action.wallet_verifi
            }	
            
        default: 
            return state;
    }
}