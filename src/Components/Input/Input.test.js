import {shallow} from 'enzyme'
import Input from './input'
import React from 'react'
import {findByTestAttr} from '../../../test/testUtils'
import {assertPropTypes } from 'check-prop-types'

describe('Input general tests', () => {
    test('It renders without errors', () => {
        const wrapper = shallow(<Input />)
        const inputComponent = findByTestAttr(wrapper, 'component-input')
        expect(inputComponent.length).toBe(1)
    })

    test('does not throw warning with expected props', () => {
        assertPropTypes(Input.propTypes, {secretWord: 'true'}, 'prop', Input.name)
    })
})

describe('Input state field', () => {
    test('state Updates correctly', () => {
        const mockSetInputValue = jest.fn()
        React.useState = jest.fn(() => ['', mockSetInputValue])

        const props = { success: false }
        const wrapper = shallow(<Input {...props} />)
        const inputBox = findByTestAttr(wrapper, 'guess-input')
        inputBox.simulate('change', {target: {value: 'train'}})

        expect(mockSetInputValue).toHaveBeenCalledWith('train')
    })

    test('input field is cleared after click on the Submit button', () => {
        const mockSetInputValue = jest.fn()
        React.useState = jest.fn(() => ['Train', mockSetInputValue])

        const wrapper = shallow(<Input guessWord={jest.fn()} />)
        const submitButton = findByTestAttr(wrapper, 'verification-button')
        submitButton.simulate('click', { preventDefault(){} })

        expect(mockSetInputValue).toHaveBeenCalledWith('')
    })
})
