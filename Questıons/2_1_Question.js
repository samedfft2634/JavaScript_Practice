// Alternative of 2_0

let ay = prompt("Bir ay ismi giriniz").toLowerCase();
let ayDeger;

const aylar = {
	ocak: 1,
	subat: 2,
	mart: 3,
	nisan: 4,
	mayis: 5,
	haziran: 6,
	temmuz: 7,
	agustos: 8,
	eylul: 9,
	ekim: 10,
	kasim: 11,
	aralik: 12,
};

if (ay in aylar) {
	ayDeger = aylar[ay];
	alert(`${ay}'in degeri ${ayDeger}'dir`);
} else {
	alert(`${ay} adinda bir ay bulunmamaktadir.`);
}
