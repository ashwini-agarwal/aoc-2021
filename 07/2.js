const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(",").map(Number);

const distance = [...Array(2000).keys()].map(x => {
    let total = 0;
    for (y of input) {
        const d = Math.abs(x - y);
        const fuel = (d * (d + 1)) / 2
        total += fuel;
    }
    return total;
})

console.log(Math.min.apply(Math, distance));
