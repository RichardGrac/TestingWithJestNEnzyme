import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
    const {guessedWords} = props

    return (
        <div data-test={'guessedWords-component'}>
            {guessedWords.length < 1 ? (
                <div data-test={'instructions'}>
                    Try to guess the secret word
                </div>
            ) : (
                <div data-test={'attempts'}>
                    <h3>Guessed words</h3>
                    <table className={'table table-sm'}>
                        <thead className={'thead-light'}>
                            <tr>
                                <th>Word</th>
                                <th>Matching Letters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guessedWords.map((word, i) => (
                                <tr data-test={'guessed-nodes'} key={i}>
                                    <td>{word.guessedWord}</td>
                                    <td>{word.letterMatchCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default GuessedWords
