const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split(''));

const open = ['(', '[', '{', '<'];
const close = [')', ']', '}', '>'];
const points = [3, 57, 1197, 25137];


const valid_lines = input.filter(chunks => {
    const stack = [];
    for (x of chunks) {
        if (open.includes(x)) {
            stack.push(x);
        } else if (close.includes(x)) {
            const expected = close[open.indexOf(stack.pop())];
            if (expected !== x) {
                return false;
            }
        }
    }

    return true;
});

const score = valid_lines.map(chunks => {
    let score = 0;
    const stack = [];

    for (x of chunks) {
        if (open.includes(x)) {
            stack.push(x);
        } else {
            stack.pop();
        }
    }

    while (stack.length) {
        score = (score * 5) + open.indexOf(stack.pop()) + 1;
    }

    return score;
});

console.log(score.sort((a, b) => a - b)[Math.floor(score.length / 2)]);
