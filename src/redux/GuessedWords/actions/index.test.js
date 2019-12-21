import {storeFactory} from '../../../../test/testUtils'
import {guessWord} from '../../Success/actions'

describe('guessWord action dispatcher', () => {
    const secretWord = 'party'
    const unsuccessfulGuess = 'train'

    describe('no guessed words', () => {
        let store
        const initialState = { secretWord, guessedWords: [], }
        beforeEach(() => {
            store = storeFactory({guessedWordsReducer: {...initialState}})
        })

        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess))
            const newState = store.getState()
            const expectedState = {
                successReducer : {
                    success: false,
                },
                guessedWordsReducer : {
                    ...initialState,
                    guessedWords: [
                        {guessedWord: unsuccessfulGuess, letterMatchCount: 3}
                    ]
                }
            }
            expect(newState.successReducer).toEqual(expectedState.successReducer)
            expect(newState.guessedWordsReducer).toEqual(expectedState.guessedWordsReducer)
        })

        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                successReducer: {
                    success: true,
                },
                guessedWordsReducer: {
                    guessedWords: [
                        { guessedWord: secretWord, letterMatchCount: 5 }
                    ],
                    secretWord,
                }
            }

            expect(newState.successReducer).toEqual(expectedState.successReducer)
            expect(newState.guessedWordsReducer).toEqual(expectedState.guessedWordsReducer)
        })
    })

    describe('some guessed words', () => {
        let store
        const initialState = {
            secretWord,
            guessedWords: [
                { guessedWord: 'agile', letterMatchCount: 1 }
            ]
        }
        beforeEach(() => {
            store = storeFactory({guessedWordsReducer: {...initialState}})
        })

        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess))
            const newState = store.getState()
            const expectedState = {
                guessedWordsReducer: {
                    secretWord,
                    guessedWords: [
                        ...initialState.guessedWords,
                        { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
                    ]
                },
                successReducer: {
                    success: false
                }
            }

            expect(newState.guessedWordsReducer).toEqual(expectedState.guessedWordsReducer)
            expect(newState.successReducer).toEqual(expectedState.successReducer)
        })

        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                successReducer: {
                    success: true
                },
                guessedWordsReducer: {
                    guessedWords: [
                        ...initialState.guessedWords,
                        { guessedWord: secretWord, letterMatchCount: 5 },
                    ],
                    secretWord
                }
            }

            expect(newState.successReducer).toEqual(expectedState.successReducer)
            expect(newState.guessedWordsReducer).toEqual(expectedState.guessedWordsReducer)
        })
    })
})
