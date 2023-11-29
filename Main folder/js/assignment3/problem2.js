let students = ["meet", "piyush", "raj", "manthan"];
let marks = [94, 86, 60, 49];

for (let i = 0; i < students.length; i++) {
    if (marks[i] > 90) {
        console.log(`${students[i]} Congratulations, you have got grade A`);
    } else if (marks[i] > 70) {
        console.log(`${students[i]} Congratulations, you have got grade B`);
    } else if (marks[i] > 50) {
        console.log(`${students[i]} Congratulations, you have got grade C`);
    } else {
        console.log(`${students[i]} Better luck next time, you have got grade F`);
    }
}



