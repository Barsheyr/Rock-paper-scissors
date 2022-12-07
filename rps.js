const btnRules = document.querySelector(".btn-rules");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

btnRules.addEventListener('click', function() {
    modal.classList.add('open-modal');
});
closeBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal');
});


const buttons = document.querySelectorAll('.btn-circle');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score')
const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoice = document.getElementById('user-choice')
const choices = ['paper', 'rock', 'scissors'];


let userChoice = undefined;
let computerChoice
let result
let score = 0

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.id
            // userChoice = button.getAttribute('data-choice');

        yourChoice.innerHTML = userChoice
        generateComputerChoice()
        getResult()
        resultUpdate()
    });
});


function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1

    if (randomNum === 1) {
        computerChoice = 'rock'
    }
    if (randomNum === 2) {
        computerChoice = 'paper'
    }
    if (randomNum === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost'
    }
    resultEl.innerHTML = result
}

function resultUpdate() {
    if (result == 'You win') {
        score += 1
    }
    scoreEl.innerHTML = score
}