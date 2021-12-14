const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n\n");

let currentPolymer = input.shift();
const rules = input.shift().split('\n').map(x => x.split(' -> '));

for (let counter = 0; counter < 10; counter++) {

    let nextPolymer = currentPolymer[0];
    for (let i = 1; i < currentPolymer.length; i++) {
        const element = rules.find(([x, y]) => x === `${currentPolymer[i - 1]}${currentPolymer[i]}`);
        if (element) {
            nextPolymer += element[1];
        }
        nextPolymer += currentPolymer[i];
    }
    currentPolymer = nextPolymer;

}

const occurrences = currentPolymer.split('').reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

const numbers = Object.values(occurrences).sort((a, b) => a - b);

console.log(numbers.pop() - numbers.shift());
