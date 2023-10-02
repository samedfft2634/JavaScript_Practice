//! Practice-2: Take 3 integers from the console and print the largest of them.
//^ parseInt can be usefull in here.
let num1 = parseInt(prompt("Enter a number 1:"));
let num2 = parseInt(prompt("Enter a number 2:"));
let num3 = parseInt(prompt("Enter a number 3:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
	alert("Please enter valid numbers.");
} else {
	if (num1 > num2 && num1 > num3) {
		alert(`${num1} is the biggest number!`);
	} else if (num2 > num1 && num2 > num3) {
		alert(`${num2} is the biggest number!`);
	} else if (num3 > num1 && num3 > num2) {
		alert(`${num3} is the biggest number!`);
	} else {
		alert("All numbers are equal.");
	}
}
