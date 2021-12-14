const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n\n");

let polymer = input.shift();
const rules = input.shift().split('\n').map(x => x.split(' -> '));

let occurrences = [];
for (let i = 1; i < polymer.length; i++) {
    const key = `${polymer[i - 1]}${polymer[i]}`;
    occurrences[key] = occurrences[key] ? occurrences[key] + 1 : 1;
}

for (let counter = 0; counter < 40; counter++) {
    let temp = [];
    const currentKeys = Object.keys(occurrences).filter(key => occurrences[key]);
    for (let key of currentKeys) {
        temp[key] = temp[key] ? temp[key] + occurrences[key] : occurrences[key];
        const element = rules.find(([x, y]) => x === key);
        if (element) {
            const newElementOne = key[0] + element[1];
            const newElementTwo = element[1] + key[1];

            temp[newElementOne] = temp[newElementOne] ? temp[newElementOne] + occurrences[key] : occurrences[key];
            temp[newElementTwo] = temp[newElementTwo] ? temp[newElementTwo] + occurrences[key] : occurrences[key];
        }
    }

    for (let key of currentKeys) {
        temp[key] -= occurrences[key];
    }
    occurrences = temp;
}

const elements = [];
elements[polymer[0]] = 1;
for (let key of Object.keys(occurrences)) {
    elements[key[1]] = elements[key[1]] ? elements[key[1]] + occurrences[key] : occurrences[key];
}

const numbers = Object.values(elements).sort((a, b) => a - b);
console.log(numbers.pop() - numbers.shift());
