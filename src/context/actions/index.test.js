import moxios from 'moxios'
import getSecretWord from './index'

describe('Moxios tests', () => {
    beforeEach(() => {
        moxios.install()
    })
    
    afterEach(() => {
        moxios.uninstall()
    })
    
    test('calls the getSecretWord callback on axios response', async() => {
        const apiResponse = { 'randomWord': 'train' }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: apiResponse,
            })
        })
        
        const mockSecretWord = jest.fn()
        await getSecretWord(mockSecretWord)
        
        expect(mockSecretWord).toHaveBeenCalledWith(apiResponse.randomWord)
    })
})
