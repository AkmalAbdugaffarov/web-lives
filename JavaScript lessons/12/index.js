let parag = document.querySelectorAll('p');
parag.forEach((item) => {
	if(item.innerHTML.includes('success')){
		item.classList.add('success');
	}else if(item.textContent.includes('error')){
		item.classList.add('error');
	}
})
console.log(parag);
document.querySelector('h1').setAttribute('class', 'margin');
document.querySelector('h3').setAttribute('class', 'margin');
let text = document.querySelectorAll('.list');
text.forEach((item)=>{
	if(item.textContent.includes('dark')){
		item.setAttribute('class', 'dark');
	}else if(item.textContent.includes('red')){
		item.setAttribute('class', 'red');
	}else if(item.textContent.includes('warning')){
		item.setAttribute('class', 'warning');
	}else{
		item.setAttribute('class', 'sit');
	}
})