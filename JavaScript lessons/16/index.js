let form = document.querySelector('#form');
let btn = document.querySelector('.btn');
let input = document.querySelector('#form__input');
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	console.log(typeof(input.value))
	})