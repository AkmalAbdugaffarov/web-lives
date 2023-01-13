// let text = document.querySelectorAll('p');
// text.forEach((item) => {
// 	item.addEventListener( 'click', ()=>{
// 		item.remove();
// 	})
// });
 let button = document.querySelector('button');
 let div = document.querySelector('.wrap');
//   button.addEventListener( 'click', (list)=>{
//   list = document.createElement('p');
// 	list.innerHTML = 'Salom vanihoyat men chiqdim eplolmadingmi chummo, hamma hnarsaga tez hulosa chiqaradigan lox';
// 	div.prepend(list);
// 	console.log(div.prepend(list));
// }
button.addEventListener('click', (e)=>{
	let list = document.createElement('h6');
	list.classList.add('app')
	list.textContent = 'Samandari';
	div.prepend(list);
	e.stopPropagation();
});
// let divTwo = Array.from(div.children);
// console.log(divTwo);
// divTwo.forEach( (link)=>{
// 	link.addEventListener( 'click',(e)=>{
// 		e.target.remove();
// 		e.target.tagName('p').remove();
// 	})
// });
div.addEventListener('click',(e)=>{
	if(e.target.localName	== "p"){
		e.target.remove();
	}
	e.stopPropagation();
})