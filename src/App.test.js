import React from 'react';
import {mount} from 'enzyme'
import {App} from './App'
import {findByTestAttr} from '../test/testUtils'
import hookActions from './context/actions'

const mockGetSecretWord = jest.fn()

const setUp = () => {
    mockGetSecretWord.mockClear()
    hookActions.getSecretWord = mockGetSecretWord

    return mount(<App />)
}

test('App renders without errors', () => {
    const wrapper = mount(<App />)
    const appComponent = findByTestAttr(wrapper, 'app-component')
    expect(appComponent.length).toBe(1)
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
