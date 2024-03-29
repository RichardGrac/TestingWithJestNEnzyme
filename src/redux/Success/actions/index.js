import {ADD_GUESSED_WORD, CORRECT_GUESS} from "../../constants";
import {getLetterMatchCount} from '../../../helpers'

/**
 * @function setSuccess
 * @returns {object} - An action object with type `CORRECT_GUESS`
 */
export const guessWord = (guessedWord) => {
    return (dispatch, getState) => {
        const secretWord = getState().guessedWordsReducer.secretWord
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
        if (secretWord === guessedWord) {
            dispatch({type: CORRECT_GUESS, success: true})
        }
        
        dispatch({type: ADD_GUESSED_WORD, payload: {guessedWord, letterMatchCount}})
    }
}
