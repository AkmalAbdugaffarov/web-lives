const input = document.getElementById('input')
const output = document.getElementById('output')
const text = document.querySelectorAll('p')

function filter() {
	for(i = 0; i < text.length; i++){
		let rep = new RegExp(input.value)
			calc = text[i].innerHTML.replace(rep, output.value)
			text[i].innerHTML = calc
	}
}
function fill() {
	let res = /^[А-Яа-я0-9]$/
	let sesa = new RegExp(res)
	letter = input.value.replace(sesa, '')
	input.value = letter
	input.setAttribute("placeholder", "Narmalniy yoz")
}