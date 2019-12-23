import {getSecretWordAxios} from '../../GuessedWords/actions'
import {RESET_GUESSED_WORDS, RESET_SUCCESS} from '../../constants'

export const resetGame = () => {
    return async dispatch => {
        dispatch(getSecretWordAxios())
        dispatch({type: RESET_SUCCESS})
        dispatch({type: RESET_GUESSED_WORDS})
    }
}
