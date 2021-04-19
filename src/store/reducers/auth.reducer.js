import { SETAUTH, CLEARTOKEN } from "../actions"

// import methods
import { setTokenStore } from "../../utils/index"

// intial state
const INITIAL_STATE = {
    auth: false,
    token: null
}

export const Auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SETAUTH: {
            const token = action.payload

            // set token to localStorage
            setTokenStore(token)

            return {
                auth: true,
                token,
            }
        }
        case CLEARTOKEN: {
            // clear token from localstorage
            setTokenStore(null)

            // return inital state (empty)
            return INITIAL_STATE
        }

        default: {
            return state
        }
    }
}