export const languageStrings = {
    en: {
        language: 'English',
        congrats: 'Congratulations! You guessed the word',
        verify: 'Verify',
        guessPrompt: 'Try to guess the secret word!',
        guessInputPlaceholder: 'Enter guess',
        guessTableHeader: 'Try to guess the secret word',
        guessedWordsColumnHeader: 'Guesses',
        matchingLettersColumnHeader: 'Matching Letters',
        newGame: 'New Game',
        totalGuesses: 'Total Number of Guesses',
        helpSecretWord: 'The secret word is',
    },
    es: {
        language: 'Español',
        congrats: 'Felicidades! Adivinaste la palabra secreta',
        verify: 'Verificar',
        guessPrompt: 'Intenta adivinar la palabra secreta!',
        guessInputPlaceholder: 'Adivina la palabra secreta',
        guessTableHeader: 'Adivina la palabra secreta',
        guessedWordsColumnHeader: 'Intentos',
        matchingLettersColumnHeader: 'Letras empatadas',
        newGame: 'Jugar de nuevo',
        totalGuesses: 'Total de intentos',
        helpSecretWord: 'La palabra secreta es',
    }
}

function getStringByLanguage(languageCode, stringKey, strings = languageStrings) {
    if (!strings[languageCode] || !strings[languageCode][stringKey]){
        console.warn(`String not found for key [${stringKey}] for language [${languageCode}]`)
        return strings.en[stringKey]
    }

    return strings[languageCode][stringKey]
}

export default getStringByLanguage
