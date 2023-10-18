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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

// select element Check (which is a button), add a click listener with a method/function linked to it. (when check button is clicked perform the following method,)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number😒';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!👌';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high, try again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😖';
    }
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
