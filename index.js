let turn = 0;
let d = document.getElementById("dimension");
let gameBoard = [];
for (let i = 3; i <= 10; i++) {
  let el = document.createElement("option");

  el.value = i;
  el.id = i;
  el.textContent = i;
  d.appendChild(el);
}

const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");

  let player1 = input1.value;
  let player2 = input2.value;
  let message = document.getElementById("message");

  if (isEmpty(player1) || isEmpty(player2)) {
    alert("Player name is required");
    return;
  }

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);

  let game = document.getElementById("game-container");
  game.classList.remove("hide");
};

const handleclick = (el) => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");

  let player1 = input1.value;
  let player2 = input2.value;
  let message = document.getElementById("message");
  if (el.innerHTML !== "" || gameOver) {
    return;
  }
  if (turn % 2 === 0) {
    el.innerHTML = "x";
    gameBoard[el.id] = 1;
    turn++;
  } else {
    el.innerHTML = "o";
    gameBoard[el.id] = 2;
    turn++;
  }
  if (checkWin()) {
    if ((turn - 1) % 2 === 0) {
      message.innerHTML = player1 + " won!!!.";
      gameOver = true;
    } else {
      message.innerHTML = player2 + " won!!!.";
      gameOver = true;
    }
    return;
  } else if (draw()) {
    message.innerHTML = "match draw.";
    return;
  }
  console.log(gameBoard);
};

const draw = () => {
  if (turn === 9) {
    return true;
  }
};

const checkWin = () => {
  if (gameBoard[0] === gameBoard[3] && gameBoard[6] === gameBoard[3]) {
    return true;
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[7] === gameBoard[1]) {
    return true;
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[8] === gameBoard[5]) {
    return true;
  } else if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    return true;
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[5] === gameBoard[4]) {
    return true;
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[8] === gameBoard[7]) {
    return true;
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[8] === gameBoard[4]) {
    return true;
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[6] === gameBoard[4]) {
    return true;
  }
};

const isEmpty = (value) => !value || !value.trim();

console.log(gameBoard);
