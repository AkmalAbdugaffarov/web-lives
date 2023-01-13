let form = document.querySelector('#form');
let btn = document.querySelector('.btn');
let input = document.querySelector('#form__input');
let text = document.getElementById('text');
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	let RegEx = /^[A-Z a-z 0-9]{6,12}$/;
	if(RegEx.test(input.value)){
		console.log('Tog\'ri keladi');
	}else{
		console.log("Noto'g'ri javob");
	}
	if((input.value.search('akmal')>(-1))){
		text.textContent = 'Ha bunday narsa bor';
	}else{
		text.textContent = "Yo'q bunday narsa yo'q"
	}
	});
