const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//this will sort the array in ascending order
const sortedAges = ages.sort((a, b) => a - b);
console.log("ages:", sortedAges);

//because of ages are sorted in ascending order minimum age will be at 0th index
const minAge = ages[0];
console.log("Minimum Age is", minAge);

//maximum age will be at last index
const maxAge = ages[ages.length - 1];
console.log("Maximum Age is", maxAge);

//median age will be at middle index
const medianAge = ages[Math.floor(ages.length / 2)];
console.log("Median Age is", medianAge);

//average age will be sum of all ages divided by number of ages

const averageAge = ages.reduce((a, b) => a + b) / ages.length;
console.log("Average Age is", Math.round(averageAge));

//range will be maximum age - minimum age
const range = maxAge - minAge;
console.log("Range is", range);

//compare minimum age with average age and maximum age with average age with absolute method
minDiff = Math.abs(minAge - averageAge);
maxDiff = Math.abs(maxAge - averageAge);
if (minDiff > maxDiff) {
  console.log(
    "minimum diffrance between maximum and minimum age is",
    Math.round(minDiff)
  );
} else if (minDiff < maxDiff) {
  console.log(
    "maximum diffrance between maximum and minimum age is",
    Math.round(maxDiff)
  );
} else {
  console.log("both are equal");
}
