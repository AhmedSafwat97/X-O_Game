let tilte = document.querySelector(".title");
let turn = "X";
let square = [];

function end(num1, num2, num3) {
  tilte.innerHTML = `${square[num1]} Winner`;
  document.getElementById("item" + num1).style.background = "black";
  document.getElementById("item" + num2).style.background = "black";
  document.getElementById("item" + num3).style.background = "black";
  setInterval(function () {
    tilte.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }
  if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
    end(1, 2, 3);
  } else if (
    square[4] == square[5] &&
    square[5] == square[6] &&
    square[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    square[7] == square[8] &&
    square[8] == square[9] &&
    square[7] != ""
  ) {
    end(7, 8, 9);
  } else if (
    square[1] == square[4] &&
    square[4] == square[7] &&
    square[1] != ""
  ) {
    end(1, 4, 7);
  } else if (
    square[2] == square[5] &&
    square[5] == square[8] &&
    square[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    square[3] == square[6] &&
    square[6] == square[9] &&
    square[3] != ""
  ) {
    end(3, 6, 9);
  } else if (
    square[1] == square[5] &&
    square[5] == square[9] &&
    square[9] != ""
  ) {
    end(1, 5, 9);
  } else if (
    square[3] == square[5] &&
    square[5] == square[7] &&
    square[3] != ""
  ) {
    end(3, 5, 7);
  }
}

function game(id) {
  const element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    tilte.innerHTML = "o Turn";
    turn = "O";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    tilte.innerHTML = "X Turn";
    turn = "X";
  }
  winner();
}

const btn = Document.querySelector("button");

btn.addEventListener("click", (eo) => {
  setTimeout(function () {
    window.reload();
  }, 1000);
});
