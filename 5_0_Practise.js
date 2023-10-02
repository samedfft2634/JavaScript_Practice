// Find the activities on which day.
// In Turkish. I did not translate here for understand well again when i repeat .
alert("Haftalik ders ve etkinlik programini gormek icin istediginiz günü yazınız \
Not: Lutfen Turkce karakter kullanmayiniz !");
let gun = prompt("Gunu giriniz:");
let program;
if ( gun != "Pazartesi" && gun != "Sali" && gun != "Carsamba" && gun != "Persembe" && 
 gun != "Cuma" && gun != "Cumartesi" && gun != "Pazar") {
	alert("Lutfen gecerli bir gun giriniz, bas harfi buyuk yaziniz veya sayisal deger girmeyiniz ! ");
} else {
	switch(gun) {
	case "Pazartesi" || "Sali" || "Carsamba" || "Persembe":
	program = "InClass"
	break;
	case "Cuma":
	program = "Teamwork"
	break;
	case "Cumartesi":
	program = "InClass + Workshop"
	break;
	case "Pazar":
	program = "Self-Study"
	break;
	default:
	alert("Yanlis gun girildi!!!")
	}
}

// Benim kodum\ eksik olan || yapisi cunku onun nasil yapildigini henuz bilmiyordum
// Birde ekstra buyuk harf kucuk harf olayinda uyari verdim ben orada hata yok. Fazla kod var.
// Son olara ben ciktiyi tek tikte veya console.log ile sunmamisim. :)
