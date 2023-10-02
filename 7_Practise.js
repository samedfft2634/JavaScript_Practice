//! Practice-7: Write a program that prints Pass or Fail based on the grade entered. You can accept a passing grade of 50.

const grade = +prompt("Enter your grade : ");
const msg = grade >= 50 ? "Passed" : "Failed";
alert(`Your grade is : ${grade},\nResult : ${msg}`);