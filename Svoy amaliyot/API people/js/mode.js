const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')
function mode() {
	body.classList.add('dark-mode')
	lightBtn.classList.remove('hidden')
	darkBtn.classList.add('hidden')
}
if(localStorage.getItem('list')){
	mode()
}

darkBtn.addEventListener('click', (e)=>{
	e.stopPropagation()
	mode()
	localStorage.setItem('list', 'dark-mode')
})
lightBtn.addEventListener('click', (e)=>{
	e.stopPropagation()
	darkBtn.classList.remove('hidden')
	lightBtn.classList.add('hidden')
	body.classList.remove('dark-mode')
	localStorage.clear();
})