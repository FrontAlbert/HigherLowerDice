'use strict';

// Random Secret Number
let secretNumber = Math.floor(Math.random() * 20) + 1;

// Score
let score = 20;

// HighScore
let highScore = 0;

// !guess means no guess or guess = false = empty

let rollNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  // No Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    // Guess Correct!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'GGEZ!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // if Guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'GO LOWER!' : 'GO HIGHER';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GG Loser!';
    }

    //     // Guess too high
    //   } else if (guess > secretNumber) {
    //     if (score > 0) {
    //       document.querySelector('.message').textContent = 'Too High Noob!';
    //       score = score - 1;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'GG Loser!';
    //     }
    //     // Guess too Low
    //   } else if (guess < secretNumber) {
    //     if (score > 0) {
    //       document.querySelector('.message').textContent = 'Too Low Noob!!';
    //       score = score - 1;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'GG Loser!';
    //     }
    //   } else if ((score = 0)) {
    //     document.querySelector('.message').textContent = 'GG You Lost!!';
    //   }
  }
};

// New  Game
let newGame = function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', rollNumber);
document.querySelector('.again').addEventListener('click', newGame);
