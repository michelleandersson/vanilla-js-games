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
        const obstacle = document.createElement('div'); 
        obstacle.classList.add('obstacle'); 
        gameDisplay.appendChild(obstacle); 
    }
    generateObstacle(); 
})