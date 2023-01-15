let skore1 = document.getElementById("score--0");
let skore2 = document.getElementById("score--1");
let umumiyShot = [skore1, skore2];

const section = document.querySelectorAll(".player");
let btn = document.querySelectorAll(".btn");
let [NewGame, RollDice, Hold] = btn;
let shot;
let imgTosh = document.querySelector(".dice");
let current1 = document.getElementById("current--0");
let current2 = document.getElementById("current--1");
let currentArray = [current1, current2];

///////////////////////////////PLAYER-ACTIVE
function active() {
  section.forEach((item) => {
    item.classList.toggle("player--active");
  });
}
/////////////////////////////TOSH
function tosh() {
  hisob = Math.ceil(Math.random() * 10);
  shot = hisob == 1 ? (hisob = false) : hisob > 6 ? hisob - 4 : hisob;
  if (shot == false) {
    imgTosh.removeAttribute("src");
    imgTosh.setAttribute("src", `dice-1.png`);
    active();
  } else {
    imgTosh.removeAttribute("src");
    imgTosh.setAttribute("src", `dice-${shot}.png`);
  }
  return shot;
}
///////////////ACTIVE CHILD
function activeChild() {
  section.forEach((item, ind) => {
    if (item.getAttribute("class").includes("player--active")) {
      index = ind;
    }
  });
  return index;
}
function ozgarish() {
  imgTosh.classList.remove("hidden");
  tosh();
  ozgaruvchan = document.getElementById(`current--${activeChild()}`);
  if (shot == false) {
    currentArray.forEach((item) => {
      item.innerHTML = "0";
    });
  }
  calc = +ozgaruvchan.textContent;
  ozgaruvchan.innerHTML = calc += shot;
}

//////////////////////////////////BUTTONS
RollDice.addEventListener("click", (e) => {
  e.stopPropagation();
  ozgarish();
  // imgTosh.classList.remove('hidden')
  // tosh()
  //   ozgaruvchan = document.getElementById(`current--${activeChild()}`)
  // 	if(shot == false){
  // 		currentArray.forEach((item)=>{
  // 			item.innerHTML = '0';
  // 		})
  // 	}
  // 	calc = +ozgaruvchan.textContent;
  // 	ozgaruvchan.innerHTML=(calc+=shot);
  // }
  // section.forEach((item)=>{
  // 	item.getAttribute('class').
  // })
});

Hold.addEventListener("click", (e) => {
  e.stopPropagation();
  umumiyShot.forEach((item) => {
    son = +item.nextElementSibling.children[1].innerHTML;
    son2 = +item.innerHTML;
    item.textContent = son + son2;
    if (item.textContent >= 100) {
      item.parentElement.classList.add("player--winner");
      RollDice.setAttribute("disabled", "disabled");
      Hold.setAttribute("disabled", "disabled");
    }
  });
  currentArray.forEach((item) => {
    item.innerHTML = 0;
  });
  active();
});

NewGame.addEventListener("click", (e) => {
  e.stopPropagation();

  imgTosh.classList.add("hidden");
  currentArray.forEach((item) => {
    item.innerHTML = "0";
  });

  RollDice.removeAttribute("disabled");
  Hold.removeAttribute("disabled");
  umumiyShot.forEach((item) => {
    item.innerHTML = 0;
    item.parentElement.classList.remove("player--winner");
  });

  if (+current1.innerHTML >= 100) {
    skore1.parentElement.classList.add("player--winner");
    RollDice.setAttribute("disabled", "disabled");
    Hold.setAttribute("disabled", "disabled");
  }
  if (current2.innerHTML >= 100) {
    skore2.parentElement.classList.add("player--winner");
    RollDice.setAttribute("disabled", "disabled");
    Hold.setAttribute("disabled", "disabled");
  }
});

if (skore1.innerHTML >= 100) {
  skore1.parentElement.classList.add("player--winner");
  RollDice.setAttribute("disabled", "disabled");
  Hold.setAttribute("disabled", "disabled");
} else if (skore2.innerHTML >= 100) {
  skore2.parentElement.classList.add("player--winner");
  RollDice.setAttribute("disabled", "disabled");
  Hold.setAttribute("disabled", "disabled");
}
