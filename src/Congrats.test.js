import React from 'react'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'
import {findByTestAttr, setUp} from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Congrats tests', () => {
    test('renders without error', () => {
        const wrapper = setUp(Congrats)
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.length).toBe(1)
    })

    test('renders no text when `success` prop is false', () => {
        const wrapper = setUp(Congrats, {success: false})
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.text().length).toBe(0)
    })

    test('renders non-empty congrats message when `success` props is true', () => {
        const wrapper = setUp(Congrats, {success: true})
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.text().length).not.toBe(0)
    })
})
