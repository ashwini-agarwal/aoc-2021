const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split(''));

const open = ['(', '[', '{', '<'];
const close = [')', ']', '}', '>'];
const points = [3, 57, 1197, 25137];

const score = input.map(chunks => {
    let score = 0;
    const stack = [];

    for (x of chunks) {
        if (open.includes(x)) {
            stack.push(x);
        } else if (close.includes(x)) {
            const expected = close[open.indexOf(stack.pop())];
            if (expected !== x) {
                score += points[close.indexOf(x)];
            }
        }
    }

    return score;
})

console.log(score.reduce((a, b) => a + b, 0));
