import React from "react";
import PropTypes from 'prop-types'

export const Input = props => {
    const {success, guessWord} = props
    const [inputValue, setInputValue] = React.useState('')

    const handleWordMatchVerification = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            guessWord(inputValue)
            setInputValue('')
        }
    }

    return (
        <div data-test={'component-input'}>
            {!success && (
                <form data-test={'input-form'}>
                    <input type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           data-test={'guess-input'}
                    />
                    <button type={'button'}
                            data-test={'verification-button'}
                            onClick={(e) => handleWordMatchVerification(e)}
                    >
                        Verify
                    </button>
                </form>
            )}
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string,
}

export default Input
