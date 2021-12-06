const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map((x) => x.split(""));

const transpose = input[0].map((x, i) => input.map(x => x[i])).map(x => x.join(''));


o2rating = (input = [], i = 0) => {
    if (input.length === 1) {
        return input[0].join('');
    }

    const column = input.map(x => x[i]).join('');
    const filerKey = column.split('1').length >= column.split('0').length ? '1' : '0';
    const filteredInput = input.filter(x => x[i] === filerKey);
    return o2rating(filteredInput, i + 1);
}

co2rating = (input = [], i = 0) => {
    if (input.length === 1) {
        return input[0].join('');
    }

    const column = input.map(x => x[i]).join('');
    const filerKey = column.split('1').length >= column.split('0').length ? '0' : '1';
    const filteredInput = input.filter(x => x[i] === filerKey);
    return co2rating(filteredInput, i + 1);
}

const o2 = o2rating(input);
const co2 = co2rating(input);

console.log(o2, co2);
console.log(parseInt(o2, 2), parseInt(co2, 2));
console.log(parseInt(o2, 2) * parseInt(co2, 2));

