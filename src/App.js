import React, {Component} from 'react';
import './App.css';
import Congrats from "./Components/Congrats/Congrats";
import GuessedWords from "./Components/GuessedWords/GuessedWords";
import {connect} from "react-redux";
import Input from "./Components/Input/input";
import {bindActionCreators} from 'redux'
import {getSecretWordAxios} from './redux/GuessedWords/actions'
import TotalGuesses from './Components/TotalGuesses'

export class App extends Component {

    componentDidMount() {
        this.props.getSecretWordAxios()
    }

    render() {
        const {success, guessedWords} = this.props

        return (
            <div className="App container">
                <h1 className={'text-center'}>The App</h1>
                <small>The secret word is: {this.props.secretWord}</small>
                <Congrats success={success}/>
                <Input/>
                <GuessedWords guessedWords={guessedWords}/>
                <TotalGuesses />
            </div>
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
        getSecretWordAxios
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
