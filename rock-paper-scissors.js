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

function playRound(computerSelection, playerSelection) {

    let winMessage = "Congratulations you win!";
    let loseMessage = "You lose.";
    let tieMessage = "It's a tie.";
    let errorMessage = "Error please try again.";

    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return tieMessage;
                case "paper":
                    return loseMessage;
                    break;
                case "scissors":
                    return winMessage;
                    break;                    
                default: 
                    return errorMessage;
                }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return winMessage;
                    break;
                case "paper":
                    return tieMessage;
                    break;
                case "scissors":
                    return loseMessage;
                    break;
                default: 
                    return errorMessage;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return loseMessage;
                case "paper":
                    return winMessage;
                    break;
                case "scissors":
                    return tieMessage;
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
}

//create variables of existing html elements
let body = document.querySelector('body');
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

function resetGame() {
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
    
    })
}

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

    resetGame();
}