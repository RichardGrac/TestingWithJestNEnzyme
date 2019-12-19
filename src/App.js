import React, {Component} from 'react';
import './App.css';
import Congrats from "./Components/Congrats/Congrats";
import GuessedWords from "./Components/GuessedWords/GuessedWords";
import {connect} from "react-redux";
import Input from "./Components/Input/input";

class App extends Component {

  render() {

    return (
        <div className="App container">
          <h1 className={'text-center'}>The App</h1>
          <Congrats success={this.props.success} />
          <Input />
          <GuessedWords guessedWords={[
            {guessedWord: 'train', letterMatchCount: 3},
          ]}/>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        success: state.successReducer.success
    }
}
export default connect(mapStateToProps)(App);
