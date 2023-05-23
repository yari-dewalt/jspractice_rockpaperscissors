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

const playRound = (playerChoice, computerChoice) => {
    console.log("You chose: " + playerChoice);
    console.log("The computer chose: " + computerChoice + "\n\n");

    if (playerChoice === computerChoice) {
        console.log("Tie! " + playerChoice + " against " + computerChoice);
    }

    else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock!");
    }

    else if (playerChoice === "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors!");
    }

    else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beat Paper!");
    }

    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock!");
    }

    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors!");
    }

    else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beat Paper!");
    }
}