import axios from 'axios'
import {SECRET_WORD_API} from '../../../shared'

export function getSecretWordAxios(){
    try {
        axios.get(SECRET_WORD_API)
            .then(response => {
                return response.data.randomWord
            })
            .catch(error => {
                console.error(error)
            })
    } catch (e) {
        console.error(e)
    }
    return 'asd'
}
