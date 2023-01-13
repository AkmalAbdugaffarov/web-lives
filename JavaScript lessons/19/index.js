let head = document.getElementById('head');
let box = document.getElementById('box');
let code = document.getElementById('code');
let key = document.getElementById('key');
let keyCode = document.getElementById('keyCode');
document.addEventListener('keyup', (e)=>{
	head.innerHTML = 'OK key buttons end see';
	box.classList.remove('none');
	head.classList.remove('margin');
	code.innerHTML = e.code;
	if(e.key == " "){
		key.innerHTML = 'Space';
	}else{
		key.innerHTML = e.key
	}
	keyCode.innerHTML = e.keyCode;
})
head.addEventListener('click', ()=>{
	head.innerHTML = 'KEY THE KEYBOARD BUTTON';
})
