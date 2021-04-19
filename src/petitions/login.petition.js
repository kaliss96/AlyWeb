import { http } from "../utils/index"
import store from "../store/index.store"

/**Metodo que pide el token desde redux */
const getToken = () => store.getState().Auth.token

// Peticion que ejecuta el incio de sesion
export const Login = (...params) => new Promise((resolve, reject) => {
    try {
        const { data } = http.post("/login", ...params)

        // validamos si hay algun error en la peticion
        if (data.error) {
            throw data
        }

        // retornamos la peticion
        resolve(data)
    } catch (error) {
        reject(error)
    }
})
