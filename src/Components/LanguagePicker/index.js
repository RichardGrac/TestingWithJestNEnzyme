import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import { languageStrings } from '../../helpers/languages'

const languagePickerStyles = {
    options : {
        textDecoration: 'underline',
        cursor: 'pointer',
    }
}

const LanguagePicker = ({setLanguage}) => {
    return (
        <div data-test={'languagePicker-component'}>
            Languages:{' '}
            {Object.keys(languageStrings).map((key, i) => (
                <Fragment key={`${i}`}>
                    <b onClick={() => setLanguage(key)}
                       data-test={`language-option`}
                       style={languagePickerStyles.options}
                    >
                        {languageStrings[key].language}
                    </b>
                    {'  '}
                </Fragment>
            ))}
        </div>
    )
}

LanguagePicker.propTypes = {
    setLanguage: PropTypes.func.isRequired,
}

export default LanguagePicker
