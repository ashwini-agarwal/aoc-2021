const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split('').map(Number));

const low_points = [];


for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input[x].length; y++) {
        if (
            (input[x - 1] === undefined || input[x - 1][y] > input[x][y]) &&
            (input[x + 1] === undefined || input[x + 1][y] > input[x][y]) &&
            (input[x][y - 1] === undefined || input[x][y - 1] > input[x][y]) &&
            (input[x][y + 1] === undefined || input[x][y + 1] > input[x][y])
        ) {
            low_points.push(input[x][y]);
        }
    }
}

console.log(low_points.reduce((a, b) => a + b, 0) + low_points.length);
