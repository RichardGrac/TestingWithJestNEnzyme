import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {guessWord} from '../../redux/Success/actions'
import languageContext from '../../context/LanguageContext'
import getStringByLanguage from '../../helpers/languages'

export const Input = props => {
    const {success, guessWord} = props
    const [inputValue, setInputValue] = useState('')
    const language = React.useContext(languageContext)

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
