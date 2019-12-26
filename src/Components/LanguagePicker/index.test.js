import React from 'react';
import {shallow} from 'enzyme'
import LanguagePicker from './index'
import {findByTestAttr} from '../../../test/testUtils'
import { assertPropTypes } from 'check-prop-types'

describe('Language Picker tests', () => {
    const setLanguageMock = jest.fn()

    test('It renders without errors', () => {
        const wrapper = shallow(<LanguagePicker setLanguage={setLanguageMock} />)
        const component = findByTestAttr(wrapper, 'languagePicker-component')
        expect(component.length).toBe(1)
    })

    test('Does not throw warning with expected props', () => {
        assertPropTypes(LanguagePicker.propTypes, {setLanguage: setLanguageMock}, 'prop', LanguagePicker.name)
    })

    test('There should be more than one language to select', () => {
        const wrapper = shallow(<LanguagePicker setLanguage={setLanguageMock} />)
        const languages = findByTestAttr(wrapper, 'language-option')
        expect(languages.length).toBeGreaterThan(0)
    })

    test('It calls setLanguage prop upon click', () => {
        const wrapper = shallow(<LanguagePicker setLanguage={setLanguageMock} />)
        const component = findByTestAttr(wrapper, 'language-option').first()

        component.simulate('click')

        expect(setLanguageMock).toHaveBeenCalled()
        expect(component.text()).toEqual('English')
    })
})
