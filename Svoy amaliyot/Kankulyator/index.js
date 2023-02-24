const calcFon = document.getElementById("calc__fon");
const Numbers = document.querySelectorAll(".btn__number");
const clear = document.getElementById("clear");
let idName = document.querySelectorAll(".amal");
const calc = document.getElementById("calc");
let a;
let b;
let qiymat = true;



function numb() {
  Array.from(Numbers);
  Numbers.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      calcFon.innerHTML += item.textContent;
			qiymat = true;
    });
  });
  return +calcFon.textContent;
}
numb();


if(qiymat){
	a = '';
	b = '';
	function calcing() {
		calc.addEventListener("click", () => {
			b = Number(a) + Number(calcFon.textContent);
			calcFon.textContent = b;
		});
	}
}


function tozza() {
  clear.addEventListener("click", () => {
    calcFon.innerHTML = "";
		a = 0;
		b = 0;
		qiymat = false;
  });
}
tozza();



function hisob() {
idName.forEach((item) => {
  item.addEventListener("click", () => {
    switch (item.textContent) {
      case "+":
        a = +calcFon.textContent;
        calcFon.innerHTML = "";
        calcing()
        break;
      case "-":
        a = +calcFon.textContent;
        calcFon.innerHTML = "";
				calcing()
        break;
      case "/":
        a = +calcFon.textContent;
        calcFon.innerHTML = "";
        calcing()
        break;
				case 'X':
					a = +calcFon.textContent;
					calcFon.innerHTML = '';
					calcing()
					break;
      default:
        break;
    }
  });
});}



if(qiymat){
	hisob();
}
