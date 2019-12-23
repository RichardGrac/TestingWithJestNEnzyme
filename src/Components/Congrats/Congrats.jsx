import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

/**
 *  Functional react component for congratulatory message
 *  @function
 *  @param {object} props - React props
 *  @returns {JSX.Element} - Rendered component
 */
const Congrats = (props) => {
    const {success, resetGame} = props

    return (
        <div data-test={'congrats-display'}>
            {success && (
                <Fragment>
                    <div className={'alert alert-success'}>
                        <h3>Congratulations!</h3>
                        You asserted the word
                    </div>
                    <button data-test={'new-game'}
                            className={'btn btn-primary'}
                            onClick={resetGame}
                    >
                        New Game
                    </button>
                </Fragment>
            )}
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool,
}

export default Congrats
