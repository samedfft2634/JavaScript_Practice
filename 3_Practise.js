//! Practice-3: Write the 4 operations calculator (for 2 numbers)
let num1 = parseFloat(prompt("Enter a number 1 :"));
let num2 = parseFloat(prompt("Enter a number 2 "));
let operator = prompt("Choose an operator '+', '-', '/', '*'");
let result;
if (operator != "+" && operator != "-" && operator != "/" && operator != "*") {
    alert("Please enter a valid operator!");
} else  {
  switch(operator){
		case "+":
				result = num1 + num2 ;
				console.log(result)
				break;
		case "-":
				result = num1 - num2 ;
				console.log(result)
				break;
		case "/":
	      if (num2 !== 0) {
		      result = num1 / num2;
		      console.log(result);
      } else {
		      alert("Division by zero is not allowed!");
      }
      break;
		case "*":
				result = num1 * num2 ;
				console.log(result)
				break;
		default:
		    alert("Invalid operator.");
	}
}
//- bu kodu kendim ogrendiklerimle yazdim ders tekrarindan sonra , if opeartor != Kısmında
//- + || - || / || * olarak kiyaslama yaptim ama yanlışmış orayı chatgptden aldım
//- birde / isleminde 2.sayinin 0 olmasi durumunda hata vermesini oradan aldim.
//- son olarak gereksiz olsada default deger verdi chatgpt onu aldim.