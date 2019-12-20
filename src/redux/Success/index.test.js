import successReducer from "./reducers";

describe('testing reducers', () => {
    test('It returns default initial state with success equals false', () => {
        const result = successReducer(undefined, {})
        expect(result.success).toEqual(false)
    })
})
