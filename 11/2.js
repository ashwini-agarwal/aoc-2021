const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split('').map(Number));

let step;
let flashCount = 0;
for (step = 0; step < 10000; step++) {
    const flash = [];
    for (x in input) {
        for (y in input[x]) {
            if (input[x][y] === 9) {
                flash.push([Number(x), Number(y)]);
                input[x][y] = -1;
                flashCount++;
            }
            input[x][y] += 1;
        }
    }

    while (flash.length) {
        const [x, y] = flash.pop();

        for (dx = x - 1; dx <= x + 1; ++dx) {
            for (dy = y - 1; dy <= y + 1; ++dy) {
                if (dx === x && dy === y) {
                    continue;
                }

                if (input[dx] === undefined || input[dy] === undefined) {
                    continue;
                }

                if (input[dx][dy] === 0) {
                    continue;
                }

                if (input[dx][dy] === 9) {
                    flash.push([dx, dy]);
                    input[dx][dy] = -1;
                    flashCount++;
                }
                input[dx][dy] += 1;

            }
        }
    }

    if (input.every(x => x.every(x => x === 0))) {
        break;
    }

}

console.table(input);
console.table(step + 1);
console.table(flashCount);
