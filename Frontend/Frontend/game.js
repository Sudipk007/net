const tileSize = 20; // Size of each square tile in pixels
const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 2, 1, 0, 0, 0, 1, 2, 1, 0, 1], // 2 could be a Power Pellet
  [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function drawMaze() {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      const tile = map[row][col];
      const x = col * tileSize;
      const y = row * tileSize;

      if (tile === 1) { // Draw Wall
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, tileSize, tileSize);
      } else if (tile === 0) { // Draw Pellet
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x + tileSize/2, y + tileSize/2, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}