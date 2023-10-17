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

*/

// select element Check (which is a button), add a click listener with a method/function linked to it. (when check button is clicked perform the following method,)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🙌 No Number😒';
  }
});
