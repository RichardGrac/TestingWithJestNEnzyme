import {getLetterMatchCount} from '../../../helpers'
import React from 'react'

/**
 * @function guessWord
 * @returns {object} - An object with success and letterMatchCount
 */
export const guessWord = (guessedWord, secretWord) => {
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
        let success = false

        if (secretWord === guessedWord) success = true

        return {
            success,
            letterMatchCount
        }
}
