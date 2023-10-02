//! Practice-9:
//! Take the person's salary from the console.
//! if the salary entered is less than the minimum wage, a 50% salary increase.
//! Otherwise write the code that gives a 10% raise using the Ternary statement.

const minimum = 11402;
let salary = +prompt("Please enter your salary : ");
let currentSalary = salary < minimum ? salary + (salary * 50 / 100) : salary + (salary * 10 / 100);
let hikePercent = salary < minimum ? "%50" : "%10";
let increaseAmount =  salary < minimum ? (salary * 50 / 100) : (salary * 10 / 100);
alert(`Minimum: ${minimum},\nsalary: ${salary},\nSALARY INCREASE: ${hikePercent},\nAmount of Increase: ${increaseAmount},\ncurrentSalary: ${currentSalary}`);
console.log(`Minimum : ${minimum},\nSalary: ${salary},\ncurrentSalary : ${currentSalary}`);