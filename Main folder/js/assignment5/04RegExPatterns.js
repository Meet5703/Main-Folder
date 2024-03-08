function extractDateParts(regexPattern, inputString) {
  const regex = new RegExp(regexPattern);
  const match = regex.exec(inputString);

  if (match !== null) {
    const dateParts = {
      day: match[1],
      month: match[2],
      year: match[3]
    };
    return dateParts;
  } else {
    return null;
  }
}

// Test the function with different patterns
const inputString1 = "Today is 07-03-2024";
const inputString2 = "Today is 07/03/2024";
const pattern1 = /(\d{2})-(\d{2})-(\d{4})/; // Pattern to extract date in dd-mm-yyyy format
const pattern2 = /(\d{2})\/(\d{2})\/(\d{4})/; // Pattern to extract date in dd/mm/yyyy format

console.log("Using pattern 1:");
console.log(extractDateParts(pattern1, inputString1));
console.log(extractDateParts(pattern2, inputString1));

console.log("Using pattern 2:");
console.log(extractDateParts(pattern1, inputString2));
console.log(extractDateParts(pattern2, inputString2));
