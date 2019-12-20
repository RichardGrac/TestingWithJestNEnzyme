import {ADD_GUESSED_WORD} from '../../constants'

const initialState = {
    guessedWords: [],
    secretWord: ''
}

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @return {object} - new state with GuessedWords array
 */
const guessedWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GUESSED_WORD:
            return {
                ...state,
                guessedWords: [...state.guessedWords, action.payload ]
            }
        default:
            return state
    }
}

export default guessedWordsReducer
