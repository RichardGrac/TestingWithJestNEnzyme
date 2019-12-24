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
                <form data-test={'input-form'} className={'input-group my-3'}>
                    <input type="text"
                           className={'form-control'}
                           placeholder={'Guess the secret word'}
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           data-test={'guess-input'}
                    />
                    <div className={'input-group-append'}>
                        <button type={'button'}
                                data-test={'verification-button'}
                                className={'btn btn-outline-secondary'}
                                onClick={(e) => handleWordMatchVerification(e)}
                        >
                            Verify
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string,
}

export default Input
