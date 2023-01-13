let array = ['Samandar', 'Akmal', 'Ozoda']
let list = document.querySelector('.list__item');
array.forEach(function(item){
	list.innerHTML += `<li>${item}</li>`
})