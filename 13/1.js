const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n\n").map(x => x.split("\n"));

let dots = input[0].map(x => x.split(',').map(Number));
const folds = input[1].map(x => x.replace('fold along ', '').split('=')).map(([x, y]) => [x, Number(y)]);

let paper = [];
for ([x, y] of dots) {
    if (!paper[y]) {
        paper[y] = [];
    }
    paper[y][x] = true;
}

for (fold of folds) {
    for (let y = 0; y < paper.length; y++) {
        if (paper[y] === undefined) {
            continue;
        }

        for (let x = 0; x < paper[y].length; x++) {

            if (paper[y][x] === undefined) {
                continue;
            }

            if (fold[0] === 'y') {
                if (y >= fold[1]) {

                    const dy = 2 * fold[1] - y;
                    if (!paper[dy]) {
                        paper[dy] = [];
                    }

                    paper[dy][x] = true;
                    paper[y][x] = false;
                }
            }

            if (fold[0] === 'x') {
                if (x >= fold[1]) {

                    const dx = 2 * fold[1] - x;

                    paper[y][dx] = true;
                    paper[y][x] = false;
                }
            }
        }
    }

    break;
}

console.log(paper.map(x => x.filter(Boolean).length).reduce((a, b) => a + b, 0));
