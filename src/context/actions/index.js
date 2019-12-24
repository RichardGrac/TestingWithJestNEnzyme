import axios from 'axios'
import {SECRET_WORD_API} from '../../shared'

const getSecretWord = async (setSecretWord) => {
    const r = await axios.get(SECRET_WORD_API)
    setSecretWord(r.data.randomWord)
    // try {
    //     axios.get(SECRET_WORD_API)
    //         .then(response => {
    //             setSecretWord(response.data.randomWord)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //             setSecretWord('')
    //         })
    // } catch (e) {
    //     console.error(e)
    //     setSecretWord('')
    // }
}

export default getSecretWord
