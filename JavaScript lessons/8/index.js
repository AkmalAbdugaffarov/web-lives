/*const abyekt = {
	name: 'Akmal',
	email: 'akmalabdugaffarov67@gmail.com',
	surname: 'Abdug\'afforov',
	oila: ['Akmal', 'Ozoda', 'Nilufar', 'Toxirjon', 'Samandar'],
	umumiy: function(){
		console.log(this.name + this.email + this.surname)
		console.log(this.familiy)
		this.oila.forEach(function(familiy){
			console.log(familiy)
		})
	},
	familiy: 'Oila a\'zolari quyidagilar:'
};
abyekt.umumiy()
*/
// let newArray = [
// 	{name: 'Avatar', old: 400},
// 	{name: 'Batman', old: 598}
// ]
// kalit = newArray.forEach(function(move){
// 	let javob = `${move.name} filmi 2022 yil ${move.old} like yig'di.`;
// 	console.log(javob);
// })
// let newArray = [
// 	{name:'Avatar', likes: 4567893},
// 	{name:'Orgimchak odam', likes: 9060788},
// 	{name:'Qasoskorlar', likes: 6789123},
// 	{name:'Superman Batmanga qarshi', likes: 7097834}
// ];
let newObject = {
	newArray: [
			{name:'Avatar', likes: 4567893},
			{name:'Orgimchak odam', likes: 9060788},
			{name:'Qasoskorlar', likes: 6789123},
			{name:'Superman Batmanga qarshi', likes: 7097834}
		],
	newMoves:function () {
		this.newArray.forEach(function(move){
			let newFunctionConsole = `${move.name} filmi endi chiqgan vaqtlarda ${move.likes}ta like yig'gan`;
			console.log(newFunctionConsole);
		})
	}
}
newObject.newMoves()