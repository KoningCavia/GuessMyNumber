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

// select element Check (which is a button), add a click listener with a method/function linked to it. (when check button is clicked perform the following method,)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //When there is no input
    document.querySelector('.message').textContent = 'No Number😒';

    //When player wins
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.message').textContent = '🎉Correct Number!👌';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high, try again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😖';
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low, try again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😖';
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
  document.querySelector('.message').textContent =
    'You started a new game, start guessing!';

  //Reset CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
