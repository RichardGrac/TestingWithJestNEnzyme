import React from 'react';
import {connect} from 'react-redux'

export const TotalGuesses = props => {
    return (
        <div data-test={'total-guesses-component'}>
            Total Number of Guesses:{' '}
            <b data-test={'guess-count'}>
                {props.guessedWords.length}
            </b>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        guessedWords: state.guessedWordsReducer.guessedWords,
    }
}
export default connect(mapStateToProps)(TotalGuesses)
