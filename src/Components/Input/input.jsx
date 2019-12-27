import React, {useState} from "react";
import {guessWord} from '../../redux/Success/actions'
import languageContext from '../../context/LanguageContext'
import getStringByLanguage from '../../helpers/languages'
import {useSuccess} from '../../context/SuccessContext'
import {useGuessedWords} from '../../context/GuessedWordsContext'

export const Input = props => {
    const [inputValue, setInputValue] = useState('')
    const [success, setSuccess] = useSuccess()
    const [guessedWords, setGuessedWords] = useGuessedWords()
    const language = React.useContext(languageContext)

    const handleWordMatchVerification = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            const r = guessWord(inputValue, props.secretWord)
            if (r.success !== success) setSuccess(r.success)
            setGuessedWords(guessedWords.concat({
                guessedWord: inputValue,
                letterMatchCount: r.letterMatchCount
            }))
            setInputValue('')
        }
    }

    return (
        <div data-test={'component-input'}>
            {!success && (
                <form data-test={'input-form'} className={'input-group mb-3'}>
                    <input type="text"
                           value={inputValue}
                           placeholder={getStringByLanguage(language, 'guessInputPlaceholder')}
                           onChange={(e) => setInputValue(e.target.value)}
                           data-test={'guess-input'}
                           className={'form-control'}
                    />
                    <div className='input-group-append'>
                        <button type={'button'}
                                data-test={'verification-button'}
                                onClick={(e) => handleWordMatchVerification(e)}
                                className={'btn btn-outline-secondary'}
                        >
                            {getStringByLanguage(language, 'verify')}
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default Input
