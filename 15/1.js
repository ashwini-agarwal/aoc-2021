const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split('').map(Number));

const width = input[0].length;
const height = input.length;

let finalRisk = 0;
const visited = [[0, 0]];
const queue = [[0, 0, 0]];

while (queue.length > 0) {
    const [lastX, lastY, risk] = queue.shift();

    if (lastX === width - 1 && lastY === height - 1) {
        finalRisk = risk;
        break;
    }

    const next = [
        ...((lastX < width - 1) ? [[lastX + 1, lastY]] : []),
        ...((lastY < height - 1) ? [[lastX, lastY + 1]] : []),
        ...(lastX ? [[lastX - 1, lastY]] : []),
        ...(lastY ? [[lastX, lastY - 1]] : []),
    ];

    for (const [nx, ny] of next) {
        if (!visited.find(([x, y]) => x === nx && y === ny)) {
            queue.push([nx, ny, risk + input[nx][ny]]);
            visited.push([nx, ny]);
        }
    }

    queue.sort((a, b) => a[2] - b[2]);
}

console.log(finalRisk);
