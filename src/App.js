import React, {Component} from 'react';
import './App.css';
import Congrats from "./Components/Congrats/Congrats";
import GuessedWords from "./Components/GuessedWords/GuessedWords";
import {connect} from "react-redux";
import Input from "./Components/Input/input";
import {bindActionCreators} from 'redux'
import {getSecretWordAxios} from './redux/GuessedWords/actions'
import TotalGuesses from './Components/TotalGuesses'
import {resetGame} from './redux/NewGame/actions'
import LanguagePicker from './Components/LanguagePicker'
import languageContext from './context/LanguageContext'

export class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            language: 'en'
        }
    }

    componentDidMount() {
        this.props.getSecretWordAxios()
    }

    changeLanguage = lang => {
        this.setState({language: lang})
    }

    render() {
        const {success, guessedWords, resetGame} = this.props

        return (
            <languageContext.Provider value={this.state.language}>
                <div className="App container">
                    <h1 className={'text-center'}>The App</h1>
                    <LanguagePicker setLanguage={this.changeLanguage} />
                    <small>The secret word is: {this.props.secretWord}</small>
                    <Congrats success={success} resetGame={resetGame} />
                    <Input/>
                    <GuessedWords guessedWords={guessedWords}/>
                    <TotalGuesses />
                </div>
            </languageContext.Provider>
        )
    }
}

const mapStateToProps = state => {
    return {
        success: state.successReducer.success,
        guessedWords: state.guessedWordsReducer.guessedWords,
        secretWord: state.guessedWordsReducer.secretWord,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getSecretWordAxios,
        resetGame,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
