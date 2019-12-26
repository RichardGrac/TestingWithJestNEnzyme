export const languageStrings = {
    en: {
        language: 'English',
        congrats: 'Congratulations! You guessed the word',
        verify: 'Verify',
        guessPrompt: 'Try to guess the secret word!',
        guessInputPlaceholder: 'Enter guess',
        guessColumnHeader: 'Guessed Words',
        guessedWords: 'Guesses',
        matchingLettersColumnHeader: 'Matching Letters',
        newGame: 'New Game',
    },
    es: {
        language: 'Español',
        congrats: 'Felicidades! Adivinaste la palabra secreta',
        submit: 'Verificar',
        guessPrompt: 'Intenta adivinar la palabra secreta!',
        guessInputPlaceholder: 'Adivina...',
        guessColumnHeader: 'Palabras adivinadas',
        guessedWords: 'Intentos',
        matchingLettersColumnHeader: 'Letras empatadas',
        newGame: 'Jugar de nuevo',
    }
}

function getStringByLanguage(languageCode, stringKey, strings = languageStrings) {
    if (!strings[languageCode] || !strings[languageCode][stringKey]){
        console.warn(`String not found form key [${stringKey}] for language [${languageCode}]`)
        return strings.en[stringKey]
    }

    return strings[languageCode][stringKey]
}

export default getStringByLanguage
