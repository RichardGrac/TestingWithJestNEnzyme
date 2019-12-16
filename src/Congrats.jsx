import React from 'react'

/**
 *  Functional react component for congratulatory message
 *  @function
 *  @returns {JSX.Element} - Rendered component
 */
export default (props) => {
    const {success} = props
    return (
        <div data-test={'congrats-display'}>
            {success && (
                <React.Fragment>Congratulations, you've assert the word</React.Fragment>
            )}
        </div>
    )
}
