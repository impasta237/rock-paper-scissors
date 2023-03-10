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
            return "error";
    } 

}

function playRound(computerSelection) {

let winMessage = "Congratulations you win!";
let loseMessage = "You lose.";
let tieMessage = "It's a tie.";
let errorMessage = "Error please try again.";

let playerSelection = prompt("Please choose one of the following: Rock, Paper, Scissors");

playerSelection = playerSelection.toLowerCase();

console.log("your selection: "+playerSelection);
console.log("computer selection: "+computerSelection);

    if(checkPlayerSelection(playerSelection)) {

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

    } else {
     
        return "That is not a valid selection. Please try again."

    }

}

function checkPlayerSelection(playerSelection) {

    switch(playerSelection) {
        case "rock":
        case "paper":
        case "scissors":
            return true;
            break;
        default:
            return false;

    }

}

console.log(playRound(getComputerChoice()));
