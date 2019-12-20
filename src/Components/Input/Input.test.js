import React from 'react'
import {findByTestAttr, setUpConnectedComponent, storeFactory} from "../../../test/testUtils";
import Input from "./input";
import {shallow} from "enzyme";

const setUp = (initialState = {}) => {
    const mockedStore = storeFactory(initialState)
    return setUpConnectedComponent(Input, mockedStore).dive().dive()
}

describe('Input field tests, word not guessed', () => {

    let wrapper
    beforeEach(() => {
        const initialState = {successReducer: {success: false}}
        wrapper = setUp(initialState)
    })

    test('renders component without error', () => {
        const component = findByTestAttr(wrapper, 'input-form')
        expect(component.length).toBe(1)
    })

    test('renders input box', () => {
        const component = findByTestAttr(wrapper, 'guess-input')
        expect(component.length).toBe(1)
    })

    test('renders submit button', () => {
        const component = findByTestAttr(wrapper, 'verification-button')
        expect(component.length).toBe(1)
    })
})

describe('Input field tests, word guessed', () => {

    let wrapper
    beforeEach(() => {
        const initialState = {successReducer: {success: true}}
        wrapper = setUp(initialState)
    })

    test('renders component without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')
        expect(component.length).toBe(1)
    })

    test('does not render input box', () => {
        const component = findByTestAttr(wrapper, 'guess-input')
        expect(component.length).toBeFalsy()
    })

    test('does not render submit button', () => {
        const component = findByTestAttr(wrapper, 'verification-button')
        expect(component.length).toBeFalsy()
    })
})
