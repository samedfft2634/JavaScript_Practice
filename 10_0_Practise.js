//! From the Console, it retrieves the amount of the person's income and expenses:
//- If the person's income is at least the minimum wage, the loan can be granted:
//- If not, the loan cannot be granted.
//- Write with Ternary .
// const asgari = 11402; en az dendigi icin gelir >= asgari
//  Solution 1 (without Ternary)
let gelir = parseFloat(prompt("Gelirinizi giriniz !"));
let gider = parseFloat(prompt("Giderinizi giriniz !"));
const asgari = 11402;
if (gelir >= (gider + asgari)) {
	alert(`Gelir :${gelir},\n${gider},\nGelir,giderden en az asgari ucret kadar fazla.\nKredi Verilebilir :)`);
} else {
	alert(`Gelir :${gelir},\n${gider},\nGelir,giderden en az asgari ucret kadar fazla degil.\nKredi Verilemez :(`);
}

//^ In Turkish. I did not translate here for understand well again when i repeat .

