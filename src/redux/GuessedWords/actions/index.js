import {SET_SECRET_WORD} from '../../constants'
import axios from 'axios'

export const getSecretWord = () => {
    return async dispatch => {
        try {
            const r = await fetch(`http://www.mocky.io/v2/5dfd42933100008600c96d6f`)
            const data = await r.json()
            dispatch({
                type: SET_SECRET_WORD,
                payload: data.words[Math.floor(Math.random() * 5)]
            })

        } catch (e) {
            console.error(e)
        }
    }
}

export const getSecretWordAxios = () => {
    return async dispatch => {
        try {
            return axios.get(`http://www.mocky.io/v2/5dfd42933100008600c96d6f`)
                .then(response => {
                    dispatch({
                        type: SET_SECRET_WORD,
                        payload: response.words[Math.floor(Math.random() * 5)]
                    })
                })
                .catch(error => {
                    console.error(error)
                })
        } catch (e) {
            console.log(e)
        }
    }
}
