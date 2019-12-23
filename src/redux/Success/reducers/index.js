import {CORRECT_GUESS, RESET_SUCCESS} from "../../constants";

const initialState = {
    success: false
}

const successReducer = (state = initialState, action) => {
    switch (action.type) {
        case CORRECT_GUESS:
            return {
                ...state,
                success: action.success
            }

        case RESET_SUCCESS:
            return {
                ...state,
                success: false
            }

        default:
            return state
    }
}

export default successReducer
