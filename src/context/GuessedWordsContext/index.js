import React from 'react'

export const GuessedWordsContext = React.createContext(false)

export function useGuessedWords() {
    const context = React.useContext(GuessedWordsContext)
    if (!context) {
        throw new Error(`useGuessedWords must be used within GuessedWordsProvider`)
    }
    return context
}

export function GuessedWordsProvider(props) {
    const [guessedWords, setGuessedWords] = React.useState([])
    const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords])
    return <GuessedWordsContext.Provider value={value} {...props} />
}
