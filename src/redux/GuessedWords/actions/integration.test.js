import moxios from 'moxios'
import {storeFactory} from '../../../../test/testUtils'
import {getSecretWordAxios} from './index'

describe('Get secret word from server', () => {

    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('It should add the Secret Word to the Store', () => {
        const apiResponse = { 'randomWord': 'work' }
        const store = storeFactory()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: apiResponse
            })
        })

        return store.dispatch(getSecretWordAxios()).then(() => {
                const newState = store.getState()
                expect(newState.guessedWordsReducer.secretWord).toBe(apiResponse.randomWord)
            })
    })
})
