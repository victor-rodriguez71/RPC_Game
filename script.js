// Pseudo Code 
// Have the computer select a random choice: Rock, Paper, or Scissor
// Have the player select a random choice: Rock, Paper, or Scissor
// Compare the two: Paper beats Rock 
//                  Rock beats Scissors
//                  Scissors beats Paper

function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3);
    let myArray = ['rock', 'paper', 'scissor']
    let computerChoice = myArray[answer];
    console.log(computerChoice);
    return computerChoice;

}

// function getHumanChoice() {
//     let answer = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
//     answer = answer.toUpperCase();
//     let humanChoice = 0;

//     if (answer === "ROCK") {
//         humanChoice = 1;
//     } else if ( answer === "PAPER") {
//         humanChoice = 2;
//     } else if (answer === "SCISSORS") {
//         humanChoice = 3;
//     } else {
//         alert("Invalid input! Please enter Rock, Paper, or Scissors.")
//         return getHumanChoice(); 
//     }
    
//     console.log(humanChoice);
//     return humanChoice

// }

let humanScore = 0;
let computerScore = 0;
let round = 0;

// function playRound(computerChoice, humanChoice) {
//     if (humanChoice === computerChoice) {
//         console.log("Try Again!");
//     } else if (humanChoice < computerChoice) {
//         console.log("You lose!");
//         computerScore++;
//     } else {
//         console.log("You win!");
//         humanScore++;
//     }

//     round++;
//     console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore} | Round: ${round}`);

// }

// function playGame() {
//     while (round < 5) {
//         let computerChoice = getComputerChoice();
//         let humanChoice = getHumanChoice();
//         playRound(computerChoice, humanChoice)
//     } 
// }

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = `Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`;
container.appendChild(content);

function gameOver() {
    if (humanScore > computerScore && humanScore ===5){
        document.querySelector('.content').textContent = `You Win! Your Score: ${humanScore} - Computer Score: ${computerScore}`;
    } else if (humanScore < computerScore && computerScore ===5) {
        document.querySelector('.content').textContent = `You Lose! Your Score: ${humanScore} - Computer Score: ${computerScore}`;
    } else {
        document.querySelector('.content').textContent = `Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`;
    }
}

function chooseRock() {
    let playerChoice = "rock";
    let humanChoice = 1;
    let computerChoice = getComputerChoice()
    alert(`You choose: ${playerChoice}`);

    if (playerChoice === computerChoice) {
        alert("Try Again!");
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        alert("You lose!");
        computerScore++;
    } else {
        alert("You win!");
        humanScore++;
    }
    round++;
    // alert(`Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`);
    document.querySelector('.content').textContent = `Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`;
    console.log(playerChoice)
    gameOver();
}

function choosePaper() {
    let playerChoice = "paper";
    let humanChoice = 2;
    let computerChoice = getComputerChoice()
    alert(`You choose: ${playerChoice}`);

    if (playerChoice === computerChoice) {
        alert("Try Again!");
    } else if (playerChoice === 'paper' && computerChoice === 'scissor') {
        alert("You lose!");
        computerScore++;
    } else {
        alert("You win!");
        humanScore++;
    }
    
    round++;
    // alert(`Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`);
    document.querySelector('.content').textContent = `Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`;

    gameOver();
}

function chooseScissor() {
    let playerChoice = "scissor";
    let humanChoice = 3;
    let computerChoice = getComputerChoice()
    alert(`You choose: ${playerChoice}`);

    if (playerChoice === computerChoice) {
        alert("Try Again!");
    } else if (playerChoice === 'scissor' && computerChoice === 'rock') {
        alert("You lose!");
        computerScore++;
    } else {
        alert("You win!");
        humanScore++;
    }
    
    round++;
    // alert(`Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`);
    document.querySelector('.content').textContent = `Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`; 

    gameOver();
}

function reset() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    document.querySelector('.content').textContent = `Round: ${round} - Your Score: ${humanScore} - Computer Score: ${computerScore}`; 
}

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorBtn = document.querySelector('#scissor');
let resetGame = document.querySelector('#reset');

rockBtn.addEventListener('click', chooseRock);
paperBtn.addEventListener('click', choosePaper);
scissorBtn.addEventListener('click', chooseScissor);
resetGame.addEventListener('click', reset);