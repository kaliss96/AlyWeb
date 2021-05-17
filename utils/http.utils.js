import axios from 'axios'
import { BASE_URL_SERVER } from '../utils/constants.util'
import { getAuth, removeAuth } from 'services'
​
/**
 * Hook for make REST petitions
 * @param {String} pathUrl
 * @param {Option} options
 * @returns {Array} [Axios, CancelPetition]
 */
export default function Http(autoRedirect = true) {
	const _axios = axios.create({
		// api base url
		baseURL: BASE_URL_SERVER,
		headers: {
			...getAuth(),
		},
		validateStatus: status => {
			if (status === 401) {
				removeAuth()
				return true
			}
​
			if (status === 404 && autoRedirect) {
				window.location.href = '/404'
			}
​
			return status >= 200 && status < 300
		},
	})
​
	return [_axios]
}