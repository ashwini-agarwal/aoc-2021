const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n").map(x => x.split(' -> ').map(x => x.match(/\d+/g).map(Number)));

let matrix = [];

for ([[x1, y1], [x2, y2]] of input) {

    let xa = x1, xb = x2;
    let ya = y1, yb = y2;

    if (!matrix[xa]) {
        matrix[xa] = [];
    }
    if (!matrix[xa][ya]) {
        matrix[xa][ya] = 0;
    }
    matrix[xa][ya]++;

    do {

        if (ya > yb) {
            ya--;
        } else if (ya < yb) {
            ya++;
        }

        if (xa > xb) {
            xa--;
        } else if (xa < xb) {
            xa++;
        }

        if (!matrix[xa]) {
            matrix[xa] = [];
        }
        if (!matrix[xa][ya]) {
            matrix[xa][ya] = 0;
        }
        matrix[xa][ya]++;

        // console.log(xa, ya, xb, yb);


    } while (xa !== xb || ya !== yb);

}

let counter = 0;
matrix.forEach(x => {
    counter += x.filter(x => x > 1).length;
})


// console.table(matrix);
console.log(counter);
