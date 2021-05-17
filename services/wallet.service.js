import Http from '../utils/http.utils'
import { ErrorAlert } from '../utils/alerts.util'
​
export default async function listWallets(iduser) {
    const [petition] = Http()

    try {
        const { data } = await petition.post('/wallets', getHeaders())
​
        if (data.error) {
            throw String(data.message)
        }
​
        return data
    } catch (error) {
        console.error(error)
        ErrorAlert(error.toString())
    }
}









