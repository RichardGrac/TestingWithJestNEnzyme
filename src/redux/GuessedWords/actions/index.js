import {SET_SECRET_WORD} from '../../constants'
import axios from 'axios'
import {SECRET_WORD_API} from '../../../shared'

export const getSecretWordAxios = () => {
    return async dispatch => {
        try {
            return axios.get(SECRET_WORD_API)
                .then(response => {
                    dispatch({
                        type: SET_SECRET_WORD,
                        payload: response.data.randomWord
                    })
                })
                .catch(error => {
                    console.error(error)
                })
        } catch (e) {
            console.error(e)
        }
    }
}
