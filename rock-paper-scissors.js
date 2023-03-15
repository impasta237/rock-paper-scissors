function getComputerChoice() {
    let a = Math.floor(Math.random()*3);
    switch(a) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "ERROR";
    }
} //end getComputerChoice function

// declare variables for score totals
let roundsPlayed = 0;
let wins = 0;
let losses = 0;
let ties = 0;

let winMessage = "Congratulations you win!";
let loseMessage = "You lose.";
let tieMessage = "It's a tie.";
let errorMessage = "Error please try again.";

//declare 
const gamesPlayedDisplay = document.querySelector('.games-played');
const winsDisplay = document.querySelector('.wins');
const lossesDisplay = document.querySelector('.losses');
const tiesDisplay = document.querySelector('.ties');

gamesPlayedDisplay.textContent = "Total Games Played: "+roundsPlayed;
winsDisplay.textContent = "Total Wins: "+wins;
lossesDisplay.textContent = "Total Losses: "+losses;
tiesDisplay.textContent = "Total Ties: "+ties;

function playerWin() {
    wins++;
    winsDisplay.textContent = "Total Wins: "+wins;
    return winMessage;
};

function playerLose() {
    losses++;
    lossesDisplay.textContent = "Total Losses: "+losses;
    return loseMessage;
};

function playerTie() {
    ties++;
    tiesDisplay.textContent = "Total Ties: "+ties;
    return tieMessage;
};

function playRound(computerSelection, playerSelection) {
    roundsPlayed++;
    gamesPlayedDisplay.textContent = "Total Games Played: "+roundsPlayed;
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return playerTie();
                    break;
                case "paper":
                    return playerLose();
                    break;
                case "scissors":
                    return playerWin();
                    break;                    
                default: 
                    return errorMessage;
                }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return playerWin();
                    break;
                case "paper":
                    return playerTie();
                    break;
                case "scissors":
                    return playerLose();
                    break;
                default: 
                    return errorMessage;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return playerLose();
                case "paper":
                    return playerWin();
                    break;
                case "scissors":
                    return playerTie();
                    break;
                default: 
                    return errorMessage;
            }
            break;
        default:
            return errorMessage;
    }

} //end of playRound function

function selected(button, choice) {
    button.classList.add('selected');
    let computerChoice = getComputerChoice();
    endRoundMessage(playRound(computerChoice,choice), computerChoice, choice);
} //end function to add selected class to chosen button

//create variables of existing html elements
let body = document.querySelector('.left-column');
let buttonRock = document.querySelector('#rock');
let buttonPaper = document.querySelector('#paper');
let buttonScissors = document.querySelector('#scissors');

//button click events to set player selection
buttonRock.addEventListener('click', () => {
    playerSelection = "rock";
    selected(buttonRock, playerSelection);
});
buttonPaper.addEventListener('click', () => {
    playerSelection = "paper";
    selected(buttonPaper, playerSelection);
});
buttonScissors.addEventListener('click', () => {
    playerSelection = "scissors";
    selected(buttonScissors, playerSelection);
});

//create temporary div elements for round summary popup box
const endRoundMessageContainer = document.createElement('div');
endRoundMessageContainer.classList.add('end-round-message-container');

const endRoundMessageDisplay = document.createElement('div');
endRoundMessageDisplay.classList.add('end-round-message');

const endRoundMessagePlayerChoice = document.createElement('div');
endRoundMessagePlayerChoice.classList.add('end-round-message-player-choice');

const endRoundMessageComputerChoice = document.createElement('div');
endRoundMessageComputerChoice.classList.add('end-round-message-computer-choice');

const endRoundResetButton = document.createElement('button');
endRoundResetButton.classList.add('end-round-reset-button');
endRoundResetButton.textContent = "Reset";


endRoundResetButton.addEventListener('click', () => {
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;

    buttonRock.classList.remove('selected');
    buttonPaper.classList.remove('selected');
    buttonScissors.classList.remove('selected');

    endRoundMessageContainer.removeChild(endRoundMessageDisplay);
    endRoundMessageContainer.removeChild(endRoundMessagePlayerChoice);
    endRoundMessageContainer.removeChild(endRoundMessageComputerChoice);
    endRoundMessageContainer.removeChild(endRoundResetButton);
    body.removeChild(endRoundMessageContainer); 
}); // end of round reset button click event

function endRoundMessage(message, computerChoice, playerChoice) {
    endRoundMessageDisplay.textContent = message;
    endRoundMessagePlayerChoice.textContent = "You chose: " + playerChoice;
    endRoundMessageComputerChoice.textContent = "The computer chose: " + computerChoice;

    body.appendChild(endRoundMessageContainer);
    endRoundMessageContainer.appendChild(endRoundMessageDisplay);
    endRoundMessageContainer.appendChild(endRoundMessagePlayerChoice);
    endRoundMessageContainer.appendChild(endRoundMessageComputerChoice);
    endRoundMessageContainer.appendChild(endRoundResetButton);

    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
} // end of function to create round summary popup message

// define div elements for running score


