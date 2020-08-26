let turn = 0;
let gameBoard = new Array(9).fill(0);
const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");

  let player1 = input1.value;
  let player2 = input2.value;

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
  if (el.innerHTML !== "") {
    return;
  }
  if (turn % 2 === 0) {
    el.innerHTML = "x";
    turn++;
  } else {
    el.innerHTML = "o";
    turn++;
  }
  if (turn === 9) {
    draw();
    return;
  }
};

const draw = () => {
  console.log("Match draw ho gaya.");
};

const isEmpty = (value) => !value || !value.trim();

console.log(gameBoard);
