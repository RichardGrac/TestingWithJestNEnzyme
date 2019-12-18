import React from 'react'
import PropTypes from 'prop-types'

/**
 *  Functional react component for congratulatory message
 *  @function
 *  @param {object} props - React props
 *  @returns {JSX.Element} - Rendered component
 */
const Congrats = (props) => {
    const {success} = props
    return (
        <div data-test={'congrats-display'}>
            {success && (
                <div className={'alert alert-success'}>Congratulations, you've assert the word</div>
            )}
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool,
}

export default Congrats
