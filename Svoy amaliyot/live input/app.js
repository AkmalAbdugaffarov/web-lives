let input  = document.getElementById('input')
let text = document.getElementById('text')

function focus() {
	input.addEventListener('focus', (e)=>{
		console.log(e.target)
		text.classList.add('hover')
	})
}
focus()
document.addEventListener('click', ()=>{
})