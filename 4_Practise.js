//! Enter a number to see the day of week
let day= +prompt("Enter a number between 0 and 8 for see days of week.(do not enter 0 or 8) : ");
switch (day) {
	case 1:
		day= "Monday"
		break;
	case 2:
		day= "Tuesday"
		break;
	case 3:
		day= "Wednesday"
		break;
	case 4:
		day= "Thursday"
		break;
	case 5:
		day = "Friday"
		break;
	case 6:
		day= "Saturday"
		break;
	case 7:
		day= "Sunday"
		break;
	default:
		alert("The number must be between 0-8.")
		break;
}
console.log(day);
