const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map((x) => x.split(" "));

let x = 0, y = 0, aim = 0;

for (const [direction, units] of input) {
    if (direction === 'forward') {
        x += Number(units);
        y += aim * Number(units);
    }

    if (direction === 'down') {
        aim += Number(units);
    }

    if (direction === 'up') {
        aim -= Number(units);
    }

    // console.log(x, y, aim);
}

console.log(x);
console.log(y);
console.log(x * y);
