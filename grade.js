const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

rl.question("Enter your marks: ", (input) => {
  const marks = parseInt(input);

  if (isNaN(marks)) {
    console.log("Please enter a valid number.");
  } else {
    console.log(`Your grade is: ${calculateGrade(marks)}`);
  }

  rl.close();
});
