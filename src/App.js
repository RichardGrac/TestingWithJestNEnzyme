import React, {Component} from 'react';
import './App.css';
import Congrats from "./Components/Congrats/Congrats";
import GuessedWords from "./Components/GuessedWords/GuessedWords";
import {connect} from "react-redux";
import Input from "./Components/Input/input";
import {bindActionCreators} from 'redux'
import {getSecretWordAxios} from './redux/GuessedWords/actions'

export class App extends Component {

    componentDidMount() {
        this.props.getSecretWordAxios()
    }

    render() {
        const {success, guessedWords} = this.props

        return (
            <div className="App container">
                <h1 className={'text-center'}>The App</h1>
                <Congrats success={success}/>
                <Input/>
                <GuessedWords guessedWords={guessedWords}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        success: state.successReducer.success,
        guessedWords: state.guessedWordsReducer.guessedWords,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getSecretWordAxios
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
