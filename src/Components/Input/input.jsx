import React, {useState, Fragment} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {guessWord} from '../../redux/Success/actions'

export const Input = props => {
    const {success, guessWord} = props
    const [inputValue, setInputValue] = useState('')

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

const mapStateToProps = state => {
    return {
        success: state.successReducer.success,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        guessWord
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
