console.log("Hello, World!");

function getComputerChoice(){
    let ar = {0:"rock",1:"paper", 2:"scissors"};
    let randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum);
    // console.log(ar[randomNum]);
    return ar[randomNum];
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: ");
    choice = choice.toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors"){
        while(true){
        console.log("Invalid choice");
        choice = prompt("Enter your choice again: ");
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors"){
            return choice;
        }
    }
}
    return choice;
    // console.log(choice);
}
// getComputerChoice();
// getHumanChoice();
let computerScore = 0;
let humanScore = 0;

function winnerDecider(computerScore,humanScore){
    if(computerScore > humanScore){
        return "computer wins!";
    }else if(computerScore < humanScore){
        return "human wins!";
    }else{
        return "It's a tie!";
    }
}

function gameLogic(){
    for(let i=0;i<10;i++){
    let humanChoice = getHumanChoice();
    console.log(humanChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice == humanChoice){
        console.log("It's a tie!");
    }else if(computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++;
        console.log("Computer wins!");
    }else if(computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
        console.log("Computer wins!");
    }else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++;
        console.log("Computer wins!");
    }else{
        humanScore++;
        console.log("Human wins!");
    }
}
    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);
    let winner = winnerDecider(computerScore,humanScore);
    console.log(winner);
}
