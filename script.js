var activePlayer = 0;
var markers = ["X", "O"];
var c1, c2, c3;

var board = document.querySelectorAll(".square");
var informations = document.querySelector(".informations");

var logBoardIndex = function(boardIndex) {
    console.log('boardIndex:', boardIndex);
  }

boardInit();

function play() {
        board.forEach(function test (square, index) {
                board[index].addEventListener("click", function playing() {
                    logBoardIndex(index);
                    if(activePlayer == 0 || activePlayer == 1) {
                        // if(board[index].value == 0 && board[index].value != markers[activePlayer]) {

                        if(board[index].value != markers[activePlayer]) {
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
    for(i = 0; i < board.length; i++) {
        board[i].value = 0;
        board[i].textContent = "";
        console.log("tablica" + board[i].value);
    }
}

function blockBoard(board) {
    board[5].removeEventListener("click", playing, false);
    console.log("usuwam onclicka na 5 elemencie ");
}

function changePlayer() {
    // Changing player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById("player-x").classList.toggle("active-player");
    document.getElementById("player-o").classList.toggle("active-player");

    informations.textContent = "IT'S PLAYER'S " + markers[activePlayer] +" TURN.";
}
function blockBoard() {
    document.querySelector(".board").style.pointerEvents = "none";
}

function selectWinnerCells(c1, c2, c3) {
    c1.classList.add("win");
    c2.classList.add("win");
    c3.classList.add("win");
    blockBoard();

}
function getWinner() {

    //Checking win possibilities

    if(board[0].innerHTML !== "" && board[0].innerHTML === board[1].innerHTML && board[0].innerHTML === board[2].innerHTML) {
        console.log("win");
        selectWinnerCells(board[0], board[1], board[2]);
    }
    else if(board[3].innerHTML !== "" && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
        console.log("win");
        selectWinnerCells(board[3], board[4], board[5]);
    }
    else if(board[6].innerHTML !== "" && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
        console.log("win");
        selectWinnerCells(board[6], board[7], board[8]);
    }
    else if(board[0].innerHTML !== "" && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
        console.log("win");
        selectWinnerCells(board[0], board[3], board[6]);
    }
    else if(board[1].innerHTML !== "" && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
        console.log("win");
        selectWinnerCells(board[1], board[4], board[7]);
    }
    else if(board[2].innerHTML !== "" && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
        console.log("win");
        selectWinnerCells(board[2], board[5], board[8]);
    }
    else if(board[0].innerHTML !== "" && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
        console.log("win");
        selectWinnerCells(board[0], board[4], board[8]);
    }
    else if(board[2].innerHTML !== "" && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
        console.log("win");
        selectWinnerCells(board[2], board[4], board[6]);
    }

}


console.log(board);
// getWinner();