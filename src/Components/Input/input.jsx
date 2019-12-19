import React, {useState, Fragment} from "react";
import {connect} from "react-redux";

const Input = props => {
    const {success} = props
    const [inputValue, setInputValue] = useState('')

    const handleWordMatchVeryfication = () => {
        console.log('Hi')
    }

    return (
        <div data-test={'component-input'}>
            {!success && (
                <form data-test={'input-form'}>
                    <input type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type={'button'}>Verify</button>
                </form>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        success: state.successReducer.success
    }
}

export default connect(mapStateToProps)(Input)