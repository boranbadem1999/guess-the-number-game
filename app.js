'use strict';

let numberToGuess = Math.trunc(Math.random() * 20 + 1);

let score = 10;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter a Number !';
  } else if (guess !== numberToGuess) {
    if (score > 1) {
      displayMessage(
        guess > numberToGuess
          ? `⬆️ It's Actually Too High !`
          : `⬇️ It's too Low !`
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`👎 You Lost the Game `);
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === numberToGuess) {
    document.querySelector('body').style.backgroundColor = 'rgb(25, 104, 25)';
    document.querySelector('.number').textContent = numberToGuess;
    displayMessage(` 🎉 You've Guessed it Right`);

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;

  numberToGuess = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Try to Guess...');

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(37, 48, 131)';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
