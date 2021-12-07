const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(",").map(Number);

let fish = input;
for (count = 0; count < 80; count++) {
    for (i in fish) {
        if (fish[i] === 0) {
            fish[i] = 7;
            fish.push(8);
        }

        fish[i]--;
    }

    // console.table(fish);
}

console.log(fish.length);
