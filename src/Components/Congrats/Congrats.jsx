import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import getStringByLanguage from '../../helpers/languages'
import languageContext from '../../context/LanguageContext'
import {useSuccess} from '../../context/SuccessContext'
import {useGuessedWords} from '../../context/GuessedWordsContext'

/**
 *  Functional react component for congratulatory message
 *  @function
 *  @returns {JSX.Element} - Rendered component
 */
const Congrats = (props) => {
    const {resetGame} = props
    const language = React.useContext(languageContext)
    const [, setGuessedWords] = useGuessedWords()
    const [success, setSuccess] = useSuccess()

    const onHandleResetGame = () => {
        resetGame()
        setGuessedWords([])
        setSuccess(false)
    }

    return (
        <div data-test={'congrats-display'}>
            {success && (
                <Fragment>
                    <div className={'alert alert-success'}>
                        <h4>{getStringByLanguage(language, 'congrats')}</h4>
                    </div>
                    <button data-test={'new-game'}
                            className={'btn btn-primary'}
                            onClick={() => onHandleResetGame()}
                    >
                        {getStringByLanguage(language, 'newGame')}
                    </button>
                </Fragment>
            )}
        </div>
    )
}

Congrats.propTypes = {
    resetGame: PropTypes.func,
}

export default Congrats
