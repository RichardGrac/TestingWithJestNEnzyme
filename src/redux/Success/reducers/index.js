import {CORRECT_GUESS} from "../../constants";

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
        default:
            return state
    }
}

export default successReducer