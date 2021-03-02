// Create GAME BOARD
const gameBoard = () => {
    let currentSymb = 'O';
    let gameField = ['','','',
                    '','','',
                    '','','',];

    for (let i=0; i<gameField.length; i++) {
        createSquares(i).onclick = function() {
            console.log(`${i} was clicked`);
            if (gameField[i]==='' & currentSymb==='O') {
                const clickedSquare = document.getElementById(`${i}p`);
                const xSymb = document.getElementById(`${i}`);
                gameField[i] = "X";
                console.log(gameField);
                clickedSquare.innerText = "X";
                currentSymb = "X";
                xSymb.style.background = "#FF674D";
                if (gameField[0]===currentSymb & gameField[0]===gameField[1]===gameField[2] ||
                    gameField[3]===currentSymb & gameField[3]===gameField[4]===gameField[5] ||
                    gameField[6]===currentSymb & gameField[6]===gameField[7]===gameField[8] ||
                    gameField[0]===currentSymb & gameField[0]===gameField[3]===gameField[6] ||
                    gameField[1]===currentSymb & gameField[1]===gameField[4]===gameField[7] ||
                    gameField[2]===currentSymb & gameField[2]===gameField[5]===gameField[8] ||
                    gameField[0]===currentSymb & gameField[0]===gameField[4]===gameField[8] ||
                    gameField[2]===currentSymb & gameField[2]===gameField[4]===gameField[6]) {
                        console.log(`${currentSymb} did win!`);
                    }
            } else if (gameField[i]==='' & currentSymb==='X') {
                const clickedSquare = document.getElementById(`${i}p`);
                const ySymb = document.getElementById(`${i}`);
                gameField[i] = "O";
                console.log(gameField);
                clickedSquare.innerText = "O";
                currentSymb = "O"; 
                ySymb.style.background = "#CDC7E5";
            }
        }
    }
}

// Create SQUARES
function createSquares(i){
    const container = document.getElementById("container");
    const div = document.createElement("div");
    let p = document.createElement("p");
    p.id = `${i}p`;
    div.appendChild(p);
    div.id = i;
    div.classList.add("square");
    container.appendChild(div);
    console.log(i);
    return div
    return p
}

// Initiate the game
gameBoard();
