const SIZE = 5;
let grid = [];
let timerInterval;
let startTime;

async function loadMap() {
  try {
    const response = await fetch('map.json');
    if (!response.ok) throw new Error('Не вдалося завантажити map.json');
    return await response.json();
  } catch (error) {
    console.error('Помилка при завантаженні карти:', error);
    return null;
  }
}

function createGrid(levelData) {
  if (!levelData) {
    console.error('Дані для рівня не визначено або вони невалідні');
    return;
  }

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
  const dirs = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]];
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

  if (!mapData) {
    console.error('Не вдалося завантажити дані карти');
    return;
  }

  const levelData = mapData[level];

  if (!levelData) {
    console.error(`Дані для рівня: ${level} не знайдено`);
    return;
  }

  createGrid(levelData);
  startTimer();
});

document.getElementById('restartBtn').addEventListener('click', async () => {
  const level = document.getElementById('levelSelect').value;
  const mapData = await loadMap();

  if (!mapData) {
    console.error('Не вдалося завантажити дані карти');
    return;
  }

  const levelData = mapData[level];

  if (!levelData) {
    console.error(`Дані для рівня: ${level} не знайдено`);
    return;
  }

  createGrid(levelData);
  stopTimer(); 
  startTimer(); 
});
