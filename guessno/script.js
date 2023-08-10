// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  // Get the user's guess from the input field
  const guessInput = document.getElementById("guessInput");
  const userGuess = parseInt(guessInput.value);

  // Compare the user's guess with the random number
  if (userGuess === randomNumber) {
    displayResult("Congratulations! You guessed the correct number!");
  } else if (userGuess < randomNumber) {
    displayResult("Too low! Try a higher number.");
  } else {
    displayResult("Too high! Try a lower number.");
  }

  // Clear the input field
  guessInput.value = "";
  guessInput.focus();
}

function displayResult(message) {
  const result = document.getElementById("result");
  result.textContent = message;
}
