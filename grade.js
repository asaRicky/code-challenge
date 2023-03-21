//prompt the user to input students grade
let marks = ("Prompt Enter students marks (between 0-100)");

//convert marks input into numbers
const Marks =number(marks);

// Check if the input is a valid number between 0 and 100
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
    //determine the grade based on marks input
let grade;
     if (marks > 79) {
        grade = "A";
      } else if (marks >= 60 && marks <= 79) {
        grade = "B";
      } else if (marks >= 50 && marks <= 59) {
        grade = "C";
      } else if (marks >= 40 && marks <= 49) {
        grade = "D";
      } else {
        grade = "E";
      }

// Output grade
comsole.log(`The students Grade is ${grade}!`)
    }

