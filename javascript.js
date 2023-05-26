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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const choice = button.id;
        console.log(choice);
        playRound(choice);
        });
    });

const checkWin = (playerScore, computerScore, resultText) => {
    if (playerScore === 5) {
        resultText.textContent = "You Won!!!";
        playerScore = 0;
        computerScore = 0;
        return true;
    }

    else if (computerScore === 5) {
        resultText.textContent = "You Lost!!!";
        playerScore = 0;
        computerScore = 0;
        return true;
    }
}

let playerScore = 0;
let computerScore = 0;

const playRound = (playerChoice) => {
    computerChoice = getComputerChoice();

    const resultText = document.querySelector("#result");
    const scoreText = document.querySelector("#score");

    if (playerChoice === computerChoice) {
        resultText.textContent = "Tie! " + playerChoice + " against " + computerChoice;
        scoreText.textContent = `👨: ${playerScore} 🤖: ${computerScore}`;
        if (checkWin(playerScore, computerScore, resultText)) {
            playerScore = 0;
            computerScore = 0;
        }
    }

    else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        resultText.textContent = "You lost the round! Paper beats Rock!";
        scoreText.textContent = `👨: ${playerScore} 🤖: ${computerScore}`;

        if (checkWin(playerScore, computerScore, resultText)) {
            playerScore = 0;
            computerScore = 0;
        }
    }

    else if (playerChoice === "rock" && computerChoice == "scissors") {
        playerScore += 1;
        resultText.textContent = "You won the round! Rock beats Scissors!";
        scoreText.textContent = `👨: ${playerScore} 🤖: ${computerScore}`;

        if (checkWin(playerScore, computerScore, resultText)) {
            playerScore = 0;
            computerScore = 0;
        }
    }

    else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        resultText.textContent = "You lost the round! Scissors beat Paper!";
        scoreText.textContent = `👨: ${playerScore} 🤖: ${computerScore}`;

        if (checkWin(playerScore, computerScore, resultText)) {
            playerScore = 0;
            computerScore = 0;
        }
    }

    else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore += 1;
        resultText.textContent = "You won the round! Paper beats Rock!";
        scoreText.textContent = `👨: ${playerScore} 🤖: ${computerScore}`;

        if (checkWin(playerScore, computerScore, resultText)) {
            playerScore = 0;
            computerScore = 0;
        }
    }

    else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        resultText.textContent = "You lost the round! Rock beats Scissors!";
        scoreText.textContent = `👨: ${playerScore} 🤖: ${computerScore}`;

        if (checkWin(playerScore, computerScore, resultText)) {
            playerScore = 0;
            computerScore = 0;
        }
    }

    else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore += 1;
        resultText.textContent = "You won the round! Scissors beat Paper!";
        scoreText.textContent = `👨: ${playerScore} 🤖: ${computerScore}`;

        if (checkWin(playerScore, computerScore, resultText)) {
            playerScore = 0;
            computerScore = 0;
        }
    }
}