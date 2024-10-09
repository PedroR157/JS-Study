

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A 👔";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN 🏆" : "YOU LOSE 💩";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN 🏆" : "YOU LOSE 💩";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN 🏆" : "YOU LOSE 💩";
                break;
            
            default:
                break;
        }
    }

    if (playerChoice === choices[0]) {
        playerDisplay.textContent = `✊`;
    } else if(playerChoice === choices[2]) {
        playerDisplay.textContent = `✌`;
    } else{
        playerDisplay.textContent = `🖐`;
    }

    if (computerChoice === choices[0]) {
        computerDisplay.textContent = `✊`;
    } else if(computerChoice === choices[2]) {
        computerDisplay.textContent = `✌`;
    } else{
        computerDisplay.textContent = `🖐`;
    }

    resultDisplay.textContent = result;
    

}