import React from 'react';
import {mount} from 'enzyme'
import {App} from './App'
import {findByTestAttr} from '../test/testUtils'
import hookActions from './context/actions'

const mockGetSecretWord = jest.fn()

const setUp = (secretWord = '', guessedWords = []) => {
    mockGetSecretWord.mockClear()
    hookActions.getSecretWord = mockGetSecretWord

    const useReducerProps = { guessedWords, secretWord }
    React.useReducer = jest
        .fn()
        .mockReturnValue([
            {...useReducerProps},
            jest.fn()
        ])

    // use mount, because useEffect not called on `shallow`
    // https://github.com/airbnb/enzyme/issues/2086
    return mount(<App />)
}

describe('App renders without errors', () => {
    test('When secretWord is not empty', () => {
        const wrapper = setUp('Testing')
        const appComponent = findByTestAttr(wrapper, 'app-component')
        expect(appComponent.exists()).toBe(true)
    })

    test('When secretWord is empty', () => {
        const wrapper = setUp('')
        const loading = findByTestAttr(wrapper, 'loading')
        expect(loading.exists()).toBe(true)
    })
})

describe('getSecretWord calls', () => {
    test('getSecretWord on App mount', () => {
        setUp()
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
    })

    test('secretWord does not update on App update', () => {
        const wrapper = setUp()

        // Doing an 'update'
        wrapper.setProps()
        expect(mockGetSecretWord).not.toHaveBeenCalledTimes(2)
    })
})
