//! Code Starts

//?  Initializing variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//! Creating Functions to make the code clean
//? To display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//! Adding an Event Listener on the Check Button
const check = document.querySelector('.check');
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //! When there is no input
  if (!guess) {
    displayMessage("⛔ No number!");

    setTimeout(() => {
      displayMessage("Start guessing...");
    }, 2000);

    //! When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("h1").textContent = "You Won 🥳🥳🥳";

    document.body.style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "300px";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // !When guess is not secretNumber
    // ? This is a refactored code to implement the DRY principle
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Number too high" : "📉 Number too low"
      );

      score--;

      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😭 You lost the game");

      document.querySelector(".score").textContent = 0;

      document.querySelector("h1").textContent = "Game Over!!!";

      document.body.style.backgroundColor = "red";
    }
  }
});

//! Adding an Event Listener on the Again Button
//? Restarting / Resetting the game

const again = document.querySelector('.again');
again.addEventListener('click', () => {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('h1').textContent = 'Guess My Number!';

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '200px';

  document.body.style.backgroundColor = '#13192c';
});
