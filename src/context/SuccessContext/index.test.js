import React from 'react'
import {shallow} from 'enzyme'
import {SuccessProvider, useSuccess} from './index'

const FunctionalComponent = () => {
    useSuccess()
    return <div>Mock component</div>
}

describe('SuccessContext tests', () => {
    test('Context should throw an error if it is not used within SuccessProvider', () => {
        expect(() => shallow(<FunctionalComponent />)).toThrowError()
    })

    test('Component should not throw an Exception', () => {
        expect(() => (
            shallow(
                <SuccessProvider>
                    <FunctionalComponent />
                </SuccessProvider>
            )
        )).not.toThrowError()
    })
})
