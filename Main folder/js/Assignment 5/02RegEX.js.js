// Function to check if there is a match between a regex pattern and a string
function chkMatch(pattern, string) {
  // Creating a regular expression object with the provided pattern
  let regex = new RegExp(pattern);

  // Using the test method of RegExp object to check for a match
  return regex.test(string);
}

// Test cases
console.log(chkMatch("hello", "hello world")); // true
console.log(chkMatch("hello", "hi there")); // false

// Using regex modifiers
console.log(chkMatch("world", "Hello World", "i")); // true (case insensitive)

// Using character classes
console.log(chkMatch("[0-9]", "Hello 123")); // true (matches any digit)

// Using quantifiers
console.log(chkMatch("a+", "aaabbb")); // true (matches one or more 'a's)

// Using escape characters
console.log(chkMatch("\\d", "There are 5 apples")); // true (matches any digit)

// Using alternation
console.log(chkMatch("cat|dog", "I have a cat")); // true (matches 'cat' or 'dog')

// Using boundary matchers
console.log(chkMatch("\\bcat\\b", "I have a cat")); // true (matches 'cat' as a whole word)

// Using capturing groups
console.log(chkMatch("(\\d{3})-(\\d{3})-(\\d{4})", "Phone: 123-456-7890")); // true (matches phone number format)

// Using character sets
console.log(chkMatch("[aeiou]", "hello")); // true (matches any vowel)
