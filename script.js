// Create GAME BOARD
const gameBoard = () => {
    let gameStatus = true;
    let currentSymb = 'O';
    let gameField = ['','','',
                    '','','',
                    '','','',];

    // Creating the board
    for (let i=0; i<gameField.length; i++) {
        
        createSquares(i).onclick = function() {

            let restartBtn = document.getElementById("restart-btn");
            let winContainer = document.getElementById("win-container");
            let winMessage = document.getElementById("win-message");

            if (gameField[i]==='' & currentSymb==='O' & gameStatus) {
                const clickedSquare = document.getElementById(`${i}p`);
                const xSymb = document.getElementById(`${i}`);
                gameField[i] = "X";
                clickedSquare.innerText = "X";
                currentSymb = "X";
                xSymb.style.background = "#FF674D";
                logMessage(gameField, gameStatus, winMessage, winContainer, currentSymb);

            } else if (gameField[i]==='' & currentSymb==='X' & gameStatus) {
                const clickedSquare = document.getElementById(`${i}p`);
                const ySymb = document.getElementById(`${i}`);
                gameField[i] = "O";
                clickedSquare.innerText = "O";
                currentSymb = "O"; 
                ySymb.style.background = "#CDC7E5";
                logMessage(gameField, gameStatus, winMessage, winContainer, currentSymb);
            }
            restartBtn.onclick = function() {
                container.innerHTML="";
                winContainer.style.display = "none";
                gameBoard();
            }
        }
    }
}


// Log the Winning/Draw message
function logMessage(gameField, gameStatus, winMessage, winContainer, currentSymb) {
    if (checkIfWin(gameField)) {
        gameStatus = false;
        winMessage.innerText = `${currentSymb} has won`;
        winContainer.style.display = "flex";
    } else if (checkIfWin(gameField)===false){
        gameStatus = false;
        winMessage.innerText = `It's a draw`;
        winContainer.style.display = "flex";
    }
}

// Creating SQUARES for the board
function createSquares(i){
    const container = document.getElementById("container");
    const div = document.createElement("div");
    let p = document.createElement("p");
    p.id = `${i}p`;
    div.appendChild(p);
    div.id = i;
    div.classList.add("square");
    container.appendChild(div);
    return div
}

// Winning condition
function checkIfWin(gF){
    if (       
        gF[0]!=='' & gF[0]===gF[1] & gF[1]===gF[2] ||
        gF[3]!=='' & gF[3]===gF[4] & gF[4]===gF[5] ||
        gF[6]!=='' & gF[6]===gF[7] & gF[7]===gF[8] ||
        gF[0]!=='' & gF[0]===gF[3] & gF[3]===gF[6] ||
        gF[1]!=='' & gF[1]===gF[4] & gF[4]===gF[7] ||
        gF[2]!=='' & gF[2]===gF[5] & gF[5]===gF[8] ||
        gF[0]!=='' & gF[0]===gF[4] & gF[4]===gF[8] ||
        gF[2]!=='' & gF[2]===gF[4] & gF[4]===gF[6] 
    ) {
            return true
        } else if (
            gF[0]!=='' & gF[1]!=='' & gF[2]!=='' & gF[3]!=='' & 
            gF[4]!=='' & gF[5]!=='' & gF[6]!=='' & gF[7]!=='' & gF[8]!==''
        ) {
            return false
        }
}



// Initiate the game
gameBoard();


