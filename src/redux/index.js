import {combineReducers} from 'redux'
import guessedWordsReducer from './GuessedWords/reducers/index'

const rootReducer = combineReducers({
    guessedWordsReducer
})

export default rootReducer