import Axios from "axios"

// import store from redux
import store from "../store/index.store"
import { CLEARTOKEN } from "../store/actions"

/*Gaurda el nombre de la propiedad de localstorage guardado*/
const tokenSaveName = "token"

/**Direccion de servidor backemd */
export const serverURI = "https://alypay.uc.r.appspot.com"

/**Instancia axios para ejecutar endpoints backend */
export const http = Axios.create({
	baseURL: serverURI,	
	validateStatus: (status = 200) => {
		
		// validamos el estado de la peticion
		if (status === 401) {
			// ejecutar la funcion logut

			// 
			return true
		} else {
			// validamos otros status
			return (status >= 200 && status < 300)
		}
	}
})

/**Funcion que ejecuta el logut general de la app */
export const logOutAp = function() {
	// eliminamos el token del localstorage (pasando null para eliminar el token)
	setTokenStore(null)

	// eliminamos el token desde el store de redux
	store.dispatch({ type: CLEARTOKEN })
}

/*Metodo que obtiene el token*/
export const getTokenFromStore = () => new Promise(async (resolve) => {
	const s = await localStorage.getItem(tokenSaveName)

	// veremos si existe
	if (!s) resolve(null)
	else resolve(s)
})

/*Metodo que setea el token */
export const setTokenStore = _tokenAuth => new Promise((resolve) => {
	// verificamos si el usuario no quiere limpiar
	if (_tokenAuth === null)  localStorage.removeItem(tokenSaveName)
	else localStorage.setItem(tokenSaveName, _tokenAuth)

	resolve()
})