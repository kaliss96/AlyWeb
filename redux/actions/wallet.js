import {
    GET_WALLETS, 
    GET_STATE_COMP, 
    DETAILS_WALLETS,
    HISTORY_BYID,
	GET_SEARCH_TEXT,
	VERIFY_WALLET
} from './types'
import { wallets } from '../../api/api'

export const redux_get_wallets = () => (dispatch) =>{

    wallets.getWallets().then( response =>{
        
        console.log(response)

        const wallets = response.map((wallet) =>({
            img: wallet._id !== null ? `https://s2.coinmarketcap.com/static/img/coins/128x128/${wallet._id}.png` : null,
            id: wallet.id,
            wallet_type: wallet.wallet_type,
            symbol: wallet.symbol,
            description: wallet.description,
            price: wallet.price,
            _id: wallet._id,
            wallet: wallet.wallet,
            amount: wallet.amount,
            name: wallet.name
        }))

        dispatch({
            type: GET_WALLETS,
            payload: wallets
        })
    })

}

export const redux_details_wallets = (id) => dispatch =>{
    
    if(id){
        wallets.details(id).then(response => {
            dispatch({
                type: DETAILS_WALLETS,
                payload: {
                    history: response.history,
                    idwallet: id
                }
            })
        })
    }
}

 
export const redux_verify_wallets = (id) => (dispatch) =>{

    wallets.verifyWallet(id).then( response =>{
        
  dispatch({
            type: VERIFY_WALLET,
            wallet_verifi: response
        })
    })

}

export const loadStateComp = state => (dispatch) => {
    dispatch({ 
        type: GET_STATE_COMP,
        payload: state
    });
}

export const loadSearchText = (texto) => (dispatch) => {
    dispatch({ type: GET_SEARCH_TEXT,searchtext:texto});
}
