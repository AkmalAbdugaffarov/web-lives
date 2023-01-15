const player1Score = document.getElementById("score--0");
const player1Current = document.getElementById("current--0");
const player2Score = document.getElementById("score--1");
const player2Current = document.getElementById("current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
const diceImg = document.querySelector(".dice");

let currentPlayer = player1;
let currentScore = player1Current;
let currentPlayerScore = player1Score;

const switchPlayer = () => {
  currentPlayer.classList.toggle("player--active");
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  currentPlayer.classList.toggle("player--active");
  currentScore = currentScore === player1Current ? player2Current : player1Current;
  currentPlayerScore = currentPlayerScore === player1Score ? player2Score : player1Score;
}

const rollDice = () => {
  const diceNum = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${diceNum}.png`;
  if (diceNum !== 1) {
    currentScore.textContent = Number(currentScore.textContent) + diceNum;
  } else {
    currentScore.textContent = 0;
    switchPlayer();
  }
}

const hold = () => {
  currentPlayerScore.textContent = Number(currentPlayerScore.textContent) + Number(currentScore.textContent);
  if (Number(currentPlayerScore.textContent) >= 20) {
    alert(`Player ${currentPlayer.classList[1].slice(-1)} wins!`);
    newGame();
  } else {
    currentScore.textContent = 0;
    switchPlayer();
  }
}

const newGame = () => {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  currentPlayer = player1;
  currentScore = player1Current;
  currentPlayerScore = player1Score;
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
}

rollDiceBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", hold);
newGameBtn.addEventListener("click", newGame);