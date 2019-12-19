import React, {Component} from 'react';
import './App.css';
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

class App extends Component {

  render() {
    return (
        <div className="App container">
          <h1 className={'text-center'}>The App</h1>
          <Congrats success />
          <GuessedWords guessedWords={[
            {guessedWord: 'train', letterMatchCount: 3},
          ]}/>
        </div>
    )
  }
}

export default App;
