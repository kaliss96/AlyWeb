import { createStore, combineReducers } from "redux"

// import reducers
import { Auth } from "./reducers/auth.reducer"

// combine reducers
const reducers = combineReducers({ Auth })

// create main store
const store = createStore(reducers)

export default store