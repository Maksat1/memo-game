
let cards = document.querySelectorAll('.card');
let arr = [];
let counter = 0;
let button = document.querySelector('#btn');
let time = document.querySelector('#time')

function randomCard() {
    while (true) {
        let rand = Math.floor(Math.random() * 16) + 1;
        if (arr.indexOf(rand) == -1) {
            arr.push(rand);
        }
        if (arr.length == 5) break;
    }
    console.log(arr.sort(function (a, b) {
        return a - b;
    }))
    for (let i = 0; i < arr.length; i++ ) {
    cards[arr[i] - 1].classList.add('chosen');
    }
}

function flip() {
    if (counter == 5) {
        gameOver();
    } else if (this.classList == 'card chosen') {
        this.classList.add('correct');
        counter++;
    } else {
        this.classList.add('incorrect')
    }
}
function timer() {
    button.addEventListener('click', function countdown() {
        setInterval(function() { 
            if (Number(time.textContent) === 0) {
                gameOver();
            } else {
                time.textContent = Number(time.textContent) - 1;
            }
        }, 1000)
        this.removeEventListener('click', countdown)
    });
    
}

function gameOver() {
    cards.forEach(card => card.disabled = true)
}
randomCard() 
cards.forEach(card => card.addEventListener('click', flip));
timer();


