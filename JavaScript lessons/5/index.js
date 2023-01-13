/*let ism = prompt('Ismingizni kiriting');
let yosh = prompt('Yoshingizni kiriting');
let num = Number(yosh);
let boshHarf = ism.charAt().toUpperCase();
let kichikHarf = ism.slice(1).toLowerCase();
console.log(boshHarf + kichikHarf);
console.log(2022-num);

let array = ['Akmal', 'Axror', 'Mansur'];
let ismi = prompt('Isim kiriting')

	if(array.includes(ismi)){
		alert('Siz soragan ism bor')
	}else{
		alert('Afsus siz soragan ism yoq')
	}
*/
/*
const ismlar = ['Axror', 'Sardor', 'Doniyor'];
for(i = 0; i<ismlar.length; i++){
	let bek = 'bek';
	console.log(ismlar[i]+bek);
}
const Andijon = '20mingta';
const Namangan = '25mingta';
const Toshkent = '50mingta';
const input = prompt('Viloyat nomini kiriting');
const arrayShaxar = ['Andijon', 'Namangan', 'Toshkent']
if(input==arrayShaxar[0]){
	alert(`Andijonda aholi soni ${Andijon}`);
}else if(input==arrayShaxar[1]){
	alert(`Namanganda aholi soni ${Namangan}`);
}else if(input==arrayShaxar[2]){
	alert(`Toshkenda aholi soni ${Toshkent}`);
}else{
	alert('Kechirasiz bunday viloyat O\'zbekistonda yo\'q');
}
*/
/*
const meyor = prompt("Iltimos 20 ta belgi kiriting")
if(meyor.length==20){
	alert('Raxmat');
}else if(meyor.length<20){
	alert(`Siz kiritgan son meyorga${20 - meyor.length} ta yetmayapti`);
	meyor;
}else if(meyor.length<20){
	alert(`Siz kiritgan son meyordan ${meyor.length - 20} ta kopayib ketti`);
	meyor;
}
*/

//let ason = +prompt('a sonni kiriting');
//let bson = +prompt('b sonni kiriting');
/*
if(ason==bson){
	alert('Voy ular teng');
}else if(ason<bson){
	alert(`${bson} katta`);
}else if(ason>bson){
	alert(`${ason} katta`);
}else{
	alert(`Iltimos son kiriting`);
}
*/
//let cson = +prompt('Son kiriting');
/*let qoldiq = cson % 2;
if(qoldiq==1){
	alert(`Siz kiritgan son TOQ`)
}else if(qoldiq==0){
	alert('Siz kiritgan son JUFT')
}else{
	alert('XUDO XAYRINGNI BERSIN SON KIRIT');
	cson;
}*/
/*
 let son = 0;
	for(i = 0; i<cson; i+=5){
		son+=i;
		alert(son);
	}*/
	// 4- mashqni switch case bilan qilaman va for loopda kara jadval
	/*let viloyat = prompt('Viloyat nominikiriting');
	switch (viloyat) {
		case 'Toshkent':
			alert('12 mln aholi bor');
			break;
		case 'Namangan':
			alert('7 mln aholi bor');
			break;
		case "Farg'ona":
			alert('5 mln aholi bor');
			break;
		case 'Andijon':
			alert('9 mln aholi bor');
			break;
		case 'Qashqadaryo':
			alert('10 mln aholi bor');
			break;
		default:
			alert('Bunday viloyatimiz yoq');
			break;
	}*/
	let calaA = +prompt('A sonni kiriting');
	let calaB = +prompt('B sonni kiriting');

	for(i = 0; i<=calaA; i++){
		for(e = 0; e<=calaB; e++){
			let calc = e * i;
			console.log(`${e} * ${i} = ${calc}`);
		}
	}