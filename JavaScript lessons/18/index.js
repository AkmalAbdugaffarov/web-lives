let form = document.querySelector('#form');
let btn = document.querySelector('.btn');
let input = document.querySelector('#form__input');
let text = document.getElementById('text');
let RegEx = /^[A-Z a-z 0-9]{6,12}$/;
form.addEventListener( 'keyup',(e)=>{
	if(RegEx.test(input.value)){
	  input.setAttribute('class', 'green');
	}else{
		input.setAttribute('class', 'red');
	}
	console.log(e);
})