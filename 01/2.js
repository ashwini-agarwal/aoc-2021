const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(Number);

const sum = [];
for (index = 2; index < input.length; index++) {
    sum.push(input[index - 2] + input[index - 1] + input[index]);
}

let counter = 0;
for (index = 1; index < sum.length; index++) {
    if (sum[index] > sum[index - 1]) {
        counter++;
    }
}

console.log(counter);
