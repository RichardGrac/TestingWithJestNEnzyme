import {App} from './App'
import {shallow} from 'enzyme'
import React from 'react'

describe('<App /> tests', () => {
    test('`getSecretWord` runs on <App /> mount', () => {
        const getSecretWordMock = jest.fn()
        const props = {
            getSecretWordAxios: getSecretWordMock,
            guessedWords: []

        }
        // Set up app component with getSecretWord as the getSecretWord prop
        const wrapper = shallow(<App {...props} />)

        // Run lifecycle method
        wrapper.instance().componentDidMount()

        // Check if mock ran
        const getSecretWordCallCount = getSecretWordMock.mock.calls.length
        expect(getSecretWordCallCount).toBe(1)
    })
})
