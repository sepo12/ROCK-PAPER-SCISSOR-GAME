const ComputerDisplay = document.getElementById('computer-choice')
const userDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "scissor"
    }
    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    ComputerDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "its a draw!"
    }
    if (computerChoice === "rock" && userChoice === "scissor") {
        result = "You lose!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You lose!"
    }
    if (computerChoice === "scissor" && userChoice === "paper") {
        result = "You lose!"
    }
    if (computerChoice === "scissor" && userChoice === "rock") {
        result = "You win!"
    }
    if (computerChoice === "paper" && userChoice === "scissor") {
        result = "You win!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You win!"
    }
    resultsDisplay.innerHTML = result
}