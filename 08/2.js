const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split(' | ').map(x => x.match(/[a-z]+/g).map(x => x.split('').sort().join(''))));

const output = input.map(([x, y]) => {
    const one = x.find(x => x.length === 2);
    const seven = x.find(x => x.length === 3);
    const four = x.find(x => x.length === 4);
    const eight = x.find(x => x.length === 7);

    const occurrence = x.reduce(((a, b) => {
        b.split('').map(x => {
            if (!a[x]) {
                a[x] = 0;
            }
            a[x]++;
        });
        return a;
    }), []);

    const segment = [];
    segment[0] = seven.split('').find(x => !one.includes(x));
    segment[1] = Object.keys(occurrence).find(key => occurrence[key] === 6);
    segment[2] = Object.keys(occurrence).find(key => key !== segment[0] && occurrence[key] === 8);
    segment[4] = Object.keys(occurrence).find(key => occurrence[key] === 4);
    segment[5] = Object.keys(occurrence).find(key => occurrence[key] === 9);

    segment[3] = four.split('').find(x => ![segment[1], segment[2], segment[5]].includes(x));
    segment[6] = Object.keys(occurrence).find(x => !segment.includes(x));


    const two = [segment[0], segment[2], segment[3], segment[4], segment[6]].sort().join('');
    const three = [segment[0], segment[2], segment[3], segment[5], segment[6]].sort().join('');
    const five = [segment[0], segment[1], segment[3], segment[5], segment[6]].sort().join('');
    const six = [segment[0], segment[1], segment[3], segment[4], segment[5], segment[6]].sort().join('');
    const nine = [segment[0], segment[1], segment[2], segment[3], segment[5], segment[6]].sort().join('');
    const zero = [segment[0], segment[1], segment[2], segment[4], segment[5], segment[6]].sort().join('');

    const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];
    const four_digit_output = y.map(x => numbers.indexOf(x));

    return Number(four_digit_output.join(''));


})

console.table(output.reduce((a, b) => a + b, 0));
