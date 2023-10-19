'use strict';

/*
// This method is used top select html elements and is similar to css selectors. # would work for id selection, for example
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!👌';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// getting value    getter
console.log(document.querySelector('.guess').value);
// setting value    setter
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/ // getal tussen 0 & 0.999. * 20 (getal tussen 0 & 19) + 1 getal tussen 1 & 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// select element Check (which is a button), add a click listener with a method/function linked to it. (when check button is clicked perform the following method,)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //When there is no input
    displayMessage('No Number😒');

    //When player wins
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    displayMessage('🎉Correct Number!👌');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess if wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high😶‍🌫️' : 'Too low🪱');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 😖');
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  //Reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;

  //Reset guess gield
  document.querySelector('.guess').value = '';

  //Reset message
  displayMessage('You started a new game, start guessing!');

  //Reset CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
