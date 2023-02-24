const input = document.getElementById('input')
const textError = document.getElementById('err')

// for(i=0; i<text.length; i++){
// 	if(text[i] == '(' || text[i] == ')'){
// 		letter+= 'm'
// 	}else{
// 		letter+= +(-i)
// 	}
// }
// console.log(letter)


function filter() {
	let count = 0;
	for(i = 0; i < input.value.length; i++){
		if(input.value[i] == '('){
			count++
		}else if(input.value[i]==')' && --count < 0){
			false
		}
	}
	console.log(count)
	if(count == 0){
	textError.innerHTML = "Qavslar joyida raxmat"
	setTimeout(()=>{
		textError.innerHTML = '';
	},2000)
}else{
	textError.innerHTML = "To'g'riligiga aminmisiz !!!"
	setTimeout(()=>{
		textError.innerHTML = '';
	},2000)
}
}