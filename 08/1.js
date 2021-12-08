const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split(' | '));

const output = input.map(x => x[1].split(' ').filter(x => [2, 3, 4, 7].includes(x.length)).length).reduce((a, b) => a + b, 0);

console.log(output);
