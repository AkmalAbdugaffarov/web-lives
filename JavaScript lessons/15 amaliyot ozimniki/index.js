let showBtn = document.getElementById('btn__show');
let closeBtn = document.getElementById('btn__close');
let text = document.getElementById('text');
let wrapper = document.getElementById('wrap');
let drop = document.getElementById('drop');
showBtn.addEventListener('click', (e)=>{
	drop.classList.add('blur');
	text.classList.remove('hidden');
	e.stopPropagation();
});
closeBtn.addEventListener('click', ()=>{
	drop.classList.remove('blur');
	text.classList.add('hidden');
});
wrapper.addEventListener('click', ()=>{
	drop.classList.remove('blur');
	text.classList.add('hidden');
});
document.addEventListener('keyup', (e)=>{
	if(e.key == 'Escape'){
		drop.classList.remove('blur');
		text.classList.add('hidden');
	}
});
text.addEventListener('click', (e)=>{
	e.stopPropagation();
})
//jhsengjkhng;kjngjkgkjnkjgnj