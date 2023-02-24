const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPalatteBoxes = 12;
function colorRandom(randomHex) {
	container.innerHTML = '';
	for(i = 0; i < maxPalatteBoxes; i++){
		randomHex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, Math.floor(Math.random() * 10))
		randomHex = '#'+randomHex
		container.innerHTML+=`
		<li class="color">
			<div class="rect-box" style = 'background:${randomHex}'></div>
			<span class="hex-value">${randomHex}</span>
		</li>
		`
	}
}
refreshBtn.addEventListener('click', (e)=>{
	e.stopPropagation()
	colorRandom()
})

document.addEventListener('dblclick', (e)=>{
	e.stopPropagation()
	if(e.toElement.className == 'hex-value'){
		navigator.clipboard.writeText(e.target.innerHTML).then((a)=>{
			a = e.target.innerHTML;
			e.target.innerHTML = 'Copied';
			setTimeout(()=>{
				e.target.innerHTML = a
			}, 1000)
		}).catch(()=>{"Not working"})
	}
})