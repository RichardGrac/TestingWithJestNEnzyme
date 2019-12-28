import React, {Component} from 'react';
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

export class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            language: 'en',
            secretWord: ''
        }
    }

    componentDidMount() {
        this.getSecretWord()
    }

    async getSecretWord() {
        axios.get(SECRET_WORD_API)
            .then(response => {
                this.setState({secretWord: response.data.randomWord})
            })
            .catch(error => {
                console.error(error)
                this.setState({secretWord: 'Word Not retrieved'})
            })
    }

    changeLanguage = lang => {
        this.setState({language: lang})
    }

    resetGame = () => {
        this.getSecretWord()
    }

    render() {
        const {language, secretWord} = this.state
        return (
            <languageContext.Provider value={language}>
                <div className="App container">
                    <h1 className={'text-center'}>The App</h1>
                    <LanguagePicker setLanguage={this.changeLanguage} />
                    <small>{getStringByLanguage(language, 'helpSecretWord')}: {secretWord}</small>
                    <GuessedWordsProvider>
                        <SuccessProvider>
                            <Congrats resetGame={this.resetGame} />
                            <Input secretWord={secretWord} />
                        </SuccessProvider>
                        <GuessedWords />
                        <TotalGuesses />
                    </GuessedWordsProvider>
                </div>
            </languageContext.Provider>
        )
    }
}

export default App
