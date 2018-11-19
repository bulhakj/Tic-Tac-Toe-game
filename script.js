var activePlayer;
var markers = ["X", "O"];
var c1, c2, c3;
var button;
var winnerCell1, winnerCell2, winnerCell3;

activePlayer = 0;

var wholeBoard = document.querySelector(".board");
var board = document.querySelectorAll(".square");
var informations = document.querySelector(".informations");

var player0 = document.getElementById("player-0");
var player1 = document.getElementById("player-1");

var logBoardIndex = function (boardIndex) {
    console.log('boardIndex:', boardIndex);
}

boardInit();

function play() {
    board.forEach(function test(square, index) {
        board[index].addEventListener("click", function playing() {
            logBoardIndex(index);
            // if (activePlayer == 0 || activePlayer == 1) {
                if(board[index].value == 0 && board[index].value != markers[activePlayer]) {

                if (board[index].value != markers[activePlayer]) {
                    board[index].value = markers[activePlayer];
                    board[index].textContent = markers[activePlayer];
                    getWinner();
                    changePlayer();
                }
            }
        })
    })
}

play();

function boardInit() {
    wholeBoard.style.pointerEvents = "all";
    for (i = 0; i < board.length; i++) {
        board[i].value = 0;
        board[i].textContent = "";
        console.log("tablica" + board[i].value);
    }

    return true;
}

function changePlayer() {
    // Changing player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    player0.classList.toggle("active-player");
    player1.classList.toggle("active-player");

    viewActivePlayerText();

    return player0, player1;
}

function viewActivePlayerText() {

    informations.textContent = "PLAYER " + markers[activePlayer] + " TURN.";

}

function createNewGameBtn() {

    var winner = document.getElementById("player-" + activePlayer);
    informations.classList.add("new-game-button");
    console.log("active przed evalem" + activePlayer);
    winner.textContent = "WINNER!";
    console.log(activePlayer);
    listenerNewGameBtn();
    console.log("EVAL");
    eval(informations.innerHTML = "NEW GAME");

}


function listenerNewGameBtn() {

    informations.onclick = clearNames;

}


function clearNames() {

    player0.classList.remove("active-player");
    player1.classList.remove("active-player");
    player0.textContent = "PLAYER X";
    player1.textContent = "PlAYER O";
    informations.classList.remove("new-game-button");
    activePlayer = 0;
    player0.classList.add("active-player");
    boardInit();
    deleteWinClass();
    play();
}

function deleteWinClass() {

    for (i = 0; i < board.length; i++) {

        board[i].classList.remove("win");
    }
}

function blockBoard() {
    wholeBoard.style.pointerEvents = "none";

}

function selectWinnerCells(c1, c2, c3) {
    c1.classList.add("win");
    c2.classList.add("win");
    c3.classList.add("win");
    console.log("winnercell1 = " + winnerCell1);
    blockBoard();
    createNewGameBtn();

}
function getWinner() {

    //Checking win possibilities

    if (board[0].innerHTML !== "" && board[0].innerHTML === board[1].innerHTML && board[0].innerHTML === board[2].innerHTML) {
        console.log("win");
        selectWinnerCells(board[0], board[1], board[2]);
    }
    else if (board[3].innerHTML !== "" && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
        console.log("win");
        selectWinnerCells(board[3], board[4], board[5]);
    }
    else if (board[6].innerHTML !== "" && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
        console.log("win");
        selectWinnerCells(board[6], board[7], board[8]);
    }
    else if (board[0].innerHTML !== "" && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
        console.log("win");
        selectWinnerCells(board[0], board[3], board[6]);
    }
    else if (board[1].innerHTML !== "" && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
        console.log("win");
        selectWinnerCells(board[1], board[4], board[7]);
    }
    else if (board[2].innerHTML !== "" && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
        console.log("win");
        selectWinnerCells(board[2], board[5], board[8]);
    }
    else if (board[0].innerHTML !== "" && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
        console.log("win");
        selectWinnerCells(board[0], board[4], board[8]);
    }
    else if (board[2].innerHTML !== "" && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
        console.log("win");
        selectWinnerCells(board[2], board[4], board[6]);
    }

}


console.log(board);
// getWinner();