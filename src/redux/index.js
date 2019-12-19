import {combineReducers} from 'redux'
import guessedWordsReducer from './GuessedWords/reducers/index'
import successReducer from "./Success/reducers";

const rootReducer = combineReducers({
    guessedWordsReducer,
    successReducer,
})

export default rootReducer