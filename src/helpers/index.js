/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param secretWord {string} secretWord - Secret word
 * @returns {number} - Number of letters matched between guessed word and secretWord
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetterSet = new Set(guessedWord.split(''))
    const guessedLetterSet = new Set(secretWord.split(''))

    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}