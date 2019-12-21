import {SET_SECRET_WORD} from '../../constants'
import axios from 'axios'

export const getSecretWord = () => {
    return async dispatch => {
        try {
            const r = await fetch(`http://www.mocky.io/v2/5dfea4fb32000035005aef14`)
            const data = await r.json()
            dispatch({
                type: SET_SECRET_WORD,
                payload: data.randomWord
            })

        } catch (e) {
            console.error(e)
        }
    }
}

export const getSecretWordAxios = () => {
    return async dispatch => {
        try {
            return axios.get(`http://www.mocky.io/v2/5dfea4fb32000035005aef14`)
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
