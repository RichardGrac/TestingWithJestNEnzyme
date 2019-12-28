import React from 'react';
import languageContext from '../../context/LanguageContext'
import getStringByLanguage from '../../helpers/languages'
import {useGuessedWords} from '../../context/GuessedWordsContext'

export const TotalGuesses = () => {
    const language = React.useContext(languageContext)
    const [guessedWords] = useGuessedWords()

    return (
        <div data-test={'total-guesses-component'}>
            {getStringByLanguage(language, 'totalGuesses')}:{' '}
            <b data-test={'guess-count'}>
                {guessedWords.length}
            </b>
        </div>
    )
}

export default TotalGuesses
