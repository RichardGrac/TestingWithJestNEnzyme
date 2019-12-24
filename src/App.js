import React from 'react';
import './App.css';
import guessedWordsReducer from './redux/GuessedWords/reducers'
import {SET_SECRET_WORD} from './redux/constants'
import hookActions from './context/actions'
import Input from './Components/Input/input'

export const App = (props) =>{
    const [state, dispatch] = React.useReducer(guessedWordsReducer, {guessedWords: [], secretWord: ''})

    const setSecretWord = secretWord => {
        dispatch({ type: SET_SECRET_WORD, payload: secretWord })
    }

    const handleGetSecretWord = async () => {
        await hookActions.getSecretWord(setSecretWord)
    }

    React.useEffect(() => {
        handleGetSecretWord()
    }, [])

    return state.secretWord === '' ? (
        <div data-test={'loading'} className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
        </div>

    ) : (
        <div className='App container' data-test={'app-component'}>
            <Input secretWord={state.secretWord} />
        </div>
    )
}

export default App
