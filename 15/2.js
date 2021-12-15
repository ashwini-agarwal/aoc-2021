const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split('').map(Number));

let width = input[0].length;
let height = input.length;

for (let counter = 1; counter < 5; counter++) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const newX = x + width * counter;
            input[y][newX] = (input[y][x] + counter) > 9 ? (input[y][x] + counter) % 9 : (input[y][x] + counter);
        }
    }
}

for (let counter = 1; counter < 5; counter++) {
    for (let y = 0; y < height; y++) {
        const newY = y + height * counter;
        input[newY] = input[y].map(x => (x + counter) > 9 ? (x + counter) % 9 : (x + counter));
    }
}


width = input[0].length;
height = input.length;

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
