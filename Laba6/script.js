const SIZE = 5;
let grid = [];
let timerInterval;
let startTime;

async function loadMap() {
  const response = await fetch('map.json');
  return await response.json();
}

function createGrid(levelData) {
  grid = [];
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = ''; 

  for (let i = 0; i < SIZE; i++) {
    const row = [];
    for (let j = 0; j < SIZE; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (levelData[i][j] === 1) {
        cell.classList.add('on');
      }

      cell.addEventListener('click', () => toggleCell(i, j));

      gridContainer.appendChild(cell);
      row.push(cell);
    }
    grid.push(row);
  }
}

function toggleCell(i, j) {
  const dirs = [[0,0], [-1,0], [1,0], [0,-1], [0,1]];
  for (const [dx, dy] of dirs) {
    const x = i + dx, y = j + dy;
    if (x >= 0 && x < SIZE && y >= 0 && y < SIZE) {
      grid[x][y].classList.toggle('on');
    }
  }
}

function startTimer() {
  startTime = performance.now();
  timerInterval = setInterval(() => {
    const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
    document.getElementById('timer').textContent = `Час: ${elapsed} с`;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById('startBtn').addEventListener('click', async () => {
  const level = document.getElementById('levelSelect').value;
  const mapData = await loadMap();
  const levelData = mapData[level];

  createGrid(levelData);
  startTimer();
});

document.getElementById('restartBtn').addEventListener('click', async () => {
  const level = document.getElementById('levelSelect').value;
  const mapData = await loadMap();
  const levelData = mapData[level];

  createGrid(levelData);
  stopTimer();  
  startTimer();
});
