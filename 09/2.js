const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split('').map(Number));

const basin = [];
const basin_size = [];

const calculate_basin_size = (x, y, size = 0) => {

    if (basin.includes(`${x}-${y}`)) {
        return size;
    }

    ++size;
    basin.push(`${x}-${y}`);

    if (input[x - 1] !== undefined && input[x - 1][y] !== 9) {
        size = calculate_basin_size(x - 1, y, size);
    }

    if (input[x + 1] !== undefined && input[x + 1][y] !== 9) {
        size = calculate_basin_size(x + 1, y, size);
    }

    if (input[x][y - 1] !== undefined && input[x][y - 1] !== 9) {
        size = calculate_basin_size(x, y - 1, size);
    }

    if (input[x][y + 1] !== undefined && input[x][y + 1] !== 9) {
        size = calculate_basin_size(x, y + 1, size);
    }

    return size;

}


for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input[x].length; y++) {
        if (
            (input[x - 1] === undefined || input[x - 1][y] > input[x][y]) &&
            (input[x + 1] === undefined || input[x + 1][y] > input[x][y]) &&
            (input[x][y - 1] === undefined || input[x][y - 1] > input[x][y]) &&
            (input[x][y + 1] === undefined || input[x][y + 1] > input[x][y])
        ) {
            basin_size.push(calculate_basin_size(x, y));
        }
    }
}


console.log(basin_size.sort((a, b) => b - a));
console.log(basin_size.sort((a, b) => a - b).splice(-3).reduce((a, b) => a * b, 1));
