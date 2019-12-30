import {getLetterMatchCount} from './index'

/**
 * @function guessWord
 * @returns {object} - An object with success and letterMatchCount
 */
export let guessWord = (guessedWord, secretWord) => {
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
        let success = false

        if (secretWord === guessedWord) success = true

        return {
            success,
            letterMatchCount
        }
}
