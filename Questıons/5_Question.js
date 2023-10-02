//! Question - 5:
//- Design a program that converts the entered degrees to Fahrenheit or Fahrenheit to degrees.
//- The conversion from one unit to another must be asked at the beginning of the program.

let num = +prompt(" Celsius to Fahrenait : 1 \nFahrenait to Celsius : 2");
if (num == 1) {
	let der = parseFloat(prompt("Sicaklik derecesini giriniz :"));
	let fahr = der * 1.8 + 32;
	console.log(`${der} derece = ${fahr} F`);
} else if (num == 2) {
	let fah = parseFloat(
		prompt("Sicaklik derecesini fahrenait cinsinden giriniz :")
	);
	let derr = (fah - 32) / 1.8;
	console.log(`${fah} Fahrenait = ${derr} C`);
} else {
	alert("Select 1 or 2 ");
}
