//let toplam = [['Opel', false], 'Rols Roys', 3434, true, ['Real Madrid', 'Halo Madrid'], 'Samandar', [12, 45, 44, 'Darslar']];
// toplam.forEach(function(nom, orni){
// 	if(typeof(nom)===typeof(array = [])){
// 		nom.forEach(function(dona, index){
// 			if(typeof(dona)===typeof('kjfvj')){
// 				let ichi = [];
// 				ichi.push(index)                          Arrayni qilmaganini sababi u array yani object tipi ekanlig uchun
// 				console.log(ichi)                                    (Bundan chiqdiki meni oylashim hato)
// 			}
// 		})
// 	}else if(typeof(nom)===typeof('string')){
// 		console.log(orni);
// 	}
// })
//  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// for(i = 0; i < toplam.length; i++){
// 	if(typeof(toplam[i]) == 'string'){
// 		console.log('String index', i);
// 	}
// 	for(e = 0; e < i.length; e++){           Arrayni qilmaganini sababi u array yani object tipi ekanlig uchun
// 		if(typeof(i[e]) == 'string'){                              (Bundan chiqdiki meni oylashim hato)
// 			console.log('String index', e);
// 		}
// 	}
// }
//  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????
/*
let newArray = [[1, 2, 3], 'Function', 'Number', [4, 5, 6]];
let Drop = [];
for(i = 0; i<newArray.length; i++){
	if(typeof(newArray[i])==typeof(Array = [])){
		newArray[i].forEach((neym) => {
			Drop.push(neym);
		})
	}
}
console.log(Drop);
 */
// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];
// let sataData = [];
// checkData.forEach((item) => {
// 	if(!item){
// 		sataData.push(item);
// 	}
// });
// console.log(sataData)
//[null, 0, '', false, undefined, NaN]
/*
let viloyat = 'Samarqand';
let teskari = '';
for(i = (viloyat.length - 1); i>=0; i--){
		teskari +=viloyat[i];
}
console.log(teskari);*/
/* 2 - usul
let viloyat = 'Namangan';
let viloyatArray = viloyat.split('').reverse();
let teskari = '';
for(i = 0; i<viloyatArray.length; i++){
	teskari+=viloyatArray[i];
}
console.log(teskari);
*/
/*
let text = 'AsssaloMu AlaYKum YAXshimisiz';
let textArray = text.split(' ');
let newText = '';
for(i = 0; i<textArray.length; i++){
  let big = textArray[i].charAt().toLowerCase();
  let small = textArray[i].slice(1).toUpperCase();
	newText += (big + small + ' ');
}
console.log(newText.trimEnd());*/
// let numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 0.9, 9];
// let summ = 0;
// numbers.forEach((item) => {
// 	if((item >= 0.0) && (Math.floor(item)===item) && (item !== Infinity) && ()){
// 		summ += item;
// 	}
// })
// console.log(summ)
// 7
// let text = prompt('Jumla kiriting');
// let textArray = [];
// for(i = 0; i<text.length; i ++){
// 	if(text[i] == 'a' || text[i] == 'A'){
// 		textArray.push(text[i]);
// 	}
// }
// console.log(`Yozilgan so'zda ${textArray.length}ta a harfi qatnashgan`);
// // 8
// const toplam = [21.1, "Roziya", "array", ["I am array"], null, true, 214]
// let types = [];
// toplam.forEach( (letter) => {
// 	types.push(typeof(letter))
// } )
// console.log(types)
// 9
// let text = prompt('Iltimos text kiriting');
// let calc = 0;
// let probel = 0;
// for(i = 0; i < text.length; i ++){
// 	if(text[i] == ' '){
// 		probel++
// 	}else{
// 		calc++
// 	}
// }
// alert(`Siz yozgan matnda ${probel}ta probel va ${calc}ta element qatnashgan`);
// let word = 'Uzbekistan';
// let calc = word.lastIndexOf(word.slice(-1))+1
// console.log(calc);
// 10
// const numberArray = [1, 2, 3, 4, 5, '6'];
// const newNumberArray = [];
// numberArray.forEach( (item, index) => {
// 	newNumberArray.push( (+item) + (index));
// })
// console.log(newNumberArray)
// 11
// 
// 12
// let number = +prompt('Iltimos son kiriting');
// const numberArray = [];
// for(i = 1; i<=10; i ++){
// 	numberArray.push(number*i+1);
// }
// console.log(numberArray);
// 13
// let number = [1, 3, 4, 5, 6, 7];
// console.log(number);
// let array = [];
// let negative = () => {

// 	  let son = number.forEach((item)=>{
// 		array.push(item*(-1))
// 	})
// 	console.log(array);
// } 
// negative();
// 14
// let array = [];
// let fizzBuzz = (number) => {
// 	for(i = 1; i <= +number; i ++){
// 		if((i % 15) == (0)){
// 			array.push('fizzbuzz')
// 		}else if((i % 5) == (0)){
// 			array.push('buzz')
// 		}else if((i % 3) == (0)){
// 			array.push('fizz')
// 		} else{
// 			array.push(i);
// 		}
// 	}
// }
// fizzBuzz(15);
// console.log(array)
//2 -usul
// let array = [];
// let fizzBuzz = (number) => {
// 	for(i = 1; i <= +number; i ++){
// 		if(i % 3 == 0 && i % 5 == 0){
// 			array.push('FizzBuzz')
// 		}else if(i % 3 == 0){
// 			array.push('Fizz')
// 		}else if(i % 5 == 0){
// 			array.push('Buzz')
// 		}else{
// 			array.push(i)
// 		}
// 	}
// }
// fizzBuzz(45);
// console.log(array)
/*
let resume = {
	name:'Akmal',
	surname:'Abdug\'afforov',
	year:'2000',
	data: '22 - may',
	old:'22',
	university:'',//'Islom Karimov nomidagi Toshkent Davlat Texnika universiteti'
	hobbys:'Frontend dasturlash',
	result:function() {
		let text = `Assalomu aleykum mening ismim ${this.name} familyam ${this.surname} va ${this.year}-yilning ${this.data} sanasida tug'ilganman hozirda yoshim ${this.old} da. Ayni vaqtda ${this.university ? "talabasiman":"hechqayerda oqimayman"} va hobby sifatida ${this.hobbys} sohasiga qiziqaman`;
		console.log(text);
	}
}
resume.result();
*/