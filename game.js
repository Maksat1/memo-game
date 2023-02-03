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
        this.removeEventListener('click', flip)
        counter++;
    } else {
        this.classList.add('incorrect')
    }
}
function timer() {
    button.addEventListener('click', function sss() {
        let tim = Number(time.textContent);
        let countdown = setInterval(function() { 
            tim--; 
            console.log(tim)
            if (tim == 0) {
                gameOver();
                clearInterval(countdown )
            }
        }, 1000)
        this.removeEventListener('click', sss)
    });
    
}

function gameOver() {
    cards.forEach(card => card.disabled = true)
}

randomCard() 
cards.forEach(card => card.addEventListener('click', flip));
timer();


