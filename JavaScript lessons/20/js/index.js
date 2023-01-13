let grad = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let btn = document.getElementById('btn');
let body = document.getElementById('body');
let div = document.getElementById('col');
let divArray = Array.from(div.children);
// btn.addEventListener('click', ()=>{
// 	for(i=0 ; i < divArray.length; i++){
// 		calcSumm = '#';
// 		for (let i = 0; i < 6; i++) {
// 			let number = Math.round(Math.random()*10);
// 			let num = Math.round(Math.random()*10);
// 			let calc = number + num;
// 			if(calc>=16){
// 				calcSumm+=grad[calc-5];
// 			}else{
// 				calcSumm+=grad[calc];
// 			}
// 		}
// 		divArray[i].innerHTML = calcSumm;
// 	}
// 	body.setAttribute('style', `background: linear-gradient(60deg, ${divArray[0].innerHTML},${divArray[1].innerHTML},${divArray[2].innerHTML})`)
// })
let getColor = function(){
	let sonlar ;
	let color = '#';
	for(i = 0; i < 6; i ++){
		sonlar = Math.trunc(Math.random()*grad.length);
		color+=grad[sonlar];
	}
	return color;
}
let setColor = function(){
	let gradus = Math.trunc(Math.random()*90)
	divArray[0].innerHTML = getColor();
	divArray[1].innerHTML = getColor();
	divArray[2].innerHTML = getColor();
	divArray[3].innerHTML = `${gradus}deg`;
	body.setAttribute('style', `background: linear-gradient( ${gradus}deg, ${divArray[0].innerHTML}, ${divArray[1].innerHTML}, ${divArray[2].innerHTML})`);
}
btn.addEventListener('click', setColor);