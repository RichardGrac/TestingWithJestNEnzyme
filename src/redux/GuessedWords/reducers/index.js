import {ADD_GUESSED_WORD, RESET_GUESSED_WORDS, SET_SECRET_WORD} from '../../constants'

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
        case SET_SECRET_WORD:
            return {
                ...state,
                secretWord: action.payload
            }

        case ADD_GUESSED_WORD:
            return {
                ...state,
                guessedWords: [...state.guessedWords, action.payload ]
            }

        case RESET_GUESSED_WORDS:
            return {
                ...state,
                guessedWords: []
            }

        default:
            return state
    }
}

export default guessedWordsReducer
