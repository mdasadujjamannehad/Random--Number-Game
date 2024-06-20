let randomNumber = parseInt((Math.random() * 100) + 1)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.remainingGuess');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];

let numbGuesss = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });

}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a Valid Number')
    } else if (guess < 1) {
        alert('Please enter a Valid Number')
    } else if (guess > 100) {
        alert('Please enter a Valid Number')
    } else {
        prevGuess.push(guess)
        if (numbGuesss === 11) {
            displayGuess(guess)
            displayMessage(`Game Over ! Random Number Was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You won the GAME')
        endGame()
    } else if (guess > randomNumber) {
        displayMessage(`The Number is Shorter then your think`)
    } else if (guess < randomNumber) {
        displayMessage(`The Number is Bigger then your think`)
    }
}


function displayGuess(guess) {
    userInput.value = ''
    guesses.innerHTML += `${guess}, `
    numbGuesss++
    remaining.innerHTML = `${11 - numbGuesss}`


}


function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}



function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id = "newGame" > Start a New Game </h2>'
    StartOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame() {
 const newGamebtn = document.getElementById('newGame')
newGamebtn.addEventListener('click', function (e){
    randomNumber = parseInt((Math.random() * 100) + 1)

    prevGuess = [];
    numbGuesss = 1
    guesses = '';
     remaining.innerHTML = `${11 - numbGuesss}`
     StartOver.removeChild(p)
    userInput.removeAttribute('disabled')
    playGame = true
})
}



