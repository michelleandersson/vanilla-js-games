document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'bird1', 
            img: 'images/bird1.png'
        }, 
        {
            name: 'bird1', 
            img: 'images/bird1.png'
        }, 
        {
            name: 'bird2', 
            img: 'images/bird2.png'
        }, 
        {
            name: 'bird2', 
            img: 'images/bird2.png'
        }, 
        {
            name: 'bird3', 
            img: 'images/bird3.png'
        }, 
        {
            name: 'bird3', 
            img: 'images/bird3.png'
        }, 
        {
            name: 'bird4', 
            img: 'images/bird4.png'
        }, 
        {
            name: 'bird4', 
            img: 'images/bird4.png'
        }, 
        {
            name: 'bird5', 
            img: 'images/bird5.png'
        }, 
        {
            name: 'bird5', 
            img: 'images/bird5.png'
        }, 
        {
            name: 'bird6', 
            img: 'images/bird6.png'
        }, 
        {
            name: 'bird6', 
            img: 'images/bird6.png'
        }, 

    ]

    const grid = document.querySelector('.grid'); 

    //create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.classList.add('border') 
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard(); 
})