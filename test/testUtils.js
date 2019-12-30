import {mount, shallow} from 'enzyme'
import React from 'react'
import {assertPropTypes} from 'check-prop-types'
import {GuessedWordsProvider} from '../src/context/GuessedWordsContext'

export const setUp = (Component, props = {}, state = null) => {
    const s = shallow(<Component {...props}/>)
    if (state) s.setState(state)
    return s
}

export const setUpWithContext = (Component, Context, contextValue, props = {}, state = null) => {
    const s = mount(
        <Context.Provider value={contextValue}>
            <Component {...props}/>
        </Context.Provider>
    )
    if (state) s.setState(state)
    return s
}

export const setUpWithContextPattern = (Component, Provider, providerValue, props = {}, state = null) => {
    const s = mount(
        <Provider value={[...providerValue]}>
            <Component {...props} />
        </Provider>
    )
    if (state) s.setState(state)
    return s
}

export const setUpWithContextPatternAndGuessWordsProvider = (
    Component, Provider, providerValue, guessWordsProviderValue, props = {}, state = null
) => {
    const s = mount(
        <Provider value={[...providerValue]}>
            <GuessedWordsProvider value={guessWordsProviderValue}>
                <Component {...props} />
            </GuessedWordsProvider>
        </Provider>
    )
    if (state) s.setState(state)
    return s
}

export const setUpConnectedComponent = (Component, store, props = {}, state = null) => {
    const s = shallow(<Component store={store} />)
    if (props) s.setProps(props)
    if (state) s.setState(state)
    return s
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (Component, expectedProps, property) => {
    assertPropTypes(Component.propTypes, expectedProps, 'prop', Component[property])
}
