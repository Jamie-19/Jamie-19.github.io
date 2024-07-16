console.log("Hello, World!");


const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result').querySelector("p");
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
const resetChoice = document.getElementById('reset');
const gameBoard = document.getElementById('game');
const bodyElement = document.body;

let computerScore = 0;
let humanScore = 0;

// function markChoice(element){
//     element.classList.add("choice-selected");
// }


function getComputerChoice(){
    let ar = ["rock","paper","scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum);
    // console.log(ar[randomNum]);
    return ar[randomNum];
}


function winnerDecider(computerScore,humanScore){
    if(computerScore > humanScore){
        return `Game Over Computer wins with ${computerScore-humanScore} lead!`;
    }else if(computerScore < humanScore){
        bodyElement.classList.add("background-win");
        resultElement.classList.add("game-win-animation");
        return `Game Over Human wins with ${humanScore-computerScore} lead!`;
    }else{
        return "It's a tie!";
    }
}

function gameLogic(userChoice){
    if(humanScore == 5 || computerScore == 5){
        resultElement.innerHTML = winnerDecider(computerScore,humanScore);
        rockChoice.classList.remove("choice-selected");
        paperChoice.classList.remove("choice-selected");
        scissorsChoice.classList.remove("choice-selected");
        gameBoard.classList.add("game1-over");
        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
        return;
    }
    console.log(userChoice);
    humanChoice = userChoice;
    // if(humanChoice == 'rock'){
    //     markChoice(rockChoice);
    //     paperChoice.classList.remove("choice-selected");
    //     scissorsChoice.classList.remove("choice-selected");
    // }
    // if(humanChoice == 'paper'){
    //     markChoice(paperChoice);
    //     rockChoice.classList.remove("choice-selected");
    //     scissorsChoice.classList.remove("choice-selected");
    // }
    // if(humanChoice == 'scissors'){
    //     markChoice(scissorsChoice);
    //     paperChoice.classList.remove("choice-selected");
    //     rockChoice.classList.remove("choice-selected");
    // }
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let result = humanChoice[0]+computerChoice[0];
    console.log(result);
    
    switch (result) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}


function win(userChoice, computerChoice){
    humanScore++;
    userScoreElement.innerHTML = humanScore;
    if(humanScore == 5){
        resultElement.innerHTML = winnerDecider(computerScore,humanScore);
        rockChoice.classList.remove("choice-selected");
        paperChoice.classList.remove("choice-selected");
        scissorsChoice.classList.remove("choice-selected");
        gameBoard.classList.add("game1-over");
        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
        return;
    }
    resultElement.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
    resultElement.classList.add("win-animation");
    setTimeout(() => {
        resultElement.classList.remove("win-animation");
    }, 1000);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScoreElement.innerHTML = computerScore;
    if(computerScore == 5){
        resultElement.innerHTML = winnerDecider(computerScore,humanScore);
        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
        return;
    }
    resultElement.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
}

function draw(userChoice, computerChoice){
    resultElement.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw!`;
}

function resetGame(){
    computerScore = 0;
    humanScore = 0;
    userScoreElement.innerHTML = humanScore;
    computerScoreElement.innerHTML = computerScore;
    resultElement.innerHTML = "Let's play!";
    rockChoice.classList.remove("choice-selected");
    paperChoice.classList.remove("choice-selected");
    scissorsChoice.classList.remove("choice-selected");
    gameBoard.classList.remove("game1-over");
    bodyElement.classList.remove("background-win");
    resultElement.classList.remove("game-win-animation");
}


rockChoice.addEventListener('click',()=>{gameLogic('rock')});
paperChoice.addEventListener('click',()=>{gameLogic('paper')});
scissorsChoice.addEventListener('click',()=>{gameLogic('scissors')});
resetChoice.addEventListener('click',resetGame);
