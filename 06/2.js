const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(",").map(Number);

const days = Array(9).fill(0);
for (const x of input) {
    days[x]++;
}

for (count = 0; count < 256; count++) {
    const today = days.shift();
    days.push(today);
    days[6] += today;
    // console.table(days);
}

const total = days.reduce((a, b) => a + b, 0);
console.log(total);
