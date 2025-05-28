const SIZE = 5;
let grid = [];
let timerInterval;
let startTime;
let steps = 0;
let currentLevel = null;

async function loadMap() {
  try {
    const response = await fetch('map.json');
    if (!response.ok) throw new Error('Failed to load map.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading map:', error);
    return null;
  }
}

function createGrid(levelData) {
  if (!levelData) {
    console.error('Level data is undefined or invalid');
    return;
  }

  grid = [];
  steps = 0;
  updateStepsDisplay();

  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = '';

  for (let i = 0; i < SIZE; i++) {
    const row = [];
    for (let j = 0; j < SIZE; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (levelData.grid[i][j] === 1) {
        cell.classList.add('on');
      }

      cell.addEventListener('click', () => {
        toggleCell(i, j);
        checkWinCondition();
      });

      gridContainer.appendChild(cell);
      row.push(cell);
    }
    grid.push(row);
  }

  updateMinStepsDisplay(levelData.minSteps ?? '-');
}

function toggleCell(i, j) {
  const dirs = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]];
  for (const [dx, dy] of dirs) {
    const x = i + dx, y = j + dy;
    if (x >= 0 && x < SIZE && y >= 0 && y < SIZE) {
      grid[x][y].classList.toggle('on');
    }
  }
  steps++;
  updateStepsDisplay();
}

function checkWinCondition() {
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (grid[i][j].classList.contains('on')) {
        return;
      }
    }
  }
  stopTimer();
  alert(`Congratulations! You turned off all the lights in ${steps} steps!`);
}

function startTimer() {
  startTime = performance.now();
  timerInterval = setInterval(() => {
    const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
    document.getElementById('timer').textContent = `Time: ${elapsed} s`;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateStepsDisplay() {
  document.getElementById('steps').textContent = `Steps: ${steps}`;
}

function updateMinStepsDisplay(minSteps) {
  document.getElementById('minSteps').textContent = `Minimum Steps: ${minSteps}`;
}

document.getElementById('startBtn').addEventListener('click', async () => {
  const level = document.getElementById('levelSelect').value;
  const mapData = await loadMap();

  if (!mapData) {
    console.error('Failed to load map data');
    return;
  }

  const levelData = mapData[level];

  if (!levelData) {
    console.error(`Level data for: ${level} not found`);
    return;
  }

  currentLevel = level;
  createGrid(levelData);
  stopTimer();
  startTimer();
});

document.getElementById('restartBtn').addEventListener('click', async () => {
  const mapData = await loadMap();
  if (!mapData || !currentLevel) return;

  const levelData = mapData[currentLevel];
  if (!levelData) return;

  createGrid(levelData);
  stopTimer();
  startTimer();
});

document.getElementById('randomBtn').addEventListener('click', async () => {
  const mapData = await loadMap();
  if (!mapData) return;

  const levels = Object.keys(mapData);
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  const levelData = mapData[randomLevel];

  currentLevel = randomLevel;
  createGrid(levelData);
  stopTimer();
  startTimer();

  const select = document.getElementById('levelSelect');
  if ([...select.options].some(opt => opt.value === randomLevel)) {
    select.value = randomLevel;
  }
});
