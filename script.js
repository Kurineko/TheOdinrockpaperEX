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
console.log(getComputerChoice())