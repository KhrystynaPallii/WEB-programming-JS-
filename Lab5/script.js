const startBtn = document.getElementById('startBtn');
const difficultySelect = document.getElementById('difficulty');
const colorPicker = document.getElementById('color');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let timerDuration = 0;
let timer = null;
let countdown = null;
let score = 0;
let square = null;

const timeSettings = {
  easy: 4,
  medium: 3,
  hard: 2
};

function start() {
    clearInterval(countdown);
    if (square) {
      square.remove();
    }
    score = 0;
    scoreDisplay.textContent = score;
  
    const difficulty = difficultySelect.value; 
    timerDuration = timeSettings[difficulty];
  
    timerDisplay.textContent = timerDuration;
  
    createSquare();
    startTime();
  }
  

function createSquare() {
  if (square) {
    square.remove();
  }

  square = document.createElement('div');
  square.classList.add('square');
  square.style.backgroundColor = colorPicker.value;

  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;

  const maxLeft = areaWidth - 50;
  const maxTop = areaHeight - 50;

  const left = Math.floor(Math.random() * maxLeft);
  const top = Math.floor(Math.random() * maxTop);

  square.style.left = `${left}px`;
  square.style.top = `${top}px`;

  square.addEventListener('click', onSquareClick);

  gameArea.appendChild(square);
}

function onSquareClick() {
  score++;
  scoreDisplay.textContent = score;
  resetTime();
  createSquare();
}

function startTime() {
  let timeLeft = timerDuration;
  timerDisplay.textContent = timeLeft;

  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      end();
    }
  }, 1000);
}

function resetTime() {
  clearInterval(countdown);
  startTime();
}

function end() {
  clearInterval(countdown);
  if (square) {
    square.remove();
  }
  alert(`От халепа! Ви програли, не сумуйте, адже можна дати собі другу спробу ;) Ваш рахунок: ${score}`);
}

startBtn.addEventListener('click', start);
