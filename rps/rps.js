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
const spock_div = document.querySelector("#c"); 

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'c']; 
    const randomNumber = Math.floor(Math.random() * 5); 
    return choices[randomNumber]; 
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"; 
    if (letter === "s") return "Scissors"; 
    if (letter === "l") return "Lizard"; 
    return "Spock";  
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
        case "rl":
        case "lc":
        case "cs":
        case "sl":
        case "lp":
        case "pc":
        case "cr":
            win(userChoice, computerChoice); 
            break; 
        case "rp": 
        case "ps": 
        case "sr": 
        case "lr":
        case "cl":
        case "sc":
        case "ls":
        case "pl":
        case "cp":
        case "rc":
            lose(userChoice, computerChoice); 
            break; 
        case "rr":
        case "pp": 
        case "ss": 
        case "ll": 
        case "cc":
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

