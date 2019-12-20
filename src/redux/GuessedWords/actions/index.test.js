import moxios from 'moxios'
import {storeFactory} from '../../../../test/testUtils'
import {getSecretWordAxios} from './index'

describe('Get secret word from server', () => {

    beforeEach(() => {
        moxios.install()
        // If I would have an axios instance, then:
        // moxios.install(axiosInstance)
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('It should add the Secret Word to the Store', () => {
        const secretWord = 'party'
        const store = storeFactory()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: secretWord
            })
        })

        return store.dispatch(getSecretWordAxios())
            .then(() => {
                const newState = store.getState()
                expect(newState.guessedWordsReducer.secretWord).toBe(secretWord)
            })
    })
})
