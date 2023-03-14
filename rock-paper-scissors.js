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

    console.log("your selection: "+playerSelection); //console log
    console.log("computer selection: "+computerSelection); //console log

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
    
    console.log(choice); //console log
    console.log(playRound(computerChoice, choice));


    endRoundMessage(playRound(computerChoice,choice), computerChoice, choice);
}


let buttonRock = document.querySelector('#rock');
let buttonPaper = document.querySelector('#paper');
let buttonScissors = document.querySelector('#scissors');

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

function resetGame(button, body, box, message1, message2, message3) {
    button.addEventListener('click', () => {

        let buttonRock = document.querySelector('#rock');
        let buttonPaper = document.querySelector('#paper');
        let buttonScissors = document.querySelector('#scissors');

        buttonRock.disabled = false;
        buttonPaper.disabled = false;
        buttonScissors.disabled = false;

        buttonRock.classList.remove('selected');
        buttonPaper.classList.remove('selected');
        buttonScissors.classList.remove('selected');

        box.removeChild(message1);
        box.removeChild(message2);
        box.removeChild(message3);
        box.removeChild(button);
        body.removeChild(box);
    
    })
}

function endRoundMessage(message, computerChoice, playerChoice) {
    const endRoundMessageContainer = document.createElement('div');
    endRoundMessageContainer.classList.add('end-round-message-container');

    const endRoundMessageDisplay = document.createElement('div');
    endRoundMessageDisplay.classList.add('end-round-message');
    endRoundMessageDisplay.textContent = message;

    const endRoundMessagePlayerChoice = document.createElement('div');
    endRoundMessagePlayerChoice.classList.add('end-round-message-player-choice');
    endRoundMessagePlayerChoice.textContent = "You chose: " + playerChoice;

    const endRoundMessageComputerChoice = document.createElement('div');
    endRoundMessageComputerChoice.classList.add('end-round-message-computer-choice');
    endRoundMessageComputerChoice.textContent = "The computer chose: " + computerChoice;

    const endRoundResetButton = document.createElement('button');
    endRoundResetButton.classList.add('end-round-reset-button');
    endRoundResetButton.textContent = "Reset";

    const body = document.querySelector('body');
    body.appendChild(endRoundMessageContainer);
    endRoundMessageContainer.appendChild(endRoundMessageDisplay);
    endRoundMessageContainer.appendChild(endRoundMessagePlayerChoice);
    endRoundMessageContainer.appendChild(endRoundMessageComputerChoice);
    endRoundMessageContainer.appendChild(endRoundResetButton);

    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;

    resetGame(endRoundResetButton, body, endRoundMessageContainer, endRoundMessageDisplay, endRoundMessagePlayerChoice, endRoundMessageComputerChoice);
}