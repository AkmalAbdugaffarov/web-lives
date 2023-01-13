const hisobot1 = document.getElementById("score--0");
const hisobot2 = document.getElementById("score--1");
const active = document.querySelector('.player--active')
const toshAchkosi1 = document.getElementById("current--0");
const toshAchkosi2 = document.getElementById("current--1");
const player1 = document.getElementById("name--0");
const player2 = document.getElementById("name--1");
let btnArray = document.querySelectorAll(".btn");
let [newGame, rollDice, hold] = btnArray;
let img = document.querySelector(".dice").getAttribute("src");
let diceImg = document.querySelector(".dice");
let tosh;
let shot;
/****************************************Buttons***/
rollDice.addEventListener("click", (e) => {
	e.stopPropagation()
	if (img.includes("1")) {
		tosh = false;
	}
	let son;
  let ixtiyoriy = Math.ceil(Math.random() * 10);
  shot = ixtiyoriy == 7 ? ixtiyoriy = 1 : ixtiyoriy > 6 ? ixtiyoriy - 4: ixtiyoriy;
  diceImg.removeAttribute('src')
  diceImg.setAttribute('src', `dice-${shot}.png`)
	if(player1.parentElement == active){
		son = +toshAchkosi1.innerHTML + shot;
		toshAchkosi1.textContent = son;
	}else{
		son = +toshAchkosi2.innerHTML + shot;
		toshAchkosi2.textContent = son;
	}//if(player2.parentElement == active)
});
hold.addEventListener("click", (e) => {
	e.stopPropagation();
});
newGame.addEventListener("click", (e) => {
	e.stopPropagation()
});