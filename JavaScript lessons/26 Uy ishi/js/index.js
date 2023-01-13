let select = document.getElementById('calcSumm');
let playerShot1 = document.getElementById('shot__1');
let playerShot2 = document.getElementById('shot__2');
let btn1 = document.getElementById('player1')
let btn2 = document.getElementById('player2')
let reset = document.getElementById('reset')

select.addEventListener('click', ()=>{
	select.innerHTML == select.value;
	console.log(select.value)
});

btn1.addEventListener('click', (e)=>{
	if(playerShot1.innerHTML == select.value || playerShot2.innerHTML == select.value){playerShot2.setAttribute('style', 'color:red') 
	playerShot1.setAttribute('style', 'color:blue')
	btn2.setAttribute('disabled', '')
	btn1.setAttribute('disabled', '')
}else{
	playerShot1.innerHTML++;
	select.setAttribute('disabled', '')
	e.stopPropagation()}
})
btn2.addEventListener('click', (e)=>{
	if(playerShot2.innerHTML == select.value || playerShot1.innerHTML == select.value){
		playerShot1.setAttribute('style', 'color:red')
		playerShot2.setAttribute('style', 'color:blue')
		btn2.setAttribute('disabled', '')
		btn1.setAttribute('disabled', '')
}else{
	playerShot2.innerHTML++
	select.setAttribute('disabled', '')
}
	e.stopPropagation();
})

reset.addEventListener('click', ()=>{
	playerShot1.innerHTML = 0;
	playerShot2.innerHTML = 0;
	playerShot2.setAttribute('style', 'color:inherit')
	playerShot1.setAttribute('style', 'color:inherit')
	btn1.removeAttribute('disabled')
	btn2.removeAttribute('disabled')
	select.removeAttribute('disabled', '')
})