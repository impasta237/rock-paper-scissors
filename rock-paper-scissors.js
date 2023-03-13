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
}

function playRound(computerSelection, playerSelection) {

    let winMessage = "Congratulations you win!";
    let loseMessage = "You lose.";
    let tieMessage = "It's a tie.";
    let errorMessage = "Error please try again.";

    console.log("your selection: "+playerSelection);
    console.log("computer selection: "+computerSelection);

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

let buttonRock = document.querySelector('#rock');
let buttonPaper = document.querySelector('#paper');
let buttonScissors = document.querySelector('#scissors');

let playerSelection;

buttonRock.addEventListener('click', () => {
    playerSelection = "rock";
    buttonRock.classList.add('selected');
    console.log(playerSelection);
    console.log(playRound(getComputerChoice(), playerSelection));
});

buttonPaper.addEventListener('click', () => {
    playerSelection = "paper";
    buttonPaper.classList.add('selected');
    console.log(playerSelection);
    console.log(playRound(getComputerChoice(), playerSelection));
});

buttonScissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    buttonScissors.classList.add('selected');
    console.log(playerSelection);
    console.log(playRound(getComputerChoice(), playerSelection));
});

//console.log(playRound(getComputerChoice()));
