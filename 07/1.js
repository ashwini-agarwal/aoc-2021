const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(",").map(Number);

const distance = [...Array(2000).keys()].map(x => {
    let total = 0;
    for (y of input) {
        total += Math.abs(x - y);
    }
    return total;
})

console.log(Math.min.apply(Math, distance));
