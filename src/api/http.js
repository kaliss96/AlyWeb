import axios from 'axios'
import { BASE_URL_SERVER } from './url.config'
import { getAuth, removeAuth } from './verifyToken'

export default {
	getHtpp: (autoRedirect = true) => {
		const _axios = axios.create({
			baseURL: BASE_URL_SERVER,
			headers: { ...getAuth() },
			validateStatus: status => {
				if (status === 401) {
					removeAuth()
					return true
				}
	
				if (status === 404 && autoRedirect) {
					window.location.href = '/404'
				}
				return status >= 200 && status < 300
			}
		})

		return _axios
	},
	getSesion: () => {
		const _axios = axios.create({
			baseURL: BASE_URL_SERVER
		})

		return _axios
	}
}
