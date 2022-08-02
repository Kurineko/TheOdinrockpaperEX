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
    if((computerSelection=="rock" && playerSelection=="scissors") || 
        (computerSelection=="paper" && playerSelection=="rock") || 
        (computerSelection=="scissors" && playerSelection=="paper")){
            losses=losses+1;
            return "You Lose! " + computerSelection + " beats " + playerSelection;} 
        
    else if (playerSelection==computerSelection) 
            {ties=ties+1;
                return "Tie!";}
    
    else 
            {wins=wins+1;
                return "You Win! " + playerSelection + " beats " + computerSelection;}
}


game = () => {
    for (let i=1; i<=5; i++){
        console.log("you are in game " + i + " out of 5");
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

    }
}

let wins = 0;
let losses = 0;
let ties = 0;

game();
console.log("Wins="+wins);
console.log("Losses="+losses);
console.log("Ties="+ties);