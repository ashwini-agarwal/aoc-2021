const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n\n").map(x => x.split("\n"));

let dots = input[0].map(x => x.split(',').map(Number));
const folds = input[1].map(x => x.replace('fold along ', '').split('=')).map(([x, y]) => [x, Number(y)]);

let paper = [];
let maxX = 0;
let maxY = 0;

for ([x, y] of dots) {
    if (!paper[y]) {
        paper[y] = [];
    }
    paper[y][x] = '#';
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? x : maxY;
}
console.log(maxX, maxY);
for (let y = 0; y <= maxY; y++) {
    if (paper[y] === undefined) {
        paper[y] = [];
    }

    for (let x = 0; x <= maxX; x++) {

        if (paper[y][x] === undefined) {
            paper[y][x] = '.';
        }
    }
}

for (fold of folds) {
    for (let y = 0; y < paper.length; y++) {
        if (paper[y] === undefined) {
            continue;
        }

        for (let x = 0; x < paper[y].length; x++) {

            if (paper[y][x] === undefined || paper[y][x] === '.') {
                continue;
            }

            if (fold[0] === 'y') {
                if (y >= fold[1]) {

                    const dy = 2 * fold[1] - y;
                    if (!paper[dy]) {
                        paper[dy] = [];
                    }

                    paper[dy][x] = '#';
                    paper[y][x] = '.';
                }
            }

            if (fold[0] === 'x') {
                if (x >= fold[1]) {

                    const dx = 2 * fold[1] - x;

                    paper[y][dx] = '#';
                    paper[y][x] = '.';
                }
            }
        }
    }

    if (fold[0] === 'y') {
        paper = paper.filter((x, i) => i < fold[1]);
    }

    if (fold[0] === 'x') {
        paper = paper.map(x => x.filter((x, i) => i < fold[1]));
    }
}

console.table(paper);
