import {CORRECT_GUESS} from "../../constants";

/**
 * @function setSuccess
 * @returns {object} - An action object with type `CORRECT_GUESS`
 */
export const setSuccess = () => {
    return {
        type: CORRECT_GUESS,
        success: true
    }
}