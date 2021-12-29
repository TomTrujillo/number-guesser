
/* 
Game Function:
1. Player must guess a number between two numbers (min/max)
2. Players gets a fixed amount of guesses
3. Notify player of remaining guesses
4. Show correct answer if player loses
5. Give player a choice to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
    
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }


// Check if winning number is chosen
if(guess === winningNum){
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct! YOU WIN!!`, 'green');

    } else {

    }
});

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}