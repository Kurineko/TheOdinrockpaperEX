function getComputerChoice(){
    switch(Math.floor(Math.random()*10+1)) {
        case 1:
        case 2:
        case 3:
            return text = "rock";
            break;

        case 4:
        case 5:
        case 6:
            return text = "scissors";
            break;

        case 7:
        case 8:
        case 9:
            return text = "paper";
            break;

        case 10:
            return getComputerChoice();
            break;
    }
} 

function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return "You Lose! Paper beats Rock";
    }else return "biscuts"
}

game => () {
    for (let i=0; i<5; i++){

    }
}

 const playerSelection = "rock";
 const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));