let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result > p"); 
const rock_div = document.querySelector("#r"); 
const paper_div = document.querySelector("#p"); 
const scissors_div = document.querySelector("#s"); 

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
    const smallUserWord = "user".fontsize(3); 
    const smallCompWord = "comp".fontsize(3); 
    const winColor = "WIN!".fontcolor("green"); 
    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} beats ${convertToWord(computer)} ${smallCompWord}. You ${winColor} 🔥` 
}

function lose(user, computer) {
    computerScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(3); 
    const smallCompWord = "comp".fontsize(3); 
    const loseColor = "LOST".fontcolor("red"); 
    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} loses to ${convertToWord(computer)} ${smallCompWord}. You ${loseColor} 👻` 
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(3); 
    const smallCompWord = "comp".fontsize(3); 
    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} equals ${convertToWord(computer)} ${smallCompWord}. It's a DRAW 🤷‍♀️` 
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

