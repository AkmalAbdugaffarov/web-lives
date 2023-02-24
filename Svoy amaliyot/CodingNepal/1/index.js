const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPalatteBoxes = 12;

const generatePalatte = () => {
  container.innerHTML = "";
  for (i = 0; i < maxPalatteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
				<div class="rect-box" style = 'background: ${randomHex}'></div>
				<span class="hex-value">${randomHex}</span>
		`;
    color.addEventListener("click", () => copiyColor(color, randomHex));
    container.appendChild(color);
  }
};
generatePalatte();
const copiyColor = (elem, hexVal) => {
   const colorElement = document.querySelector(".hex-value");
	 navigator.clipboard.writeText(hexVal).then(()=>{
		colorElement.innerText = "Copied";
		setTimeout(()=> colorElement.innerText = hexVal, 1000)
	 }).catch(()=> alert("Failed to copy the color code!"))
};

refreshBtn.addEventListener("click", generatePalatte);
