const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map((x) => x.split(""));

const transpose = input[0].map((x, i) => input.map(x => x[i])).map(x => x.join(''));

const gamma = [];
const epsilon = [];

transpose.map(x => {
    if (x.split('1').length > x.split('0').length) {
        gamma.push(1);
        epsilon.push(0);
    } else {
        gamma.push(0);
        epsilon.push(1);
    }
});


const gammaNum = Number(gamma.join(''));
const epsilonNum = Number(epsilon.join(''));

console.log(gammaNum, epsilonNum);
console.log(parseInt(gammaNum, 2), parseInt(epsilonNum, 2));
console.log(parseInt(gammaNum, 2) * parseInt(epsilonNum, 2));
