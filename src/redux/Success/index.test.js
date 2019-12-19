import {setSuccess} from './actions/index'
import {CORRECT_GUESS} from "../constants"
import successReducer from "./reducers";

describe('testing actions', () => {
    test('It should returns the action with the success state equals true', () => {
        const result = setSuccess()
        expect(result).toStrictEqual({type: CORRECT_GUESS, success: true})
    })
})

describe('testing reducers', () => {
    test('It returns default initial state with success equals false', () => {
        const result = successReducer(undefined, {})
        expect(result.success).toEqual(false)
    })

    test('It returns success equals true after `CORRECT_GUESS was dispatched`', () => {
        const result = successReducer(undefined, {type: CORRECT_GUESS, success: true})
        expect(result.success).toEqual(true)
    })
})