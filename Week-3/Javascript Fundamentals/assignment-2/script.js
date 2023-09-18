

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;

    while (guessCount < totalGuesses) {
        guessCount++;

        let promptText = "Enter a number between 1 and 100.";

        if (guessCount > 1) {
            const prevGuess = parseInt(promptText);
            if (prevGuess < numToGuess) {
                promptText = `${prevGuess} is too small. Guess a larger number.`;
            } else if (prevGuess > numToGuess) {
                promptText = `${prevGuess} is too large. Guess a smaller number.`;
            }
        }

        const userInput = prompt(promptText);
        
        if (userInput === null) {
            return 0; // User pressed Cancel
        }

        const userGuess = parseInt(userInput);

        if (isNaN(userGuess)) {
            alert("Please enter a number.");
            continue;
        }

        if (userGuess === numToGuess) {
            return guessCount;
        }
    }

    return 0; // No more guesses left
}

console.log(playGuessingGame(5)); // Example with default totalGuesses (10)
console.log(playGuessingGame(7, 3)); // Example with custom totalGuesses (3)


