import React from 'react'
import languageContext from '../../context/LanguageContext'
import getStringByLanguage from '../../helpers/languages'
import {useGuessedWords} from '../../context/GuessedWordsContext'

const GuessedWords = () => {
    const [guessedWords] = useGuessedWords()
    const language = React.useContext(languageContext)

    return (
        <div data-test={'guessedWords-component'}>
            {guessedWords.length < 1 ? (
                <div data-test={'instructions'}>
                    {getStringByLanguage(language, 'guessPrompt')}
                </div>
            ) : (
                <div data-test={'attempts'}>
                    <h3 data-test={'guess-column-header'}>
                        {getStringByLanguage(language, 'guessColumnHeader')}
                    </h3>
                    <table className={'table table-sm'}>
                        <thead className={'thead-light'}>
                            <tr>
                                <th>#</th>
                                <th>Word</th>
                                <th>Matching Letters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guessedWords.map((word, i) => (
                                <tr data-test={'guessed-nodes'} key={i}>
                                    <td>{i + 1}</td>
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

export default GuessedWords
