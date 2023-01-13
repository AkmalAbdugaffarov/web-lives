const shpwBtn = document.getElementById('show__btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close__btn');
const overlay = document.getElementById('overlay');
const addHidden = ()=>{
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}
const removeHidden = ()=>{
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}
shpwBtn.addEventListener('click', removeHidden)
closeBtn.addEventListener('click', addHidden)
overlay.addEventListener('click', addHidden)	
document.addEventListener('keydown', (e)=>{
	if(e.key == 'Escape'){addHidden()}
})