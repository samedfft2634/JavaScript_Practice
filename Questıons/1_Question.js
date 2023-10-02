let note = +prompt("Enter your grade");
let grade;

if (note < 0 || note > 100) {
	alert("Please enter a number between 0 and 100");
} else {
	switch (true) {
		case note >= 0 && note <= 25:
			grade = "FF";
			break;
		case note >= 26 && note <= 45:
			grade = "DD";
			break;
		case note >= 46 && note <= 65:
			grade = "CC";
			break;
		case note >= 66 && note <= 75:
			grade = "BB";
			break;
		case note >= 76 && note <= 90:
			grade = "BA";
			break;
		case note >= 91 && note <= 100:
			grade = "AA";
			break;
	}
	console.log(`Entered Note: ${note},\nGrade : ${grade}`);
}
