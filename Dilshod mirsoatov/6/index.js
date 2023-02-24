const ismInput = document.getElementById("ism");
const famInput = document.getElementById("fam");
const sharfInput = document.getElementById("sharf");
const button = document.getElementById("btn");
const table = document.getElementById("tbody");

let arrayIsm = [];
let arrayFam = [];
let arraySharf = [];

button.addEventListener("click", () => {
  ism =
    ismInput.value.slice(0, 1).toUpperCase() +
    ismInput.value.slice(1).toLowerCase();
  ism = ism.trim();
  fam =
    famInput.value.slice(0, 1).toUpperCase() +
    famInput.value.slice(1).toLowerCase();
  fam = fam.trim();
  sharf =
    sharfInput.value.slice(0, 1).toUpperCase() +
    sharfInput.value.slice(1).toLowerCase();
  sharf = sharf.trim();
  if (ism !== "" && fam !== "" && sharf !== "") {
    arrayIsm.push(ism);
    arrayFam.push(fam);
    arraySharf.push(sharf);
  }

  if (
    ismInput.value !== "" &&
    famInput.value !== "" &&
    sharfInput.value !== ""
  ) {
    table.innerHTML = "";
    for (i = 0; i < arrayIsm.length; i++) {
      table.innerHTML += `
			<tr>
			<td>${i + 1}</td>
			<td>${arrayIsm[i]}</td>
			<td>${arrayFam[i]}</td>
			<td>${arraySharf[i]}</td>
			</tr>
			`;
    }
  }
  ismInput.value = "";
  famInput.value = "";
  sharfInput.value = "";
});

function mainPay(params) {
  let inputSum = document.getElementById("kreditSum").value;
  let inputPay = document.getElementById("kreditPay").value;
	let inputFoiz = document.getElementById("kreditFoiz").value;


	let x = parseInt(inputSum) - parseInt(inputPay);
	let foizSum = (x * parseInt(inputFoiz))/100;

	document.getElementById('resultSuma').value = x;
	document.getElementById('resultPay').value = foizSum;
}
