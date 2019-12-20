import {ADD_GUESSED_WORD, CORRECT_GUESS} from "../../constants";
import {getLetterMatchCount} from '../../../helpers'

/**
 * @function setSuccess
 * @returns {object} - An action object with type `CORRECT_GUESS`
 */
export const guessWord = (guessedWord) => {
    return (dispatch, getState) => {
        const letterMatchCount = getLetterMatchCount(guessedWord, getState().guessedWordsReducer.secretWord)
        if (letterMatchCount === guessedWord.length) {
            dispatch({type: CORRECT_GUESS, success: true})
        }

        dispatch({type: ADD_GUESSED_WORD, payload: {guessedWord, letterMatchCount}})
    }
}
