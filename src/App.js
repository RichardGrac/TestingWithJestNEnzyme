import React from 'react';
import './App.css';
import guessedWordsReducer from './redux/GuessedWords/reducers'
import {SET_SECRET_WORD} from './redux/constants'
import hookActions from './context/actions'

export const App = (props) =>{
    const [state, dispatch] = React.useReducer(guessedWordsReducer, {guessedWords: [], secretWord: ''})

    const setSecretWord = secretWord => {
        dispatch({ type: SET_SECRET_WORD, payload: secretWord })
    }

    React.useEffect(() => {
        handleGetSecretWord()
    }, [])

    const handleGetSecretWord = async () => {
        await hookActions.getSecretWord(setSecretWord)
    }

    return (
        <div className="App container" data-test={'app-component'}>

        </div>
    )
}

export default App
