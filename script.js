// Pseudo Code 
// Have the computer select a random choice: Rock, Paper, or Scissor
// Have the player select a random choice: Rock, Paper, or Scissor
// Compare the two: Paper beats Rock 
//                  Rock beats Scissors
//                  Scissors beats Paper

function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3) + 1;

    console.log(answer);
    return answer;

}

function getHumanChoice() {
    let answer = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    answer = answer.toUpperCase();
    let humanChoice = 0;

    if (answer === "ROCK") {
        humanChoice = 1;
    } else if ( answer === "PAPER") {
        humanChoice = 2;
    } else if (answer === "SCISSORS") {
        humanChoice = 3;
    } else {
        alert("Invalid input! Please enter Rock, Paper, or Scissors.")
        return getHumanChoice(); 
    }
    
    console.log(humanChoice);
    return humanChoice

}

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        console.log("Try Again!");
        round++;
    } else if (humanChoice < computerChoice) {
        console.log("You lose!");
        computerScore++;
        round++;
    } else {
        console.log("You win!");
        humanScore++;
        round++;
    }

    round++;
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore} | Round: ${round}`);

}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playGame() {
    while (round < 5) {
        playRound(computerChoice, humanChoice)
    } 
}

playGame()