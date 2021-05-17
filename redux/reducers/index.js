import { combineReducers } from "redux";
import auth from './auth';
import notification from './notification'
import showImages from './images'
import wallets from './wallet'

export default combineReducers({
   auth,
   notification,
   wallets,
   showImages
});