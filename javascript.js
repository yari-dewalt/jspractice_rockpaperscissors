const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;
    
    if (choice === 1) {
        return "rock";
    }

    else if (choice === 2) {
        return "paper";
    }

    else if (choice === 3) {
        return "scissors";
    }
}

const getPlayerChoice = () => {
    let choice = prompt("Please choose  Rock, Paper, or Scissors");
    choice = choice.toLowerCase();

    while(choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Please try again. Choose either Rock, Paper, or Scissors");
        choice = choice.toLowerCase();
    }

    return choice;
}

const playRound = () => {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    console.log("You chose: " + playerChoice);
    console.log("The computer chose: " + computerChoice + "\n\n");

    if (playerChoice === computerChoice) {
        console.log("Tie! " + playerChoice + " against " + computerChoice);
        return false;
    }

    else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock!");
        return false;
    }

    else if (playerChoice === "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors!");
        return true;
    }

    else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beat Paper!");
        return false;
    }

    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock!");
        return true;
    }

    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors!");
        return false;
    }

    else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beat Paper!");
        return false;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound();

        if (round) {
            playerWins++;
        }

        else {
            computerWins++;
        }

        console.log("\nPlayer: " + playerWins + " Computer: " + computerWins + '\n\n');
    }

    if (playerWins > computerWins) {
        console.log("\n\nCongratulations! You Win!!!");
    }

    else if (playerWins < computerWins) {
        console.log("\n\nOh no! You Lost!!!");
    }

    else {
        console.log("You Tied!!!");
    }
}