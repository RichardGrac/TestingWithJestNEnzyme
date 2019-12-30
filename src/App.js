import React from 'react';
import './App.css';
import Congrats from "./Components/Congrats/Congrats";
import GuessedWords from "./Components/GuessedWords/GuessedWords";
import Input from "./Components/Input/input";
import TotalGuesses from './Components/TotalGuesses'
import LanguagePicker from './Components/LanguagePicker'
import languageContext from './context/LanguageContext'
import {SuccessProvider} from './context/SuccessContext'
import {GuessedWordsProvider} from './context/GuessedWordsContext'
import axios from 'axios'
import {SECRET_WORD_API} from './shared'
import getStringByLanguage from './helpers/languages'

export const App = () => {

    const [language, setLanguage] = React.useState('en')
    const [secretWord, setSecretWord] = React.useState('')

    React.useEffect(() => {
        getSecretWord()
    }, [])

    const getSecretWord = async () => {
        axios.get(SECRET_WORD_API)
            .then(response => {
                setSecretWord(response.data.randomWord)
            })
            .catch(error => {
                console.error(error)
                setSecretWord('Word Not retrieved')
            })
    }

    const changeLanguage = lang => {
        setLanguage(lang)
    }

    const resetGame = () => {
        getSecretWord()
    }

    return (
        <languageContext.Provider value={language}>
            <div className="App container" data-test={'app-component'}>
                <h1 className={'text-center'}>The App</h1>
                <LanguagePicker setLanguage={changeLanguage} />
                <small>{getStringByLanguage(language, 'helpSecretWord')}: {secretWord}</small>
                <GuessedWordsProvider>
                    <SuccessProvider>
                        <Congrats resetGame={resetGame} />
                        <Input secretWord={secretWord} />
                    </SuccessProvider>
                    <GuessedWords />
                    <TotalGuesses />
                </GuessedWordsProvider>
            </div>
        </languageContext.Provider>
    )
}

export default App
