//! Application-1: Determine whether a number entered from the console is positive, negative or 0 and print it.
let num = prompt("Enter a number");
if (num > 0) {
	alert("Num 's positive");
} else if (num < 0) {
	alert("Num is negative");
} else {
	alert("Num is zero");
}
