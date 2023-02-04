let cards = document.querySelectorAll('.card');
let arr = [];
let counter = 0;
let countdown;
let button = document.querySelector('#btn');
let time = document.querySelector('#time');
let text = document.querySelector('#text');

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
    if (this.classList == 'card chosen') {
        this.classList.add('correct');
        this.removeEventListener('click', flip)
        counter++;
        if (counter == 5) {
            clearInterval(countdown)
            gameOver();
        }
    } else {
        this.classList.add('incorrect')
    }
}
function timer() {
    button.addEventListener('click', function sss() {
        let tim = Number(time.textContent);
        cards.forEach(card => card.style.pointerEvents = 'auto');
        countdown = setInterval(function() { 
            tim--;
            time.textContent = tim;
            console.log(tim)
            if (tim == 0) {
                clearInterval(countdown );
                gameOver();
            } else if (counter == 5) {
                clearInterval(countdown)
            }
        }, 1000)
        this.removeEventListener('click', sss)
    });
    
}

function gameOver() {
    cards.forEach(card => card.style.pointerEvents = 'none');
    if (time.textContent == 0) {
        text.textContent = 'Ты проиграл!';
    } else {
        text.textContent = 'Ты победил!'
    }
}

cards.forEach(card => card.style.pointerEvents = 'none');

randomCard() 
cards.forEach(card => card.addEventListener('click', flip));
timer();


