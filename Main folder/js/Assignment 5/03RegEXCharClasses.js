// Function to search for specific character classes in a given string
function searchCharacterClasses(inputString) {
  // Regular expression patterns for character classes
  const patterns = {
    digits: /\d/g, // Matches any digit character
    uppercaseLetters: /[A-Z]/g, // Matches any uppercase letter
    lowercaseLetters: /[a-z]/g, // Matches any lowercase letter
    specialCharacters: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g // Matches any special character
  };

  // Object to store the results
  const results = {};

  // Loop through each pattern and search for matches in the input string
  for (let key in patterns) {
    const regex = patterns[key];
    results[key] = inputString.match(regex) || [];
  }

  // Return the results
  return results;
}

// Test the function
const inputString = "Hello123! How are you?";
const matches = searchCharacterClasses(inputString);
console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialCharacters);
