//! Practice-8: Write a program that prints Fail, Conditional Pass or Pass depending on the grade entered.
let note = +prompt("Enter your note");
let msg = note < 40 ? "Fail" : (note >= 40 && note <= 50 ? "Conditional Passed" : (note >50 ? "Passed" : "Failed"));
console.log(`Your note is ${note} and success situation is ${msg}`)
alert(`Your note is ${note} and success situation is ${msg}`)