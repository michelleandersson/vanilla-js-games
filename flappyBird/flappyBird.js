document.addEventListener('DOMContentLoaded' , () => {
   const bird = document.querySelector('.bird');
   const gameDisplay = document.querySelector('.game-container'); 
   const ground = document.querySelector('.ground'); 

   let birdLeft = 220; 
   let birdBottom = 100; 
   let gravity = 2; 

   function startGame() {
       birdBottom -= gravity; 
       bird.style.bottom = birdBottom + 'px'; 
       bird.style.left = birdLeft + 'px'; 
   }
    let timerId = setInterval(startGame, 20); 

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
        obstacle.classList.add('obstacle'); 
        gameDisplay.appendChild(obstacle); 
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';  

        function moveObstacle() {
            obstacleLeft -= 2; 
            obstacle.style.left = obstacleLeft + 'px'; 

            if(obstacleLeft === -60) {
                clearInterval(timerID); 
                gameDisplay.removeChild(obstacle); 
            } 
        }

        let timerID = setInterval(moveObstacle, 20); 
        setTimeout(generateObstacle, 3000); 
    }
    generateObstacle(); 
})