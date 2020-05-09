//An array for the game options
const options = ["Lapis", "Papyrus", "Scalpellus"];

//Objects to store information on the computer
const player = {
  choice: null,
};

//Objects to store information on the player
const computer = {
  choice: null,
};

//function: computer makes a random choice
function computerChooses(array) {
  const randomIndex = Math.floor(Math.random() * 3);
  return array[randomIndex];
}

//function: shows who win who lose
function renderResult(text1, text2) {
  const winnerPara = document.createElement("p");
  // winnerPara.classList.add("winnerPara", "faded-out");
  winnerPara.classList.add("winnerPara");
  // winnerPara.setAttribute("class", "winnerPara");
  winnerPara.innerHTML = text1;
  winnerPara.style.fontSize = "xx-large";
  winnerPara.style.fontWeight = "bold";
  winnerPara.style.color = "purple";
  requestAnimationFrame(() => {
    winnerPara.classList.add("faded-in");
  });

  const resultPara = document.createElement("p");
  resultPara.setAttribute("class", "resultPara");
  // resultPara.classList.add("resultPara");
  resultPara.innerHTML = text2;
  resultPara.style.fontWeight = "normal";
  resultPara.style.color = "black";
  requestAnimationFrame(() => {
    // winnerPara.classList.remove("faded-out");
    resultPara.classList.add("faded-in");
  });

  const winnerIsPara = document.querySelector("#winnerIs");
  winnerIsPara.insertAdjacentElement("afterend", winnerPara);
  winnerPara.insertAdjacentElement("afterend", resultPara);

  winnerPara.style.transition = "all 2s";
  resultPara.style.transition = "all 2s";
}

//function: disable buttons for LPS, enable for 'Restart Game'
function disableButtonsLPS() {
  document.getElementById(options[0]).disabled = true;
  document.getElementById(options[1]).disabled = true;
  document.getElementById(options[2]).disabled = true;
  document.getElementById("restart").disabled = false;
}

//function: enable buttons for LPS, disable for 'Restart Game'
function enableButtonsLPS() {
  document.getElementById(options[0]).disabled = false;
  document.getElementById(options[1]).disabled = false;
  document.getElementById(options[2]).disabled = false;
  document.getElementById("restart").disabled = true;
}

//function: compare choices of computer and player
function compareChoices(computer, player, array) {
  if (computer === player) {
    renderResult(
      "Computer & You!",
      "It is a tie. Both computer and player chose " + computer + "."
    );
  } else if (computer === array[0]) {
    if (player === array[1]) {
      renderResult(
        "You!",
        "The computer chose " +
          computer +
          " and the player chose " +
          player +
          "."
      );
    } else {
      renderResult(
        "Computer!",
        "The computer chose " +
          computer +
          " and the player chose " +
          player +
          "."
      );
    }
  } else if (computer === array[1]) {
    if (player === array[0]) {
      renderResult(
        "Computer!",
        "The computer chose " +
          computer +
          " and the player chose " +
          player +
          "."
      );
    } else {
      renderResult(
        "You!",
        "The computer chose " +
          computer +
          " and the player chose " +
          player +
          "."
      );
    }
  } else if (computer === array[2]) {
    if (player === array[0]) {
      renderResult(
        "You!",
        "The computer chose " +
          computer +
          " and the player chose " +
          player +
          "."
      );
    } else {
      renderResult(
        "Computer!",
        "The computer chose " +
          computer +
          " and the player chose " +
          player +
          "."
      );
    }
  }
}

function resetGame() {
  computer.choice = computerChooses(options);
  player.choice = null;
  document.getElementById("restart").disabled = true;
}

//======================================================================

//reset value of computer and player
resetGame();

//get the player's choice
//if click "Lapis"
document.getElementById(options[0]).addEventListener("click", function (e) {
  player.choice = e.target.innerHTML;
  //compare them two
  compareChoices(computer.choice, player.choice, options);
  //disable buttons for LSP
  disableButtonsLPS();
  console.log("Computer: " + computer.choice + "; Player: " + player.choice);
});

//if click "Papyrus"
document.getElementById(options[1]).addEventListener("click", function (e) {
  player.choice = e.target.innerHTML;
  //compare them two
  compareChoices(computer.choice, player.choice, options);
  //disable buttons for LSP
  disableButtonsLPS();
  console.log("Computer: " + computer.choice + "; Player: " + player.choice);
});

//if click "Scalpellus"
document.getElementById(options[2]).addEventListener("click", function (e) {
  player.choice = e.target.innerHTML;
  //compare them two
  compareChoices(computer.choice, player.choice, options);
  //disable buttons for LSP
  disableButtonsLPS();
  console.log("Computer: " + computer.choice + "; Player: " + player.choice);
});

//if click "Restart Game"
document.getElementById("restart").addEventListener("click", function () {
  document.querySelector(".winnerPara").remove();
  document.querySelector(".resultPara").remove();
  enableButtonsLPS();
  resetGame();
  console.log("Computer: " + computer.choice + "; Player: " + player.choice);
});
