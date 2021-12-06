const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(Number);

let counter = 0;
for (index = 1; index < input.length; index++) {
    if (input[index] > input[index - 1]) {
        counter++;
    }

    // console.log(input[index - 1], input[index], counter);
}

console.log(input.length);
console.log(counter);
