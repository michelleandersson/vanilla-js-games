document.addEventListener('DOMContentLoaded' , () => {
   const bird = document.querySelector('.bird');
   const gameDisplay = document.querySelector('.game-container'); 
   const ground = document.querySelector('.ground'); 
   let scoreBoard = document.querySelector('.scoreDisplay');
   scoreBoard.setAttribute("hidden", ""); 

   let birdLeft = 220; 
   let birdBottom = 250; 
   let gravity = 2; 
   let isGameOver = false; 
   let gap = 430; 
   let score = -1; 

   function startGame() {
       birdBottom -= gravity; 
       bird.style.bottom = birdBottom + 'px'; 
       bird.style.left = birdLeft + 'px'; 
   }
    let gameTimerId = setInterval(startGame, 20); 

    function control(e) {
        //e = event
        //keyCode = javascript method for calling keyboard keys
        //32 = keycode for spacebar
        //this function ensures that only spacebar makes the bird jump
        if (e.keyCode === 32) {
            jump(); 
        }
    }


    function jump() {
        if (birdBottom < 500) birdBottom += 50; 
        bird.style.bottom = birdBottom + 'px'; 
        console.log(birdBottom); 
    }

    document.addEventListener('keyup', control); 
     

    function generateObstacle() {
        let obstacleLeft = 500; 
        let randomHeight = Math.random() * 60; 
        let obstacleBottom = randomHeight;
        const obstacle = document.createElement('div'); 
        const topObstacle = document.createElement('div'); 
        if (!isGameOver) {
            obstacle.classList.add('obstacle'); 
            topObstacle.classList.add('topObstacle'); 
            score ++;  
        } 
        gameDisplay.appendChild(obstacle); 
        gameDisplay.appendChild(topObstacle); 
        obstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.left = obstacleLeft + 'px'; 
        obstacle.style.bottom = obstacleBottom + 'px';  
        topObstacle.style.bottom = obstacleBottom + gap + 'px'; 

        function moveObstacle() {
            obstacleLeft -= 2; 
            obstacle.style.left = obstacleLeft + 'px'; 
            topObstacle.style.left = obstacleLeft + 'px'; 

            if(obstacleLeft === -60) {
                clearInterval(timerID); 
                gameDisplay.removeChild(obstacle); 
                gameDisplay.removeChild(topObstacle); 
                   
            } 
            if(
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200) ||
                birdBottom === 0
                ) {
                gameOver()
                clearInterval(timerID); 
            }
        }

        let timerID = setInterval(moveObstacle, 20); 
        if (!isGameOver) setTimeout(generateObstacle, 3000); 
    }
    generateObstacle(); 

    function gameOver() {
        clearInterval(gameTimerId)
        isGameOver = true; 
        scoreBoard.removeAttribute("hidden"); 
        scoreBoard.innerHTML = score; 
        document.removeEventListener('keyup', control); 
        
        
        console.log('score = ' +  score); 
    }
})