import axios from 'axios'
import {SECRET_WORD_API} from '../../shared'

export const getSecretWord = async (setSecretWord) => {
    const r = await axios.get(SECRET_WORD_API)
    setSecretWord(r.data.randomWord)
}

export default {
    getSecretWord,
}
