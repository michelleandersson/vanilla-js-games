let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result > p"); 
const rock_div = document.querySelector("#r"); 
const paper_div = document.querySelector("#p"); 
const scissors_div = document.querySelector("#s"); 
const lizard_div = document.querySelector("#l"); 
const spock_div = document.querySelector("#sp"); 

function getComputerChoice() {
    const choices = ['r', 'p', 's']; 
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber]; 
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"; 
    return "Scissors"; 
}

function win(user, computer) {
    userScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    const winColor = "WIN!".fontcolor("#4dcc7d"); 
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You ${winColor} 🔥` 
    document.getElementById(user).classList.add('green-glow'); 
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300); 
}

function lose(user, computer) {
    computerScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;  
    const loseColor = "LOST".fontcolor("#fc121b"); 
    result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. You ${loseColor} 👻` 
    document.getElementById(user).classList.add('red-glow'); 
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300); 
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}. It's a DRAW 🤷‍♀️` 
    document.getElementById(user).classList.add('gray-glow'); 
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 300); 
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {
        case "rs": 
        case "pr": 
        case "sp": 
            win(userChoice, computerChoice); 
            break; 
        case "rp": 
        case "ps": 
        case "sr": 
            lose(userChoice, computerChoice); 
            break; 
        case "rr":
        case "pp": 
        case "ss": 
            draw(userChoice, computerChoice); 
            break; 
    }
}
game(); 

function main() {
    rock_div.addEventListener('click', function() {
        game("r"); 
    }); 
    
    paper_div.addEventListener('click', function() {
        game("p"); 
    });
    
    scissors_div.addEventListener('click', function() {
        game("s"); 
    }); 
}

main(); 

