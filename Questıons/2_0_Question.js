let ay = prompt("Bir ay ismi giriniz").toLowerCase();
let ayDeger;
switch(ay) {
	case "ocak":
	ayDeger = 1;
	break;
	case "subat":
	ayDeger = 2;
	break;
	case "mart":
	ayDeger = 3;
	break;
	case "nisan":
	ayDeger = 4;
	break;
	case "mayis":
	ayDeger = 5;
	break;
	case "haziran":
	ayDeger = 6;
	break;
	case "temmuz":
	ayDeger = 7;
	break;
	case "agustos":
	ayDeger = 8;
	break;
	case "eylul":
	ayDeger = 9;
	break;
	case "ekim":
	ayDeger = 10;
	break;
	case "kasim":
	ayDeger = 11;
	break;
	case "aralik":
	ayDeger = 12;
	break;
	default:
	alert(`${ay} adinda bir ay bulunmamaktadir.`);
}
alert(`${ay}'in degeri ${ayDeger}'dir`);
